import React from 'react'
import styles from './BarChart.module.css'
import Bar from './Bar'
const BarChart = () => {

    const range = [,100, 200, 300 , 400, 500]

  return (
    <div className={styles.barContainer}>
        <div className={styles.headtitleContainer}>
            <h1 className={styles.headTitle}>Activities</h1>
            <div className={styles.chartInfo}>
                <p className={styles.datefromto}>April - June 2023</p>
                <div className={styles.legends}>
                    <p className={styles.dotGuest}/>
                    <p className={styles.p}>Guest</p>
                    <p className={styles.dotUser}/>
                    <p className={styles.p}>User</p>
                </div>
            </div>  
        </div>
        <div className={styles.barChart}>
            {range.sort((a, b) => b - a).map((r, i) =>{
            return <p key={i} className={styles.xaxisLineAndRange}>{r}<span className={styles.xaxisLine}/></p>
            })}
             <p className={styles.xaxisLineAndRange}>0<span className={styles.xaxisLine}/></p>
             <div className={styles.barDiv}>
                 <Bar heightforBar1={200} heightforBar2={120} width={38.41} bg1={"#98D89E"} bg2={"#EE8484"} weekNo={"Week 1"} />
                 <Bar heightforBar1={120} heightforBar2={150} width={38.41} bg1={"#98D89E"} bg2={"#EE8484"} weekNo={"Week 2"} />
                 <Bar heightforBar1={40} heightforBar2={140} width={38.41} bg1={"#98D89E"} bg2={"#EE8484"} weekNo={"Week 3"} />
                 <Bar heightforBar1={160} heightforBar2={110} width={38.41} bg1={"#98D89E"} bg2={"#EE8484"} weekNo={"Week 4"} />
                 <Bar heightforBar1={160} heightforBar2={110} width={38.41} bg1={"#98D89E"} bg2={"#EE8484"} weekNo={"Week 5"} />
             </div>
        </div>
    </div>
  )
}

export default BarChart