import { useState } from "react";
import MyButton from "../myButton/MyButton";

export default function FeedBack() {
    const [like, setLike] = useState<number>(5)
    const [dislike, setDislike] = useState<number>(0)

    const handleLike = () => {
        setLike(prev => prev + 1)
    }

    const handleDislike = () => {
        setDislike(prev => prev + 1)
    }

    const handleReset = () => {
        setLike (0)
        setDislike (0)
    }

    return(
        <div>
            <div>
                <span>{like}</span>
                <MyButton onClick={handleLike} name={'👍🏼'} />
                <MyButton onClick={handleDislike} name={'👎🏼'} />
                <span>{dislike}</span>
            </div>
            <div>
                <MyButton onClick={handleReset} name={'Reset Result'} />
            </div>
        </div>
    )
}