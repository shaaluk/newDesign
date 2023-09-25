import React from 'react'
import Main from './Main'
import LoginForm from './Forms/LoginForm'

const LoginPage = () => {
  return (
    <Main children={<LoginForm/>}/>
  )
}

export default LoginPage