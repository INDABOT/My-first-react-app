/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './ProjectCard.module.css';


const ProjectCard = ({img, title, tagOne, tagTwo, tagThree }) => {
  return (
    <div className={styles.projectCard}>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <div className={styles.tags}>
            <p>{tagOne}</p>
            <p> {tagTwo} </p>
            <p> {tagThree} </p>
        </div>
    </div>
  )
}

export default ProjectCard