import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import classNames from 'classnames'
import styles from './header.module.scss'
import logo from '../images/rizal_logo.svg'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { scroll } = this.state
    if (window.pageYOffset > 0 && !scroll) {
      this.setState({
        scroll: true,
      })
    } else if (window.pageYOffset === 0 && scroll) {
      this.setState({
        scroll: false,
      })
    }
  }

  render() {
    const { navLinks } = this.props
    const { scroll } = this.state
    return (
      <header className={classNames(styles.header, scroll ? styles.scroll : null)}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Rizal Logoz" className={styles.logo}/>
          </div>
          <nav className={styles.navLinks}>
            {navLinks.map((navLink, i) => (
              <Link key={i} className={styles.navLink} to={`/${ navLink.slug }`}>{navLink.name}</Link>
            ))}
          </nav>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  navLinks: PropTypes.array,
}

export default Header
