import React from 'react'
import PropTypes from 'prop-types'
import styles from './projectCard.module.scss'

const ProjectCard = ({ title, image, imageAlt, desc, tags }) => (
  <div className={styles.cardContainer}>
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <img src={image} alt={imageAlt}/>
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDesc}>{desc}</p>
        <div className={styles.projectTags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
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
