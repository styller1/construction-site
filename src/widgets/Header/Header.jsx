import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <div className={styles.Header}>
                <div className={styles.left}>
                    <img src="./assets/country-house.svg" alt="house" />
                    <div className={styles.leftText}>
                        <p>строительная компания</p>
                        <h2>Славяновский Терем</h2>
                    </div>
                </div>
                <div className={styles.middle}>
                    <p>Опыт работы более 15 лет.</p>
                    <p>Строительство домов под ключ на территории Пермского края.</p>
                </div>
                <div className={styles.right}>
                    <img src="./assets/vk.svg" alt="vk" />
                    <img src="./assets/telephone.svg" alt="telephone" />
                    <p>+7 902 471-07-79</p>
                </div>
            </div>

            <div className={styles.NawBar}>
                <ul>
                    <li><NavLink to={"/"}>Главная</NavLink></li>
                    <li><NavLink to={"/cards"}>Услуги</NavLink></li>
                    <li>Проекты</li>
                    <li>Отзывы</li>
                    <li>Партнеры</li>
                    <li>Портфолио</li>
                </ul>
            </div>

        </>
    )
};

export default Header;