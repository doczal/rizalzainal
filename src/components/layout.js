import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Header from './header'
import '../styles/normalize.css'
import './layout.scss'

const Layout = ({ data, children }) => (
  <>
    <Header
      navLinks={data.site.siteMetadata.navLinks}
    />
    {children}
    <footer></footer>
  </>
)

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            navLinks {
              name
              slug
            }
          }
        }
      }
    `}
    render={(data) => <Layout data={data} {...props} />}
  />
)

Layout.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        navLinks: PropTypes.shape({
          name: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
}
