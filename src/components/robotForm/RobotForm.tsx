import { useFormik } from "formik";
import styles from './robotForm.module.css';
import * as Yup from 'yup';


interface IFormValues {
model: string;
creator: string;
email: string;
}

export default function RobotForm() {
    const schema = Yup.object().shape({
        model: Yup
        .number()
        .typeError('enter your number, robot!')
        .required('type your model')
        .min(100, 'your model has to start from 100')
        .max(1000, 'your are not such a robot! Model til 1000...'),
        creator: Yup
        .string()
        .required('type the name of creator'),
        email: Yup
        .string()
        .email('incorrect email-s format')
        .required('type your email'),

    });

    const formik = useFormik({
        initialValues: {
            model: '',
            creator: '',
            email: ''
        } as IFormValues,
        validationSchema: schema,
        validateOnChange: false,
        onSubmit: (values: IFormValues, {resetForm}) => {
            console.log(values);
            resetForm();
            
        }
    })



return (
    <>
    
    <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
      <label>That is Robot's form 🤖</label>
      <input name='model' value={formik.values.model} 
      onChange={formik.handleChange} type="text" placeholder='Your model' />

      <input name='creator' value={formik.values.creator} 
      onChange={formik.handleChange} type="text" placeholder='Name of your creator'/>

      <input  name='email' value={formik.values.email}
      onChange={formik.handleChange} type="text" placeholder='Production email'/>

      <button type="submit">send</button>

      </form>
      
      <span className={styles.errors}>{formik.errors.model}</span>
      <span className={styles.errors}>{formik.errors.creator}</span>
      <span className={styles.errors}>{formik.errors.email}</span>
      </>
)

}