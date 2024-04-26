import { useState } from "react";
import styles from './styles.module.css'
import open from '../../assets/icon-menu.svg'
import close from '../../assets/icon-close-menu.svg'
import dna from '../../assets/home.svg'
import { Sidebar } from "../parent-sidebar/Sidebar";
export const Sidebar2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const headingStyle = {
        fontSize: '60px',
        backgroundImage: `url(${dna})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // backgroundSize:"cover",
        backgroundClip: 'text',
        color: 'transparent'
    };

    return (
        <section className={`${styles.page} ${styles.sidebarPage}`}>
            <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
                <div className={styles.inner}>
                    <header className={styles.sidebarHeader}>
                        <span onClick={() => setIsOpen(!isOpen)} className="material-symbols-outlined">
                            {isOpen ? <img src={close} alt="" /> : <img src={open} alt="" />}
                        </span>
                        <h1 style={{marginLeft:"20px"}}>Olaitan</h1>
                    </header>
                <Sidebar/>
                </div>
            </aside>
        </section>
    );
};