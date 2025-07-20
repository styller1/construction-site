import styles from './CardPages.module.css';
import Card from './components/Card'
import Material from './materialPages/Material';

function CardPages() {
    return(
        <div className={styles.CardHome}>
            <h2>Строительство коттеджей</h2>
            <div className={styles.cardList}>
                <Card name='Из газобетона' img='./assets/home-page/home1.svg'/>
                <Card name='Из кирпича' img='./assets/home-page/home2.svg'/>
                <Card name='Из дерева' img='./assets/home-page/home3.svg'/>
                <Card name='Из керамических кирпичей ' img='./assets/home-page/home4.svg'/>
            </div>
            <h2>Строительные материалы</h2>
            <div className={styles.materialList}>
                <Material name='Газобетон' img='./assets/materials/material1.svg'/>
                <Material name='Цемент' img='./assets/materials/material2.svg'/>
                <Material name='Арматура' img='./assets/materials/material3.svg'/>
                <Material name='Доска' img='./assets/materials/material4.svg'/>
            </div>
        </div>
    )
}

export default CardPages; 