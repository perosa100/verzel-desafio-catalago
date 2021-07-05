import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from 'pages/SignIn'
import Home from 'pages/Home'
import SignUp from 'pages/SignUp'
import Course from 'pages/Course'
import Me from './../pages/Me/index'
import Page404 from 'pages/404'
import Dashboard from './../pages/Dashboard/index'
import { PrivateRoutes } from './PrivateRoutes'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/cursos" component={Course} />
        <PrivateRoutes path="/profile/me" component={Me} />
        <PrivateRoutes
          exact
          path="/dashboard"
          component={Dashboard}
          role="ROLE_ADMIN"
        />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  )
}
