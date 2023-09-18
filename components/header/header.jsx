import React, { useState } from 'react'
import styles from './header.module.css'
import { NotificationsNoneOutlined, Person2Outlined, Search } from '@mui/icons-material'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'


const Header = () => {

    const {data: session} = useSession()
    const [userMenu , setUserMenu] = useState(false)

    const handleClick = () =>{
        setUserMenu(!userMenu)
    } 
    
  return (
    <div className={styles.header}>
        <h1 className={styles.dashboardTitle}>Dashboard</h1>
        <div className={styles.leftSideOfHeader}>
        <div className={styles.userInfoAndSearchBar}>
            <input className={styles.searchBarItem} type='text' placeholder='Search...'/>
            <Search/>
        </div>
        <NotificationsNoneOutlined fontSize='medium'/>
        { session ? <Image style={{cursor: "pointer"}} onClick={handleClick} className={styles.userImage} height={35} width={35} src={session.user.image}/> : <Person2Outlined/>}
       {userMenu && <div className={styles.userMenu}>
            <p className={styles.userEmail}>{session && session.user.email}</p>
            <p className={styles.signOut} onClick={() => signOut()}>Sign Out</p>
        </div>}
        </div>
    </div>
  )
}

export default Header