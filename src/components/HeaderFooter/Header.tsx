import { Link, useLocation } from 'react-router-dom'
import styles from '../layout/layout.module.css'
export default function Header() {
    const location = useLocation()
    console.log(location.pathname);
  return (
    <header className={styles.header}>
            <Link className={location.pathname === '/' ? styles.active : ''} to={''}>HomePage 🏡</Link>
            <Link className={location.pathname === '/star-wars-gallery' ? styles.active : ''} to={'/star-wars-gallery'}>star wars gallery</Link>
            <Link className={location.pathname === '/gender_form' ? styles.active : ''}  to={'/gender_form'}>gender form</Link>
            <Link className={location.pathname === '/login-form' ? styles.active : ''} to={'/login-form'}>login form</Link>
            <Link className={location.pathname === '/robot-form' ? styles.active : ''} to={'/robot-form'}>robot form</Link>
            <Link className={location.pathname === '/counter' ? styles.active : ''} to={'/counter'}>counter</Link>
            <Link className={location.pathname === '/feedback' ? styles.active : ''} to={'/feedback'}>feedback</Link>
        </header>
  )
}
