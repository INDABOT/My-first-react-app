import styles from "./Header.module.css";
import github from "../../assets/github.svg";
import linkedIn from "../../assets/linkedIn.svg";
import frontend from "../../assets/frontendmentor.svg";
// import profileImage from '../../assets/profile-image.svg';
import twitter from "../../assets/twitter.svg";

const Header = () => {
  return (
    <header>
      <h2 className={styles.heading}>OkanuChinonso</h2>
      <div className={styles.icons}>
        <img src={github} alt="" />
        <img src={frontend} alt="" />
        <img src={linkedIn} alt="" />
        <img src={twitter} alt="" />
      </div>
    </header>
  );
};

export default Header;
