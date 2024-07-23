import ReactDOM from 'react-dom/client';
import './index.css';
//import Lesson13 from './lessons/Lesson13/Lesson13';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import StarsWarsGallery from './components/StarWarsGallery/StarsWarsGallery';
import FormGender from './components/FormGender/FormGender';
import RobotForm from './components/robotForm/RobotForm';
import LoginForm from './components/LoginForm/LoginForm';
import Counter from './counter/Counter';
import FeedBack from './components/feedback/FeedBack';
import HomePage from './components/HomePage/HomePage';
import Shop from './components/shop/Shop';
//import Consultation04 from './Consultations/Consultation04/Consultation04';

//import Lesson12 from './lessons/Lesson12/Lesson12';
//import Lesson04 from './lessons/lesson_04/Lesson04';
//import StarsWarsGallery from './components/StarWarsGallery/StarsWarsGallery';
//import Lesson10 from './lessons/lesson10/Lesson10';
//import Lesson11 from './lessons/Lesson11/Lesson11';
//import Lesson09 from './lessons/lesson09/Lesson09'
//import App from './app/App';
// import Layout from './components/layout/Layout';
//import Lesson06 from './lessons/lesson06/Lesson06';
//import Lesson07 from './lessons/lesson07/Lesson07';
//import Lesson08 from './lessons/lesson08/Lesson08';
//import LoginForm from './components/LoginForm/LoginForm';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route path='/' element={<HomePage/>}/>
          <Route path='/star-wars-gallery' element={<StarsWarsGallery/>}/>
          <Route path='/gender_form' element={<FormGender/>}/>
          <Route path='/robot-form' element={<RobotForm/>}/>
          <Route path='/login-form' element={<LoginForm/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/feedback' element={<FeedBack/>}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='*' element={<h1>Error 404 😩</h1>}/>
    {/* <App /> */}
    {/* <Lesson06 /> */}
    {/* <Lesson07 /> */}
     {/* <Lesson08 /> */}
    {/* <LoginForm />  */}
    {/* <Layout /> */}
    {/* <Lesson04/> */}
    {/* <StarsWarsGallery /> */}
    {/* <Lesson09/> */}
    {/* <Lesson10 /> */}
    {/* <Lesson11 /> */}
    {/* <Lesson12 /> */}
    {/* <Consultation04 /> */}
    {/* <Lesson13 /> */}
        </Route>
      </Routes>
  </HashRouter>
);



// ## задание

// 1. Сделайте маршрутизацию (routing) для двух старых 
// уже написанных компонентов - добавьте пути 
// и ссылки на компоненты (выберите их по вкусу, 
//   это могут быть ссылки на уроки)

// 2. Для домашней странице создайте новый 
// компонент HomePage с h3 'HomePage 🏡'

// 3. Вынесите Header и Footer в отдельные компоненты.

// * Подумайте как можно оптимизировать 
// отображение ссылок в header и избавиться 
// от повторяющегося кода