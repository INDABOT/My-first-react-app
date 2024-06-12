import styles from './button.module.css'

// eslint-disable-next-line react/prop-types
const Button = ({text}) => {
  return (
   <button className={styles.button} >{text}</button>
  )
}

export default Button