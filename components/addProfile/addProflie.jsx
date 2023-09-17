import React, { useContext, useState } from 'react'
import styles from './addProfile.module.css'

import UserInfo from './userInfo';
import { AddSharp } from '@mui/icons-material';
import { UserContext } from '@/context/AddNewProfile';
import { USER_ACTION_TYPES } from '@/context/AddNewProfile';
import { createAction } from '@/context/CreateAnAction';

const AddProfile = () => {

    const [isOpen , setIsOpen] = useState(false)
    const  {value , dispatch} = useContext(UserContext)

    const handleClick = () =>{
        setIsOpen(!isOpen)
        const payload = {
            isOpen: true
        }
        dispatch(createAction(USER_ACTION_TYPES.OPEN_POPUP_BOX, payload))
        console.log("context:",value)
    }

  return (
    <div className={styles.container}>
      {value.details == null  && <div onClick={handleClick} className={styles.addProflieBtn}>
            <AddSharp className={styles.plusIcon} fontSize='large'/>
            <h1 className={styles.addBtn}>Add Profile</h1>
        </div> }

        {value.details != null  && <UserInfo/>}
       
    </div>
  )
}

export default AddProfile