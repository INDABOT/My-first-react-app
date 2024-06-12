import Button from "../../layouts/button/Button";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.Contact_section}>
      <div className={styles.text_area}>
        <h3>Contact</h3>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <form action="">
        <label htmlFor="name">
          <span>NAME</span>
          <input type="text" name="name" />
        </label>
        <label htmlFor="email">
          <span>EMAIL</span>
          <input type="text" name="email" />
        </label>
        <label htmlFor="message">
          <span>MESSAGE</span>
          <textarea className={styles.last_input} type="text" name="message" />
        </label>
        <div className={styles.btnD}><Button text='SEND MESSAGE' /></div>
      </form>
    </div>
    </section>
    
  );
};

export default Contact;
