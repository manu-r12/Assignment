import React from 'react'
import styles from './sidebarMenuLinks.module.css'
import { AccountCircleOutlined, EventRepeatTwoTone, LocalOfferOutlined, PieChart, PieChartOutline, Settings, SettingsOutlined, TagSharp, VerifiedUserSharp } from '@mui/icons-material'
import Link from 'next/link'
  const  SidebarMenuLinks = () => {
  return (
    <div className={styles.container}>
        <div className={styles.linkBox}>
            <PieChartOutline fontSize='small'/>
            <Link href={"#"} style={{fontWeight: "700"}}  className={styles.linkName}>Dashboard</Link>
        </div>
        <div className={styles.linkBox}>
            <LocalOfferOutlined fontSize='small'/>
            <Link href={"#"}   className={styles.linkName}>Transcations</Link>
        </div>
        <div className={styles.linkBox}>
            <EventRepeatTwoTone fontSize='small'/>
            <Link href={"#"}   className={styles.linkName}>Schedules</Link>
        </div>
        <div className={styles.linkBox}>
            <AccountCircleOutlined fontSize='small'/>
            <Link href={"#"}   className={styles.linkName}>Users</Link>
        </div>
        <div className={styles.linkBox}>
            <SettingsOutlined fontSize='small'/>
            <Link href={"#"}   className={styles.linkName}>Settings</Link>
        </div>
        <div className={styles.footerLinks}>
            <Link className={styles.footerlink} href={"#"}>Help</Link>
            <Link className={styles.footerlink} href={"#"}>Contact Us</Link>
        </div>
    </div>
  )
}


export default SidebarMenuLinks

