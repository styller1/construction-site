import styles from './Footer.module.css'

const Footer = () => {
    return (
    <div className={styles.Footer}>
        <div className={styles.left}>
                <img src="./assets/country-house.svg" alt="house" />
            <div className={styles.leftText}>
                <p>строительная компания</p>
                <h2>Славяновский <br /> Терем</h2>
            </div>
        </div>
            <div className={styles.right}>
                <p>Опыт работы более 15 лет.</p>
                <p>Строительство домов под ключ на территории Пермского края.</p>
            </div>
            <img src="./assets/background.png" alt="back" className={styles.back}/>
    </div>
    )
}

export default Footer; 