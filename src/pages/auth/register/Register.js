import React, { useState } from 'react'

import './Register.scss'
import Input from '../../../components/input/Input'
import Button from '../../../components/button/Button'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [alertType, setAlertType] = useState('')
  const [hasError, setHasError] = useState(false)

  const registerUser = async (event) => {
    setLoading(true)
    event.preventDefault()
    try {
      setHasError(false)
      setAlertType('alert-success')
    } catch (error) {
      setLoading(false)
      setHasError(true)
      setAlertType('alert-error')
      setErrorMessage(error?.response?.data.message)
    }
  }

  return (
    <div className="auth-inner">
      {hasError && errorMessage && (
        <div className={`alerts ${alertType}`} role="alert">
          {errorMessage}
        </div>
      )}
      <form className="auth-form" onSubmit={registerUser}>
        <div className="form-input-container">
          <Input
            id="username"
            name="username"
            type="text"
            value={username}
            labelText="Username"
            placeholder="Enter your username"
            handleChange={(event) => setUsername(event.target.value)}
          />
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            labelText="Email"
            placeholder="Enter your email"
            handleChange={() => setEmail(event.target.value)}
          />
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            labelText="Password"
            placeholder="Enter your password"
            handleChange={() => setPassword(event.target.value)}
          />
        </div>
        <Button
          label={`${loading ? 'SIGNUP IN PROGRESS...' : 'SIGN UP'}`}
          className="auth-button button"
          disabled={!username || !email || !password}
        />
      </form>
    </div>
  )
}

export default Register
