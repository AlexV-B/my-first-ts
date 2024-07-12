import './lesson04.css'

import{forceUsers} from './data'

export default function Lesson04() {
    console.log(forceUsers);
    return(
        <div className="lesson-container">
            <h3>Lesson 04</h3>
            <div className='forceUsersGrid'>
          {forceUsers.map((hero, index) => (
            <div className={hero.isDark ? 'dark' : 'light'} key={index}>
                <h4>{hero.name}</h4>
                <p>Age: {hero.age}</p>
                <div>
                    <img width={200} src={hero.image} alt="" />
                </div>
                
                <p>
                    Lightsaber colors: {' '} 
                    {hero.lightsaberColors.map((color, index) => (
                    <span key={index}>{color} </span>
                    // 🔐 <div style={{backgroundColor: color, height: '10px', width: '10px'}}></div>
                ))}
                    </p>
            </div>
          ))}
          </div>
        </div> 
    );
}