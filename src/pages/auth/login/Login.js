import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

import '@page/auth/login/Login.scss'
import Input from '@component/input/Input'
import Button from '@component/button/Button'
import { authService } from '@service/api/auth/auth.service'

const Login = () => {
  const [user, setUser] = useState({})
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [persistLogin, setPersistLogin] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [hasError, setHasError] = useState(false)
  const [alertType, setAlertType] = useState('')
  const [loading, setLoading] = useState(false)

  const loginUser = async (event) => {
    setLoading(true)
    event.preventDefault()
    try {
      const res = await authService.signin({
        login,
        password
      })
      console.log(res)

      // 1 - set logged un to true in local storage
      // 2 - set username in local storage
      // 3 - dispatch user to redux

      setHasError(false)
      setUser(res.data.user)
      setPersistLogin(persistLogin)
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
    if (user) {
      console.log('navigate to streams page from login')
      setLoading(false)
    }
  }, [loading, user])

  return (
    <div className="auth-inner">
      {hasError && errorMessage && (
        <div className={`alerts ${alertType}`} role="alert">
          {errorMessage}
        </div>
      )}
      <form className="auth-form" onSubmit={loginUser}>
        <div className="form-input-container">
          <Input
            id="login"
            name="login"
            type="text"
            value={login}
            labelText="Login"
            placeholder="Enter your username or email"
            handleChange={(event) => setLogin(event.target.value)}
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
          <label className="checkmark-container" htmlFor="checkbox">
            <Input
              id="checkbox"
              type="checkbox"
              name="checkbox"
              value={persistLogin}
              style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
              handleChange={(event) => setPersistLogin(event.target.value)}
            />
            Keep me signed in
          </label>
        </div>
        <Button
          label={`${loading ? 'SIGNIN IN PROGRESS...' : 'SIGN IN'}`}
          className="auth-button button"
          disabled={!login || !password}
        />

        <Link to={'/forgot-password'}>
          <span className="forgot-password">
            Forgot password? <FaArrowRight className="arrow-right" />
          </span>
        </Link>
      </form>
    </div>
  )
}

export default Login
