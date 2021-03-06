import { AuthProvider } from './AuthContent'
import { ToastProvider } from './toast'

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
)

export default AppProvider
