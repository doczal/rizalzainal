import React from 'react'
import PropTypes from 'prop-types'
import styles from './heading.module.scss'

const Heading = ({ children }) => (
  <h1 className={styles.heading}>{children}</h1>
)

Heading.PropTypes = {
  children: PropTypes.node.isRequired,
}

export default Heading
