import React from 'react'
import PropTypes from 'prop-types'
import styles from './projectCard.module.scss'

const ProjectCard = ({ image, desc }) => (
  <div className={styles.cardContainer}>
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <img src={image} alt="swat"/>
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>South West Allied Therapies</h3>
        <p className={styles.projectDesc}>{desc}</p>
        <div className={styles.projectTags}>
          <span className={styles.tag}>Web Dev</span>
          <span className={styles.tag}>Wordpress</span>
          <span className={styles.tag}>Logo Design</span>
        </div>
      </div>
    </div>
  </div>
)

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

ProjectCard.defaultProps = {
  desc: 'Hello world, this is a project',
}

export default ProjectCard
