import styles from './topProducts.module.css'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import React, { Suspense } from 'react'

const TopProduct = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
     
      ];
      const COLORS = ['#98D89E', '#EE8484', '#F6DC7D'];


  return (
    <div className={styles.container}>
        <div className={styles.header}>
             <h1 className={styles.title}>Top Products</h1>
             <p className={styles.date}>April - June 2023</p>
        </div>
        <div className={styles.pieChart}>
         <PieChart width={200} height={200} >
        <Pie
          data={data}
          cx={80}
          cy={70}
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
     

     
       
      </PieChart>
            <div className={styles.legendsDetails}>
                <div className={styles.legends}>
                     <div className={styles.legend}>
                        <p style={{backgroundColor: "#98D89E"}} className={styles.legendsDot}/>
                        <div className={styles.nameAndPercValue}>
                            <p className={styles.legendName}>Basic Tees</p>
                            <p className={styles.perc}>55%</p>
                        </div>
                     </div>
                </div>
                <div className={styles.legends}>
                     <div className={styles.legend}>
                        <p style={{backgroundColor: "#F6DC7D"}} className={styles.legendsDot}/>
                        <div className={styles.nameAndPercValue}>
                            <p className={styles.legendName}>Custom Short Pants</p>
                            <p className={styles.perc}>35%</p>
                        </div>
                     </div>
                   
                </div>
                <div className={styles.legends}>
                     <div className={styles.legend}>
                        <p style={{backgroundColor: "#EE8484"}} className={styles.legendsDot}/>
                        <div className={styles.nameAndPercValue}>
                            <p className={styles.legendName}>Super Hoodies</p>
                            <p className={styles.perc}>15%</p>
                        </div>
                     </div>
                </div>
            </div>

       
        </div>
    </div>
  )
}

export default TopProduct