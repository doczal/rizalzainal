import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Body from '../components/body'
import Image from '../components/image'
import SEO from '../components/seo'
import ProjectCard from '../components/projectCard'
import Heading from '../components/heading'
import heroImage from '../images/cubes.svg'
import styles from './home.module.scss'
import swat from '../images/swat.jpg'
import etc from '../images/etc.jpg'
import mirado from '../images/mirado.jpg'
import rs from '../images/randomstream.jpg'
import pt from '../images/poketyper.jpg'
import ninjet from '../images/ninjet.jpg'
import sng from '../images/sitngo.jpg'

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
            <ProjectCard image={pt} desc={node.description}/>
          ))}
        </div>
      </Body>
    </section>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {

}

export const pageQuery = graphql`
  query ProjectsQuery {
    allContentfulProject {
      edges {
        node {
          title,
          description,
          tags,
        }
      }
    }
  }
`
