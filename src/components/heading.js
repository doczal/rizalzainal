import React from 'react'
import PropTypes from 'prop-types'
import styles from './heading.module.scss'
import classNames from 'classnames'

const Heading = ({ alt, subHeading, children }) => {
  if (subHeading) {
    return (
      <h2 className={classNames(styles.heading, alt ? styles.alt : null)}>{children}</h2>
    )
  } else {
    return (
      <h1 className={classNames(styles.heading, alt ? styles.alt : null)}>{children}</h1>
    )
  }
}

Heading.propTypes = {
  alt: PropTypes.bool,
  subHeading: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Heading
