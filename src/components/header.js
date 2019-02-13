import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './header.module.scss'
import logo from '../images/rizal_logo.svg'

const Header = ({ navLinks }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Rizal Logo" className={styles.logo}/>
      </div>
      <nav className={styles.navLinks}>
        {navLinks.map((navLink, i) => (
          <Link key={i} className={styles.navLink} to={`/${ navLink.slug }`}>{navLink.name}</Link>
        ))}
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  navLinks: PropTypes.array,
}

export default Header
