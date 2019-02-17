import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styles from './project.module.scss'
import Layout from '../components/layout'
import Heading from '../components/heading'
import Body from '../components/body'

const Project = ({
  data: {
    contentfulProject: {
      title,
      date,
      projectType,
      tools,
      body,
    },
  },
}) => (
  <Layout>
    <header className={styles.projectHeader}>
      <Heading alt>{title}</Heading>
      <div className={styles.projectInfo}>
        <div className={styles.subInfoContainer}>
          <div className={styles.subInfo}>
            <h4 className={styles.subTitle}>Year</h4>
            <div className={styles.subDesc}>{date}</div>
          </div>
          <div className={styles.subInfo}>
            <h4 className={styles.subTitle}>Project Type</h4>
            <div className={styles.subDesc}>{projectType}</div>
          </div>
          <div className={styles.subInfo}>
            <h4 className={styles.subTitle}>Tools and Tech</h4>
            <div className={styles.subDesc}>{tools.join(', ')}</div>
          </div>
        </div>
        <div className={styles.projectLinks}>
          <a className={styles.projectLink} href="#">View Project</a>
          <a className={styles.projectLink} href="#">View Source</a>
        </div>
      </div>
    </header>
    <div className={styles.background}>
      <Body className={styles.contentContainer}>
        <div
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
          className={styles.content}
        />
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
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
