import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './404.module.scss'
import qMark from '../images/404.svg'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.container}>
      <div className={styles.message}>
        <h1><span>404</span> Not Found</h1>
        <img className={styles.questionMark} src={qMark} alt="404"/>
        <p>Whoops, this page does not exist.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
