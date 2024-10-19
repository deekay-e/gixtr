import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Input from '@component/input/Input'
import Button from '@component/button/Button'
import { authService } from '@service/api/auth/auth.service'
import { Utils } from '@service/utils/utils.service'
import '@page/auth/register/Register.scss'

const Register = () => {
  const [user, setUser] = useState({})
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [hasError, setHasError] = useState(false)
  const [alertType, setAlertType] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate

  const registerUser = async (event) => {
    setLoading(true)
    event.preventDefault()
    try {
      const avatarColor = Utils.avatarColor()
      const avatarImage = Utils.generateAvatar(username.charAt(0).toUpperCase(), avatarColor)
      const res = await authService.signup({
        username,
        email,
        password,
        avatarColor,
        avatarImage
      })
      console.log(res)

      // 1 - set logged un to true in local storage
      // 2 - set username in local storage
      // 3 - dispatch user to redux

      setUser(res.data.user)
      setHasError(false)
      setAlertType('alert-success')
    } catch (error) {
      setLoading(false)
      setHasError(true)
      setAlertType('alert-error')
      setErrorMessage(error?.response?.data.message)
    }
  }

  useEffect(() => {
    if (loading && !user) return
    if (user) navigate('/app/stream')
  }, [loading, user, navigate])

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
            handleChange={(event) => setEmail(event.target.value)}
          />
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            labelText="Password"
            placeholder="Enter your password"
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            handleChange={(event) => setPassword(event.target.value)}
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
