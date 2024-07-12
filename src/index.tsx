import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
//import Lesson06 from './lessons/lesson06/Lesson06';
//import Lesson07 from './lessons/lesson07/Lesson07';
import Lesson08 from './lessons/lesson08/Lesson08';
import LoginForm from './components/LoginForm/LoginForm';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <App />
    {/* <Lesson06 /> */}
    {/* <Lesson07 /> */}
    <Lesson08 />
    <LoginForm />
  </>
);

