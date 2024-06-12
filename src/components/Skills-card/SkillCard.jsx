/* eslint-disable react/prop-types */
import styles from './SkillCard.module.css'; 

const SkillCard = ({title, text}) => {
  return (
    <div className={styles.skills_card}>
        <h2>{title}</h2>
        <p> {text} </p>
    </div>
  )
}

export default SkillCard