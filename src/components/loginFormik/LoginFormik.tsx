import { useFormik } from 'formik'
import styles from './loginFormik.module.css'


interface IFormValues {
  firstName: string
  lastName: string
  email: string
}
export default function LoginFormik() {

const formik = useFormik({
  initialValues: {
    firstName: '',
    lastName: '',
    email: ''
  } as IFormValues,
  onSubmit: (values: IFormValues, {resetForm}) => {
    console.log(values);
    resetForm()
    
  }
})

  return (
    <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
      <input value={formik.values.firstName} name='firstName' onChange={formik.handleChange} type="text" placeholder='first name' />
      <input value={formik.values.lastName} name='lastName' onChange={formik.handleChange} type="text" placeholder='lastname' />
      <input value={formik.values.email} name='email' onChange={formik.handleChange} type="text" placeholder='email' />
      <button type="submit">Send your Form</button>
    </form>
  )
}



// https://genderize.io/documentation
// https://api.genderize.io?name=peter