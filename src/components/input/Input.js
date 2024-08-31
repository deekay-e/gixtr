import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ name, type, value, className, labelText, placeholder, hnadleChange }) => {
  return (
    <>
      <div className="form-row">
        {labelText && <label htmlFor={name} className="form-label">{labelText}</label>}

        <input
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
  value: PropTypes.string,
  className: PropTypes.string,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  hnadleChange: PropTypes.func
}

export default Input
