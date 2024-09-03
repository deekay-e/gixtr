import React from 'react'

import './Register.scss'
import Input from '../../../components/input/Input'
import Button from '../../../components/button/Button'

const Register = () => {
  return (
    <div className="auth-inner">
      {/* <div className="alerts alert-error" role="alert">
        Error message
      </div> */}
      <form className="auth-form">
        <div className="form-input-container">
          <Input
            id="username"
            name="username"
            type="text"
            value="KayCee"
            labelText="Username"
            placeholder="Enter your username"
            handleChange={() => {}}
          />
          <Input
            id="email"
            name="email"
            type="email"
            value="chi.pra@kaycee.co"
            labelText="Email"
            placeholder="Enter your email"
            handleChange={() => {}}
          />
          <Input
            id="password"
            name="password"
            type="password"
            value="praise"
            labelText="Password"
            placeholder="Enter your password"
            handleChange={() => {}}
          />
        </div>
        <Button label={'SIGN UP'} className="auth-button button" disabled={true} />
      </form>
    </div>
  )
}

export default Register
