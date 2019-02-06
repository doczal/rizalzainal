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

const IndexPage = () => (
  <Layout>
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.mainDescription}>
          <h1 className={styles.headline}>I am <span>Rizal Zainal</span>,<br/>Front End Developer.</h1>
          <p className={styles.subHeadline}>The grand plan for this tutorial is to build an app that helps a staffing agency manage its stable of heroes.</p>
        </div>
      </div>
    </div>
    
    <section className={styles.projectSection}>
      <Body>
        <Heading>Projects</Heading>
        <ProjectCard />
        <ProjectCard />
      </Body>
    </section>
  </Layout>
)

export default IndexPage
