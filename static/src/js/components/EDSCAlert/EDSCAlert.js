import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Alert } from 'react-bootstrap'

import EDSCIcon from '../EDSCIcon/EDSCIcon'

import './EDSCAlert.scss'

export const EDSCAlert = ({
  bootstrapVariant,
  children,
  icon,
  variant
}) => {
  const alertClassName = classNames([
    'edsc-alert',
    {
      'edsc-alert--icon': icon,
      [`edsc-alert--${variant}`]: variant
    }
  ])
  return (
    <Alert
      className={alertClassName}
      variant={bootstrapVariant}
    >
      {
        icon && (
          <EDSCIcon icon={icon} className="edsc-alert__icon" />
        )
      }
      <div className="edsc-alert__contents">
        {children}
      </div>
    </Alert>
  )
}

EDSCAlert.defaultProps = {
  children: null,
  icon: null,
  variant: false
}

EDSCAlert.propTypes = {
  bootstrapVariant: PropTypes.string.isRequired,
  children: PropTypes.node,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  variant: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
}

export default EDSCAlert
