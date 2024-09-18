import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useSearchParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

import './ResetPassword.scss'
import Input from '../../../components/input/Input'
import Button from '../../../components/button/Button'
import backgroundImage from '../../../assets/images/background.jpg'
import { authService } from '../../../services/api/auth/auth.service'

const ResetPassword = () => {
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const [hasResponse, setHasResponse] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')
  const [alertType, setAlertType] = useState('')
  const [loading, setLoading] = useState(false)
  const [searchParams] = useSearchParams()

  const resetPassword = async (event) => {
    setLoading(true)
    event.preventDefault()
    try {
      const body = { password, cPassword }
      const token = searchParams.get('token')
      const res = await authService.resetPassword(token, body)

      setPassword('')
      setCPassword('')
      setLoading(false)
      setResponseMessage(res?.data.message)
      setAlertType('alert-success')
      setHasResponse(false)
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
          className="tabs reset-password-tabs"
          style={{ height: `${responseMessage ? '400px' : ''}` }}
        >
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login reset-password">Reset Password</div>
              </li>
            </ul>
            <div className="tab-item">
              <div className="auth-inner">
                {hasResponse && responseMessage && (
                  <div className={`alerts ${alertType}`} role="alert">
                    {responseMessage}
                  </div>
                )}
                <form className="reset-password-form" onSubmit={resetPassword}>
                  <div className="form-input-container">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      labelText="New Password"
                      placeholder="New Password"
                      style={{ border: `${hasResponse ? '1px solid #fa9b8a' : ''}` }}
                      handleChange={(event) => setPassword(event.target.value)}
                    />
                    <Input
                      id="cPassword"
                      name="cPassword"
                      type="password"
                      value={cPassword}
                      labelText="Confirm Password"
                      placeholder="Confirm Password"
                      style={{ border: `${hasResponse ? '1px solid #fa9b8a' : ''}` }}
                      handleChange={(event) => setCPassword(event.target.value)}
                    />
                  </div>
                  <Button
                    label={`${loading ? 'RESET PASSWORD IN PROGRESS...' : 'RESET PASSWORD'}`}
                    className="auth-button button"
                    disabled={!password || !cPassword}
                  />

                  <Link to={'/'}>
                    <span className="login">
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

ResetPassword.propTypes = {
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired
}

export default ResetPassword
