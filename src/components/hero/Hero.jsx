import Button from "../../layouts/button/Button";
import styles from './Hero.module.css';
import heroImage from '../../assets/profile-image.svg';
import Oval from '../../assets/Oval.svg'
import Rings from '../../assets/rings.svg'
const Hero = () => {
  return (
    <>
    <section className={styles.hero_container}>
      <div className={styles.hero_content}>
        <h1>Nice to meet you! <br /> I’m <span>Okanu Chinonso</span>.</h1>
        <p>
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <div className={styles.button}>
        <Button text = {'CONTACT ME'} />
        </div>
       
      </div>
      <img src={heroImage} className={styles.hero_image} alt="" />
      <div className={styles.images}>
       
        
      </div>
      <img src={Oval} className={styles.Oval} alt="" />
      
    </section>
    <img src={Rings} className={styles.rings} alt="" />
    </>
    
  );
}; 

export default Hero;
 