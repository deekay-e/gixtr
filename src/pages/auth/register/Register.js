import React, { useState } from 'react'
import { authService } from '../../../services/api/auth/auth.service'

import './Register.scss'
import Input from '../../../components/input/Input'
import Button from '../../../components/button/Button'
import { Utils } from '../../../services/utils/utils.service'

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
      const avatarColor = Utils.avatarColor()
      const roles = ['org:admin', 'org:user']
      const avatarImage = Utils.generateAvatar(username.charAt(0).toUpperCase(), avatarColor)
      const user = await authService.signup({
        username,
        roles,
        email,
        password,
        avatarColor,
        avatarImage
      })
      console.log(user)

      // 1 - set logged un to true in local storage
      // 2 - set username in local storage
      // 3 - dispatch user to redux

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
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            handleChange={(event) => setUsername(event.target.value)}
          />
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            labelText="Email"
            placeholder="Enter your email"
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            handleChange={() => setEmail(event.target.value)}
          />
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            labelText="Password"
            placeholder="Enter your password"
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
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
