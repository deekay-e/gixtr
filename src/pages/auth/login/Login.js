import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

import './Login.scss'
import Input from '../../../components/input/Input'
import Button from '../../../components/button/Button'

const Login = () => {
  return (
    <div className="auth-inner">
      <div className="alerts alert-error" role="alert">
        Error message
      </div>
      <form className="auth-form">
        <div className="form-input-container">
          <Input
            id="username"
            name="username"
            type="text"
            value="KayCee"
            labelText="Username"
            placeholder="Enter your username"
          />
          <Input
            id="password"
            name="password"
            type="password"
            value="praise"
            labelText="Password"
            placeholder="Enter your password"
          />
          <label className="checkmark-container" htmlFor="checkbox">
            <Input id="checkbox" type="checkbox" name="checkbox" value={false} />
            Keep me signed in
          </label>
        </div>
        <Button label={'LOGIN'} className="auth-button button" disabled={true} />

        <span className="forgot-password">
          Forgot password? <FaArrowRight className="arrow-right" />
        </span>
      </form>
    </div>
  )
}

export default Login
