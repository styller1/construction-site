import styles from './Material.module.css';

function Material({name, img  }) {
    return(
        <div className={styles.Material}>
            <h3>{name}</h3>
            <img src={img} alt="material" />
            <button>Подробнее</button>
        </div>
    )
}

export default Material; 