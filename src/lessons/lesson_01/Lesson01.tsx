import './lesson01.css'

export default function Lesson01(){
    const heading = 'Урок 01'

    const classContainer = 'lesson-container'



    function formatName(user: { name: string; lastName: string; }) {
    return `Name: ${user.name}, lastName: ${user.lastName}`
    };
    
    const user = {
        name: 'John',
        lastName: 'Doe'
    };

    const isLogin = true

    return (
        <div className={classContainer}>
            <h4>{heading}</h4>
            
            <h5>Особенности компонентов</h5>
        <ol>
            <li>Имеет расширение JSX</li>
            <li>Называется с большой буквы</li>
            <li>Компонент это функция</li>
            <li>Возвращает верстку</li>
            <li>Использует import / export</li>
            <li>Не отобразится на странице, если не импортирован</li>
        </ol>
        <p>Пример с динамическими данными</p>
        <span>{formatName(user)}</span>
        <h5>Пример с тернарным оператором</h5>
        <span>Пользователь {isLogin ? 'в данный момент' : 'не'} авторизован</span>
        </div>
    );
}