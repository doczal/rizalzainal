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
        <div className={styles.projectYear}>Website</div>
        <p className={styles.projectDesc}>This is a project.</p>
      </div>
    </div>
  </div>
)

export default ProjectCard
