import { createContext, useCallback, useContext, useState } from 'react'
import api from '../services/api'

export interface User {
  id: string
  email: string
  name: string
  roles: {
    name: string
  }[]
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextState {
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
  userLogged(): boolean
  logout(): void
}

interface AuthState {
  token: string
  user: User
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('verzel@verzel:token')
    const user = localStorage.getItem('verzel@verzel:user')

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`

      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post<AuthState>('sessions', {
      email,
      password
    })

    const { token, user } = response.data

    localStorage.setItem('verzel@verzel:token', token)
    localStorage.setItem('verzel@verzel:user', JSON.stringify(user))

    api.defaults.headers.authorization = `Bearer ${token}`

    setData({
      token,
      user
    })
  }, [])

  const userLogged = useCallback(() => {
    const token = localStorage.getItem('verzel@verzel:token')
    if (token) {
      return true
    }
    return false
  }, [])

  const logout = useCallback(async () => {
    localStorage.removeItem('verzel@verzel:token')
    localStorage.removeItem('verzel@verzel:user')

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, userLogged, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextState {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
export { AuthProvider, useAuth }
