import React from 'react'
import PropTypes from 'prop-types'
import styles from './projectCard.module.scss'

const ProjectCard = () => (
  <div className={styles.cardContainer}>
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
      </div>
      <div className={styles.projectInfo}>
        <h3>South West Allied Therapies</h3>
        <span>2017</span>
        <p>This is a project.</p>
      </div>
    </div>
  </div>
)

export default ProjectCard
