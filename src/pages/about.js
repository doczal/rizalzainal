import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Body from '../components/body'
import SEO from '../components/seo'
import Heading from '../components/heading'
import classNames from 'classnames'
import styles from './about.module.scss'

const AboutPage = () => (
  <Layout>
    <header className={styles.aboutHeader}>
      <Heading alt>About</Heading>
      <p className={styles.aboutDesc}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    </header>
    <section className={styles.skillsSection}>
      <Body>
        <Heading subHeading>Skills</Heading>
        <div className={styles.skillsContainer}>
          <div className={classNames(styles.skillCard, styles.current)}>
            <h3 className={styles.cardTitle}>Experienced In</h3>
            <div className={styles.skillList}>
              <span className={styles.skillItem}>HTML/CSS</span>
              <span className={styles.skillItem}>JavaScript ES6+</span>
              <span className={styles.skillItem}>React</span>
              <span className={styles.skillItem}>Node.js</span>
              <span className={styles.skillItem}>Photoshop</span>
              <span className={styles.skillItem}>HTML/CSS</span>
              <span className={styles.skillItem}>JavaScript ES6+</span>
              <span className={styles.skillItem}>React</span>
              <span className={styles.skillItem}>Node.js</span>
              <span className={styles.skillItem}>Photoshop</span>
            </div>
          </div>
          <div className={classNames(styles.skillCard, styles.todo)}>
            <h3 className={styles.cardTitle}>To Do</h3>
            <div className={styles.skillList}>
              <span className={styles.skillItem}>HTML/CSS</span>
              <span className={styles.skillItem}>JavaScript ES6+</span>
              <span className={styles.skillItem}>React</span>
              <span className={styles.skillItem}>Node.js</span>
              <span className={styles.skillItem}>Photoshop</span>
            </div>
          </div>
        </div>
      </Body>
    </section>
    <section className={styles.expSection}>
      <Body>
        <Heading subHeading>Experience</Heading>
        <div className={styles.expContainer}>
          <div className={styles.expCard}>
            <div className={styles.expInfo}>
              <div className={styles.position}>
                <h3>Wunderman</h3>
                <span>Front End Developer</span>
              </div>
              <div className={styles.year}>
                2017 - 2019
              </div>
            </div>
            <div className={styles.expDetails}>
              <ul className={styles.roleList}>
                <li>Developed and maintained websites for various clients</li>
                <li>Developed HTML emails for sending out</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.expCard}>
            <div className={styles.expInfo}>
              <div className={styles.position}>
                <h3>Wunderman</h3>
                <span>Front End Developer</span>
              </div>
              <div className={styles.year}>
                2017 - 2019
              </div>
            </div>
            <div className={styles.expDetails}>
              <ul className={styles.roleList}>
                <li>Developed and maintained websites for various clients</li>
                <li>Developed HTML emails for sending out</li>
              </ul>
            </div>
          </div>
        </div>
      </Body>
    </section>
    <section className={styles.contactSection}>
      <p className={styles.contactDesc}>Want to get in touch? Drop me an email at <span>doczal@gmail.com</span>.</p>
    </section>
  </Layout>
)

export default AboutPage
