import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './body.module.scss'

const Body = ({ children, className }) => (
  <div className={classNames(styles.body, className)}>
    {children}
  </div>
)

Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Body
