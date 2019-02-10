import React from 'react'
import PropTypes from 'prop-types'
import styles from './projectCard.module.scss'
import projectImage from '../images/swat-plain.jpg'

const ProjectCard = () => (
  <div className={styles.cardContainer}>
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <img src={projectImage} alt="swat"/>
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>South West Allied Therapies</h3>
        <p className={styles.projectDesc}>This is a project.</p>
        <div className={styles.projectTags}>
          <span className={styles.tag}>Web Dev</span>
          <span className={styles.tag}>Wordpress</span>
          <span className={styles.tag}>Logo Design</span>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectCard
