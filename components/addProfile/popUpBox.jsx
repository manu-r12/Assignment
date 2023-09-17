import React, { useContext, useState } from 'react'
import styles from './popupbox.module.css'
import { CloseOutlined } from '@mui/icons-material'
import { createAction } from '@/context/CreateAnAction'
import { USER_ACTION_TYPES, UserContext } from '@/context/AddNewProfile'
const PopUpBox = () => {
    const [isBasicSelected, setIsBasicSelected] = useState(true)
    const [details , setDetials] = useState({basic: null, social: null})
    const {value,dispatch} = useContext(UserContext)

    const data = {
        basic: {},
        social:{}
    }

    const handleClick = () =>{
        const payload = {
            isOpen: false
        }
        dispatch(createAction(USER_ACTION_TYPES.OPEN_POPUP_BOX, payload))
                    }       

    const handleSubmit = (e) =>{
        e.preventDefault()
        const name = e.target[0].value
        const email = e.target[1].value
        const phone = e.target[2].value
       
        details.basic = {name , email , phone}

        setDetials(details)
        console.log(details)
        setIsBasicSelected(false)

    }
    const handleSubmitforSocial = (e) =>{
        e.preventDefault()
        const igLink = e.target[0].value
        const ytLink = e.target[1].value
        // const phone = e.target[2].value
        details.social = {igLink, ytLink}
        setDetials(details)
        dispatch(createAction(USER_ACTION_TYPES.ADD_NEW_PROFILE, details))
        console.log(details)
        console.log(value)
    }
    const handleclickforHeader = () =>{
        setIsBasicSelected(!isBasicSelected)
    }

  return (
    <div className={styles.mainContainer}>
        <div className={styles.header}>
            <h1 className={styles.title}>Add New Profile<span onClick={handleClick}><CloseOutlined style={{cursor: "pointer"}}/></span></h1>
        </div>
        <div className={styles.header2}>
             <div  className={ isBasicSelected ? `${styles.header2titles}` : `${styles.header2titlesSelected}`}>
                <h1  className={styles.title2}>Basic</h1>
            </div> 
            <div className={ !isBasicSelected ? `${styles.header2titles}` : `${styles.header2titlesSelected}`}>
                <h1 className={styles.title2}>Social</h1>
            </div>               
        </div>
       {isBasicSelected && <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputAndLabel}>
                    <label className={styles.inputLabel}>Enter Name<span className={styles.importantStar}>*</span></label>
                    <input className={styles.input} type='text' placeholder='Eg.John Doe'/>
                </div>
                <div className={styles.inputAndLabel}>
                    <label className={styles.inputLabel}>Enter Email<span className={styles.importantStar}>*</span></label>
                    <input className={styles.input} type='email' placeholder='Eg.John Doe'/>
                </div>
                <div className={styles.inputAndLabel}>
                    <label className={styles.inputLabel}>Enter Phone<span className={styles.importantStar}>*</span></label>
                    <input className={styles.input} type='tel' placeholder='Eg.John Doe'/>
                </div>
                <button className={styles.nextButton} type='submit'>Next</button>
            </form>
        </div>}
       {!isBasicSelected && <div  className={styles.formContainer}>
            <form onSubmit={handleSubmitforSocial} className={styles.form}>
                <div className={styles.inputAndLabel}>
                    <label className={styles.inputLabel}>Instagram Link<span className={styles.importantStar}>*</span></label>
                    <input className={styles.input} type='text' placeholder='Eg. ..instagram.com/username'/>
                </div>
                <div className={styles.inputAndLabel}>
                    <label className={styles.inputLabel}>Youtube Link <span className={styles.importantStar}>*</span></label>
                    <input className={styles.input} type='text' placeholder='Eg. ..youtebe/username'/>
                </div>
                <div className={styles.btns}>
                <button  onClick={() =>setIsBasicSelected(true)} className={styles.backButton2} type='submit'>Back</button>
                <button onClick={() => console.log(details)} className={styles.nextButton2} type='submit'>Next</button>
                </div>
                
            </form>
        </div>}
        
    </div>
  )
}

export default PopUpBox