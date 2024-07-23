import { Outlet, useLocation } from 'react-router-dom';
import styles from './layout.module.css'
import Header from '../Header/Header';
import Footer from '../footer/Footer';

function Layout() {
    
    
    return (
        <div className={styles.page}>
            <Header/>
        <main className={styles.main}>
            <Outlet/>
        </main>
            <Footer/>
        </div>
    );
}


export default Layout;