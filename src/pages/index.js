import React from 'react'
import { Link } from 'gatsby'

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

const IndexPage = () => (
  <Layout>
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.mainDescription}>
          <h1 className={styles.headline}>I am <span>Rizal Zainal</span>,<br/>Front End Developer.</h1>
          <p className={styles.subHeadline}>The grand plan for this bla bla bla bla bla bla bla bla lorem ipsum.</p>
        </div>
      </div>
    </div>
    
    <section className={styles.projectsSection}>
      <Body>
        <Heading>Projects</Heading>
        <div className={styles.projectsContainer}>
          <ProjectCard image={pt} desc="A typing web game based on React with user authentication and leaderboards via Firebase. This is the ultimate project." />
          <ProjectCard image={rs} />
          <ProjectCard image={mirado} />
          <ProjectCard image={etc} />
          <ProjectCard image={ninjet} />
          <ProjectCard image={sng} />
          <ProjectCard image={swat} />
        </div>
      </Body>
    </section>
  </Layout>
)

export default IndexPage
