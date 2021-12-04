import styles from "./FavFilm.module.css"
const FavFilm=(props)=>{
    let {name,rezh,year} = props.arr
    // console.log(FavFilmArr)
    return(
        <div className={styles.FavFilm}>
            <img className={styles.img} src="https://upload.wikimedia.org/wikipedia/ru/2/26/%D0%94%D0%B5%D0%BD%D1%8C_%D1%80%D0%B0%D0%B4%D0%B8%D0%BE_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%BA_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%83%29.jpg" alt="" />
            <div>
                <h1>{name}</h1>
                <h3>{rezh}</h3>
                <h3>{year}</h3>
            </div>
            
        </div>
    )
}

export default FavFilm