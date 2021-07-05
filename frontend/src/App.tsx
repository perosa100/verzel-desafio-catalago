import AppProvider from 'context'
import { Routes } from 'routes'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
