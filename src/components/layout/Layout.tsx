import { Outlet, useLocation } from 'react-router-dom';
import styles from './layout.module.css'
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';

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