import styles from './side-panel.module.css'

const SidePanel = () => {
    return (
        <div className={styles.sP}>
         <h1 className={styles.name}>Intocode Coding Shopcamp</h1>  
         <div className={styles.gadjets}>Гаджеты и аксессуары</div> 
         <hr className={styles.line1} />
         <div className={styles.tech}>Бытовая техника</div> 
         <hr className={styles.line2} />
         <div className={styles.other}>Прочее</div> 
        </div>
    );
};

export default SidePanel;