import { useEffect, useState } from "react";
import MyButton from "../../components/myButton/MyButton";

function Lesson09() {
interface IDogData {
    message: string;
    status: string

}

const [count, setCount] = useState(0);

const [dog, setDog] = useState<IDogData>({
    message: '',
    status: ''
});

const fetchDog = () => {
    fetch ("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => setDog(data));
    };

// useEffect(() => {
// fetch ("https://dog.ceo/api/breeds/image/random")
// .then(res => res.json())
// .then(data => console.log(data));
// }, [])

useEffect(() => {
    fetchDog ();
    }, [])


const handlePlus = () => {
    setCount(prev => prev +1);
    fetchDog()
}
     
    return (
        <div className="lesson-container">
            <h3>Lesson 09</h3>
            <h4>UseEffect hook🪝</h4>
            <h5>Проблема, которую решает этот hook</h5>
            <p> Любое изменение State вызывает рендер компонента. 
                Это значит, что все операции в теле компонентов будут 
                повторяться раз разом. В том числе и те, 
                которые мы бы не хотели повторять. </p>
                <p>Нужен способ, чтобы мы могли изолировать 
                операции от повтора там, где нам это не нужно</p>
            <p>{count}</p>
            <MyButton name ={'plus'} onClick={handlePlus} />
            <img width={120} src ={dog.message} alt=""/>
            <p>fetch запросы:</p>
            <ul>
                <li>Асинхронный запрос</li>
                <li>Данные приходят не сразу, их нужно подождать</li>
            </ul>
        </div>
    )
}
export default Lesson09;
