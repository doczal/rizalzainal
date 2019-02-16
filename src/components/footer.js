import React, { Component } from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <p>© 2019 Rizal Zainal. Made with <a href="https://www.gatsbyjs.org/">Gatsby</a></p>
  </footer>
)

export default Footer
