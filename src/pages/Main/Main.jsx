import styles from './Main.module.css'

const Main = () => {
    return(
         <div className={styles.container}>

          <div className={styles.Main}>
            <div className={styles.top}>
                <img src="./assets/worker.svg" alt="worker"/>
                <h3>Ваш дом - наша забота.</h3>
            </div>

            <div className={styles.middle}>
                <h2>Строительство частных домов и коттеджей</h2>
                <p>
                    Строительство малоэтажных домов, коттеджей, модульных конструкций, реализация и разработка различных индивидуальных проектов - наша главная задача. 
                    Грамотный подход к делу, использование современных технологий и ответственность застройщика. 
                    Мы поможем вам в выборе участка, подборке стройматериалов и оформим полный пакет документов, ведь ваш дом - наша забота!
                </p>
            </div>

            <div className={styles.bottom}>
                <img src="./assets/flag.svg" alt="flag" className={styles.flagImg}/>
                <div className={styles.flag}>
                    <p>Специальное <br /> предложение</p> 
                </div>

                <img src="./assets/tree.svg" alt="tree" className={styles.treeImage} />
                <div className={styles.tree}>
                    <button>Оставить заявку</button>
                </div>
            </div>
          </div>

        </div>
    )
}

export default Main;