import styles from './PersonalPage.module.css';
import React from 'react';
import image from './DSCN1126.JPG'
const PersonalPage=(props)=>{
    let {name,tel,year,town,email} = props.arr
    // console.log(myObj)
    const Test =()=>{
        return Object.entries(props.arr).map(([key, value]) => {
        return(key=='name'?<h1>{props.arr[key]}</h1>:<h3 className="test">{props.arr[key]}</h3>
        )
            
        })
    }
    
    return(
        <div className={styles.FavFilm}>
            <img className={styles.img} src={image} alt="" />
            <div>
                <Test/>
                
            </div>
            
        </div>
    )
}


export default PersonalPage