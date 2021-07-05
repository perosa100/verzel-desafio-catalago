import {
  AccountCircle,
  Email,
  Lock,
  ErrorOutline
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { FormLink, FormWrapper, FormLoading, FormError } from 'components/Form'
import TextField from 'components/TextField'
import { useToast } from 'context/toast'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from './../../services/api'

import {
  FieldErrors,
  signUpValidate,
  UsersPermissionsRegisterInput
} from 'utils/validations'

const FormSignUp = () => {
  const history = useHistory()

  const { addToast } = useToast()
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    name: '',
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setFormError('')

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    try {
      await api.post('/users', {
        name: values.name,
        email: values.email,
        password: values.password
      })

      addToast({
        type: 'success',
        title: 'Conta criada com sucesso',
        description:
          'Sua conta foi criada vc será direcionado para pagina de login'
      })
    } catch (error: any) {
      addToast({
        type: 'error',
        title: 'Erro ao criar conta',
        description: error.response.data.message
      })
      setLoading(false)
      return
    }

    setLoading(false)

    history.push('/sign-in')
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          placeholder="Name"
          type="name"
          error={fieldError?.name}
          onInputChange={(v) => handleInput('name', v)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(v) => handleInput('confirm_password', v)}
          icon={<Lock />}
        />
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Cadastrar</span>}
        </Button>

        <FormLink>
          Já possui Conta? <Link to="/sign-in">Logue Agora</Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
