import React, { useContext, useState } from 'react'
import styles from './addProfile.module.css'
import { AddSharp, Email, EmailOutlined, Flag, HdrPlus, Instagram, WhatsApp, YouTube } from '@mui/icons-material'
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import { USER_ACTION_TYPES, UserContext } from '@/context/AddNewProfile';
import { createAction } from '@/context/CreateAnAction';


const UserInfo = () => {



    const [isOpen , setIsOpen] = useState(false)
    const  {value , dispatch} = useContext(UserContext)
    const {details} = value

    const handleClick = () =>{
        setIsOpen(!isOpen)
        const payload = {
            isOpen,
        }
        dispatch(createAction(USER_ACTION_TYPES.OPEN_POPUP_BOX, payload))
       
    }


   

  return (
    <div>
        <div className={styles.userProfileDetails}>
            <h1 className={styles.userName}>{details.basic.name}<span className={styles.edit} onClick={handleClick}>Edit</span></h1>

            <div className={styles.userContactsInfo}>
                <div className={styles.row}>
                        <div className={styles.rowItems}>
                        <div style={{backgroundColor: "#E9F9EB" }} className={styles.icon}>
                            <WhatsApp style={{color: "#3CC952" }}   className={styles.WhatsAppIcon} fontSize='small'/>
                            </div>
                            <p className={styles.contactInfo}>+91 {details.basic.phone}</p>
                        </div>
                        <div className={styles.rowItems}>
                        <div style={{backgroundColor: "#EBE6F9" }} className={styles.icon}>
                            <EmailOutlined style={{color: "#5C33CF" }}   className={styles.WhatsAppIcon} fontSize='small'/>
                            </div>
                            <p className={styles.contactInfo}>{details.basic.email}</p>
                        </div> 
                </div>
                <div className={styles.row}>
                         <div className={styles.rowItems}>
                            <div  style={{backgroundColor: "#FFE9EC" }} className={styles.icon}>
                            <Instagram style={{color: "#FF4E64" }} fontSize='small'/>
                            </div>
                            <p className={styles.contactInfo}>{details.social.igLink}</p>
                        </div>
                        <div className={styles.rowItems}>
                            <div  style={{backgroundColor: "#FFE9EC" }} className={styles.icon}>
                            <SmartDisplayOutlinedIcon style={{color: "#FF4E64" }} fontSize='small'/>
                            </div>
                            <p className={styles.contactInfo}>{details.social.ytLink}</p>
                        </div>
                </div>
                <div className={styles.row}></div>
            </div>
        </div>
    </div>
  )
}

export default UserInfo