import FormGender from '../../components/FormGender/FormGender'
//import LoginFormik from '../../components/loginFormik/LoginFormik'
import styles from './lesson11.module.css'

export default function Lesson11() {
  return (
    <div className='lesson-container'>
        <h3>Lesson11</h3>
        <div className={styles.loader}></div>
        <FormGender />
    </div>
  )
}
