import SkillCard from "../Skills-card/SkillCard"
import styles from './Skills.module.css'
import Rings from '../../assets/rings.svg'
const Skills = () => {
  return (
    <>
    <section className={styles.skills_container}>
        <SkillCard title='HTML' text= '4 Years Experience' />
        <SkillCard title='CSS' text= '4 Years Experience' />
        <SkillCard title='JavaScript' text= '4 Years Experience' />
        <SkillCard title='Accessibility' text= '4 Years Experience' />
        <SkillCard title='React' text= '4 Years Experience' />
        <SkillCard title='Sass' text= '4 Years Experience' />
        
    </section>
    <img src={Rings} className={styles.rings} alt="" />
    </>
    
    
  )
}

export default Skills