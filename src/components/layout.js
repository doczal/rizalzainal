import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import '../styles/normalize.css'
import './layout.module.scss'

const Layout = ({ children }) => (
  <>
    <Header></Header>
    {children}
    <footer></footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
