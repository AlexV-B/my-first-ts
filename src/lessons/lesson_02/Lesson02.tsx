//import MyButton from '../../components/myButton/MyButton'
import MyButton1 from '../../components/myButton1/MyButton1';
import './lesson02.css'

export default function Lesson02 () {

    const handleClick = () => {
    console.log('click!');
    }
    const handleSubmit = () => {
    console.log('submit!');
    }
    const handleTurtle = () => {
    console.log('🐢');
    }


    return(
        <div className="lesson-container">
            <h4>lesson 02</h4>
            <p>React Props: способ обмена данными из 
                компонента в компонент</p>

                <span>Мы хотим использовать наш компонент кнопку
            </span>
                <div>
                <MyButton1 type={'button'} onClick={handleClick} name = {'click'}/>
                <MyButton1 type={'button'} onClick={handleSubmit} name ={'submit'}/>
                <MyButton1 type={'button'} onClick={handleTurtle} name = {'🐢'}/>
                </div>
                
        </div>
    )
}