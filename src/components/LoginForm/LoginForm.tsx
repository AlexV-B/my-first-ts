//import '..MyButton1/myButton1/MyButton1'
import MyInput from '../Input/MyInput'
//import MyButton1 from '..MyButton1/myButton1/MyButton1'
import styles from './loginForm.module.css'

import MyButton from '../myButton/MyButton';
//import './loginForm.css'

export default function LoginForm (){
    return (
<form className={styles.LoginForm}>
  <MyInput label={'Ваш логин:'} placeholder= {'login'} type={'text'} name={'login'} />
  <MyInput label={'Действительная почта:'} placeholder= {'email'} type={'email'} name={'email'} />
  <MyInput label={'Ваш пароль:'} placeholder= {'password'} type={'password'} name={'password'}/>
  <MyButton name={'Отправить форму'} type={'submit'} />
  
</form>
    );
}




// <form action="" method="get" class="form-example">
//   <div class="form-example">
//     <label for="name">Enter your name: </label>
//     <input type="text" name="name" id="name" required />
//   </div>
//   <div class="form-example">
//     <label for="email">Enter your email: </label>
//     <input type="email" name="email" id="email" required />
//   </div>
//   <div class="form-example">
//     <label for="password">Enter your password: </label>
//     <input type="password" name="password" id="password" required />
//   </div>
//   <div class="form-example">
//     <input type="submit" value="Subscribe!" />
//   </div>
// </form>