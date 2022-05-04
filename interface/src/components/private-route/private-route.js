import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = props => {
  const token = localStorage.getItem('accessToken')

  return token ? (
    <Route {...props} />
  ) : (
    <Route {...props} component={() => <Redirect to='/sign-in' />} />
  )
}

export default PrivateRoute
