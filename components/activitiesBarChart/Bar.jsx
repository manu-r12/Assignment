import React from 'react'
import styles from './BarChart.module.css'
const Bar = ({heightforBar1, heightforBar2, width, bg1, bg2, weekNo}) => {
  return (
    <div className={styles.barsStyles}>
        <div className={styles.bars}>
        <div  style={{
            width: `${width}px`,
            height: `${heightforBar1}px`,
            backgroundColor: `${bg1}`,
            borderRadius: "5px"
        }} className={styles.bar1}/>
        <div  style={{
            width: `${width}px`,
            height: `${heightforBar2}px`,
            backgroundColor: `${bg2}`,
            borderRadius: "5px"
        }} className={styles.bar2}/>
        </div>
        <div className={styles.week}>
        <p style={{
                fontFamily:"Lato",
                fontSize: "7px",
                textAlign: "center"
            }}>{weekNo}</p>
        </div>
 
    </div>  
  )
}

export default Bar