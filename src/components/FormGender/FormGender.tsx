import { useFormik } from "formik"
import * as Yup from 'yup';
import styles from './formGender.module.css'
import { useState } from "react";

interface IFormGender {
    name: string
  
}

interface IGenderData{
    name: string
    gender: string
    probability: number
    count: number
}

export default function FormGender() {
    const schema = Yup.object().shape({
        name: Yup
        .string()
        .typeError('enter correct your name, robot!')
        .required('type your name')
        .min(2, 'min 2 symbols')
        .max(20, 'max 20 symbols')
    });


    const [genderData, setGenderData] = useState<IGenderData>({
        name: '',
        gender: '',
        probability: 0,
        count: 0
    });

    const fetchGender = async (name:string) => {
        const res = await fetch (`https://api.genderize.io/?name=${name}`);
        const data = await res.json();
        setGenderData(data);
    }

    const formik = useFormik({
        initialValues: {
          name: ''
        } as IFormGender,
        validationSchema: schema,
        validateOnChange: false,
        onSubmit: (values: IFormGender, { resetForm }) => {
          fetchGender(values.name);
          resetForm();
        }
      });

   
    
  return (
<>
<h4>✨ Know name`s gender 🔮 </h4>
        <form onSubmit={formik.handleSubmit} className={styles.genderForm}>
            <input onChange={formik.handleChange} name='name' value={formik.values.name} placeholder='type name to analyze' type="text" />
            <button type="submit" >send request</button>
    {genderData.name && (
       <p>{genderData.name} is {genderData.gender === 'male' ? '💁‍♂️' : '💁‍♀️'} {genderData.probability * 100}%</p>
       )}
       {formik.errors.name && (
        <div className={styles.errorContainer}>
            <span>{formik.errors.name}</span>
        </div>
       )}
    
        </form>
    </>
 );
}








// ## задание

// Создайте компонент FormGender.tsx
// В нем сделайте форму с одним input для ввода имени
// На onSubmit передавайте имя в api через url `https://api.genderize.io/?name=dmitrii`
// После 'name=' передавайте строку из формы
// Выведите данные на странице


// https://genderize.io/documentation
// https://api.genderize.io?name=