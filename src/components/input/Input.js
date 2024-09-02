import React from 'react'
import PropTypes from 'prop-types'

import './Input.scss'

const Input = ({ id, name, type, value, className, labelText, placeholder, hnadleChange }) => {
  return (
    <>
      <div className="form-row">
        {labelText && <label htmlFor={name} className="form-label">{labelText}</label>}

        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={hnadleChange}
          placeholder={placeholder}
          className={`form-input ${className}`}
          autoComplete="false"
        />
      </div>
    </>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.any,
  className: PropTypes.string,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  hnadleChange: PropTypes.func
}

export default Input
