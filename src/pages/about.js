import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Body from '../components/body'
import SEO from '../components/seo'
import Heading from '../components/heading'
import classNames from 'classnames'
import styles from './about.module.scss'

const AboutPage = ({
  data: {
    contentfulAboutPage: {
      title,
      description,
      about,
      currentSkills,
      toDoSkills,
    },
    allContentfulExperience: {
      edges,
    },
  },
}) => (
  <Layout>
    <SEO
      title={title}
    />
    <header className={styles.aboutHeader}>
      <Heading alt>About</Heading>
      <div
        dangerouslySetInnerHTML={{ __html: about.childMarkdownRemark.html }}
        className={styles.aboutDesc}
      />
    </header>
    <section className={styles.skillsSection}>
      <Body>
        <Heading subHeading>Skills</Heading>
        <div className={styles.skillsContainer}>
          <div className={classNames(styles.cardContainer, styles.current)}>
            <div className={styles.skillCard}>
              <h3 className={styles.cardTitle}>Experienced In</h3>
              <ul className={styles.skillList}>
                {currentSkills.map((skill) => (
                  <li key={skill} className={styles.skillItem}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={classNames(styles.cardContainer, styles.todo)}>
            <div className={styles.skillCard}>
              <h3 className={styles.cardTitle}>Work In Progress</h3>
              <ul className={styles.skillList}>
                {toDoSkills.map((skill) => (
                  <li key={skill} className={styles.skillItem}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Body>
    </section>
    <section className={styles.expSection}>
      <Body>
        <Heading subHeading>Experience</Heading>
        <div className={styles.expContainer}>
          {edges.map(({ node }) => (
            <div key={node.id} className={styles.expCard}>
              <div className={styles.expInfo}>
                <div className={styles.position}>
                  <h3>{node.title}</h3>
                  <span>{node.role}</span>
                </div>
                <div className={styles.year}>
                  {node.period}
                </div>
              </div>
              <div className={styles.expDetails}>
                <ul className={styles.roleList}>
                  {node.contributions.map((contribution, i) => (
                    <li key={i} >{contribution}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Body>
    </section>
    <section className={styles.contactSection}>
      <p className={styles.contactDesc}>Want to get in touch? Drop me an email at <span>doczal@gmail.com</span>.</p>
    </section>
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
    contentfulAboutPage {
      title
      description
      about {
        childMarkdownRemark {
          html
        }
      }
      currentSkills
      toDoSkills
    }

    allContentfulExperience (
      sort: {
        fields: [startDate]
        order: DESC
      }
    ) {
      edges {
        node {
          id
          title
          role
          startDate
          period
          contributions
        }
      }
    }
  }
`
