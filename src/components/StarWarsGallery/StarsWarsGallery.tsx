import styles from "./starWarsGallery.module.css";

import { forceUsers } from "../../lessons/lesson_04/data";
import HeroCard from "../HeroCard/HeroCard";
export default function StarsWarsGallery(){
    return(
        <div className="lesson-container">
            <div className={styles.forceUsersGrid}>
            {forceUsers.map((hero,index) => (
               <HeroCard key={index} age={hero.age} isDark={hero.isDark} name={hero.name} image={hero.image} />
            ))}
            </div>
        </div>
        );
}

    


