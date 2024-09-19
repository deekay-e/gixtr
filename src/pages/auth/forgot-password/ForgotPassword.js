import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

import Input from '@component/input/Input'
import Button from '@component/button/Button'
import { authService } from '@service/api/auth/auth.service'
import backgroundImage from '@asset/images/background.jpg'
import '@page/auth/forgot-password/ForgotPassword.scss'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [hasResponse, setHasResponse] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')
  const [alertType, setAlertType] = useState('')
  const [loading, setLoading] = useState(false)

  const forgotPassword = async (event) => {
    setLoading(true)
    event.preventDefault()
    try {
      const res = await authService.forgotPassword(email)

      setEmail('')
      setLoading(true)
      setHasResponse(false)
      setAlertType('alert-success')
      setResponseMessage(res?.data.message)
    } catch (error) {
      setLoading(false)
      setHasResponse(true)
      setAlertType('alert-error')
      setResponseMessage(error?.response?.data.message)
    }
  }

  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div
          className="tabs forgot-password-tabs"
          style={{ height: `${responseMessage ? '300px' : ''}` }}
        >
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login forgot-password">Forgot Password</div>
              </li>
            </ul>

            <div className="tab-item">
              <div className="auth-inner">
                {hasResponse && responseMessage && (
                  <div className={`alerts ${alertType}`} role="alert">
                    {responseMessage}
                  </div>
                )}
                <form className="auth-form" onSubmit={forgotPassword}>
                  <div className="form-input-container">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      labelText="Email"
                      placeholder="Enter your email"
                      style={{ border: `${hasResponse ? '1px solid #fa9b8a' : ''}` }}
                      handleChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <Button
                    label={`${loading ? 'FORGOT PASSWORD IN PROGRESS...' : 'FORGOT PASSWORD'}`}
                    className="auth-button button"
                    disabled={!email}
                  />

                  <Link to={'/'}>
                    <span className="forgot-password">
                      <FaArrowLeft className="arrow-left" /> Back to Login
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
