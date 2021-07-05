import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { FormLink, FormWrapper, FormLoading, FormError } from 'components/Form'
import TextField from 'components/TextField'
import { useToast } from 'context/toast'
import { useState } from 'react'
import { FieldErrors, signInValidate } from 'utils/validations'

import { Link, useHistory } from 'react-router-dom'

import * as S from './styles'
import { useAuth } from 'context/AuthContent'

const FormSignIn = () => {
  const history = useHistory()
  const { signIn } = useAuth()
  const { addToast } = useToast()
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({
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

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    try {
      await signIn({
        email: values.email,
        password: values.password
      })

      addToast({
        type: 'success',
        title: 'Logando com sucesso',
        description: 'Você será direcionado para seu perfil'
      })
    } catch (error: any) {
      addToast({
        type: 'error',
        title: 'Erro ao logar',
        description: error.response.data.error
      })
      setLoading(false)
      return
    }

    setLoading(false)

    history.push('/profile/me')
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
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />

        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />

        <S.ForgetPassword href="#">Esqueçeu sua senha?</S.ForgetPassword>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Acessar</span>}
        </Button>

        <FormLink>
          Não tem conta? <Link to="/sign-up">Vamos criar</Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
