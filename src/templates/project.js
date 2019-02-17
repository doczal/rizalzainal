import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styles from './project.module.scss'
import Layout from '../components/layout'
import Heading from '../components/heading'
import Body from '../components/body'

const Project = ({
  data: {
    contentfulProject
  },
}) => (
  <Layout>
    <header className={styles.projectHeader}>
      <Heading alt>{contentfulProject.title}</Heading>
      <div className={styles.projectInfo}>
        <div className={styles.subInfo}>
          <h4 className={styles.subTitle}>Year</h4>
          <div className={styles.subDesc}>{contentfulProject.date}</div>
        </div>
        <div className={styles.subInfo}>
          <h4 className={styles.subTitle}>Project Type</h4>
          <div className={styles.subDesc}>{contentfulProject.projectType}</div>
        </div>
        <div className={styles.subInfo}>
          <h4 className={styles.subTitle}>Tools and Tech</h4>
          <div className={styles.subDesc}>{contentfulProject.tools.join(', ')}</div>
        </div>
      </div>
    </header>
    <div className={styles.background}>
      <Body className={styles.contentContainer}>
        <div className={styles.content}>
          {}
        </div>
      </Body>
    </div>
  </Layout>
)

export default Project

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      date(formatString: "YYYY")
      projectType
      tools
    }
  }
`
