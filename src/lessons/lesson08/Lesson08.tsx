import MyInput from "../../components/Input/MyInput";
import MyButton from "../../components/myButton/MyButton";

const Lesson08 = () => {
    return(
        <div className="lesson-container">
            <h3>Lesson 08</h3>
            <MyInput />
            <MyInput label="pass" name="password" 
            placeholder="type your pass" type="password" />
            <h4>CSS modules</h4>
            <span>Способ написания изолированных CSS стилей в React, 
                чтобы стили не конфликтовали друг с другом
            </span>
            <div>
                <MyButton />
            </div>
        </div>
    )

}

export default Lesson08;