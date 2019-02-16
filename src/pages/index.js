import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Body from '../components/body'
import Image from '../components/image'
import SEO from '../components/seo'
import ProjectCard from '../components/projectCard'
import Heading from '../components/heading'
import styles from './home.module.scss'

const IndexPage = ({
  data: {
    allContentfulProject: {
      edges,
    },
  },
}) => (
  <Layout>
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.mainDescription}>
          <h1 className={styles.headline}>I am <span>Rizal Zainal</span>,<br/>Front End Developer.</h1>
          <p className={styles.subHeadline}>The grand plan for this bla bla bla bla blaz bla bla bla lorem ipsum.</p>
        </div>
      </div>
    </div>
    <section className={styles.projectsSection}>
      <Body>
        <Heading>Projects</Heading>
        <div className={styles.projectsContainer}>
          {edges.map(({ node }) => (
            <ProjectCard
              key={node.id}
              title={node.title}
              image={node.thumbnail.file.url}
              imageAlt={node.thumbnail.description}
              desc={node.description}
              tags={node.tags}
            />
          ))}
        </div>
      </Body>
    </section>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allContentfulProject: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          thumbnail: PropTypes.shape({
            description: PropTypes.string.isRequired,
            file: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
          description: PropTypes.string.isRequired,
          tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        }).isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query ProjectsQuery {
    allContentfulProject {
      edges {
        node {
          id,
          title,
          thumbnail {
            description,
            file {
              url,
            },
          },
          description,
          tags,
        }
      }
    }
  }
`
