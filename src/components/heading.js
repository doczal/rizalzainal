import React from 'react'
import PropTypes from 'prop-types'
import styles from './heading.module.scss'
import classNames from 'classnames'

const Heading = ({ alt, children }) => (
  <h1 className={classNames(styles.heading, alt ? styles.alt : null)}>{children}</h1>
)

Heading.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Heading
