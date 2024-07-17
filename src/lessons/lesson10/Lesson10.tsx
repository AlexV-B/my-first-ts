// ## задание

import { useEffect, useState } from "react";
import MyButton from "../../components/myButton/MyButton";

// Задача: необходимо разработать компонент (Lesson10),
// для получения и отображение данных, полученных по запросу (факт о котах)

// API `https://catfact.ninja/fact`

// При загрузке страницы должен происходить запрос на получение данных
// ● Данные должны отображаться в стилизованном блоке на странице
// ● Пока данных нет, то блок отображаться не должен
// ● Также на странице должна быть кнопка 'GET MORE INFO', при нажатии на
// которую также должен происходить запрос данных
// ● При получении данных после клика на кнопку они должны появиться на экране
// под предыдущими данными в том же блоке
// ● Когда размер блока с данными заходит за предел 700px блок расширяться в
// высоту не должен, а должен появиться Scroll внутри блока с данными
// ● На странице должна быть вторая кнопка "DELETE ALL DATA", которая будет
// удалять все полученные данные (при отсутствии фактов в блоке, кнопка должна исчезать)

// * Создайте компонент индикатора загрузки, который будет 
// появляться в процессе получения данных и исчезать, 
// когда данные получены (Spinner или др).
// Его необходимо использовать в компоненте Lesson 10
// P.S. Индикатором загрузки не должен быть текст
interface ICatData {
    fact: string;
  }
  
  const Lesson10 = () => {
    const [count, setCount] = useState(0);
    const [catFacts, setCatFacts] = useState<ICatData[]>([]);
  
    const fetchCat = () => {
        fetch('https://catfact.ninja/fact')
          .then(response => response.json())
          .then(data => {
            setCatFacts(prevFacts => [...prevFacts, data]);
          })
      
      };
  
    useEffect(() => {
      fetchCat();
    }, []);
  
    const handlePlus = () => {
      setCount(prev => prev + 1);
      fetchCat();
    };
  
    const handleDeleteAll = () => {
      setCatFacts([]);
      setCount(0);
    };
  
    return (
      <div className="lesson-container">
        <h3>Cat Facts</h3>
        <p>{count}</p>
        <div className="facts-container">
          {catFacts.map((fact, index) => (
            <p key={index} className="fact">{fact.fact}</p>
          ))}
        </div>
        <MyButton onClick={handlePlus} name={"GET MORE INFO"}/>
        {catFacts.length > 0 && (
          <MyButton onClick={handleDeleteAll} name={"DELETE ALL DATA"}/>
        )}
      </div>
    );
  };
  
  export default Lesson10;