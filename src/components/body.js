import React from 'react'
import PropTypes from 'prop-types'
import styles from './body.module.scss'

const Body = ({ children }) => (
  <div className={styles.body}>
    {children}
  </div>
)

Body.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Body
