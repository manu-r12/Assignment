import { LocalAtmOutlined } from '@mui/icons-material'
import styles from './analytics.module.css'
import data from '../../data/dataForAnalytics'

import React from 'react'
import Image from 'next/image'

const Analytics = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.subContainer} >
        {data.map((data, index) =>{
            return ( 
                <div key={index} className={styles.box}>
                <div className={styles.boxDetails}>
                    <Image style={{backgroundColor: `${data.bgColor}`}} height={30} width={30}   src={`${data.icons}`} className={styles.icon}/>
                    <div className={styles.totalDetailsBox}>
                        <p className={styles.title}>{data.title}</p>
                            <div className={styles.valuesFrame}>
                                <h2 className={styles.value}>{data.Value}</h2>
                                <p className={styles.percantage}>{data.percantage}</p>
                            </div>
                    </div>
                </div>
            </div>)
        })}
           
        </div>
    </div>
  )
}

export default Analytics