import React, { use } from 'react'
import styles from './sign-up.module.css'
import Link from 'next/link'
import { GitHub, LinkedIn, Message } from '@mui/icons-material'
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const SignUp = () => {
    const router = useRouter()

    const {data: session} = useSession()

    const handleClick = () => {
        signIn()    
    }

    if(session){
        router.push("/home/dashboard") 
    }
  return (
    <div className={styles.mainContainer}>
        <div className={styles.subContainer1}>
            <div className={styles.logoDiv}>
                <h2 className={styles.logoTitle}>Logo</h2>
            </div>
            <div className={styles.nameBrand}>
                <h2 className={styles.logoTitle2}>Board.</h2>
            </div>
            <div className={styles.socialLinks}>
                <Link className={styles.socialLink} href={"#"}><GitHub fontSize='large'/></Link>
                <Link  className={styles.socialLink}  href={"#"}><TwitterIcon fontSize='large'/></Link>
                <Link  className={styles.socialLink}  href={"#"}><LinkedIn fontSize='large'/></Link>
                <Link  className={styles.socialLink}  href={"#"}><Message fontSize='large'/></Link>
            </div>
        </div>
        <div className={styles.subContainer2}>
            <div className={styles.signindIv}>
                    <div className={styles.signinLogoContainer}>
                        <h1 className={styles.signInTitle}>Sign In</h1>
                        <p className={styles.signInParagraph}> Sign in to your account</p>
                    </div>
                    <div className={styles.signInWithLinks}>
                        <div onClick={handleClick} className={styles.signInBox}>
                            <Image width={30} height={30} src="/icons/google.svg"/>   
                            <p className={styles.signInWithText}>Sign in with Google</p>
                        </div>
                    </div>
                    <div className={styles.formContainer}>
                        <form className={styles.form}>
                            <div className={styles.inputAndLabel}>
                                <label className={styles.inputLabel}>Email Address</label>
                                <input className={styles.input} type='text' value='johndoe@gmail.com'/>
                            </div>
                            <div className={styles.inputAndLabel}>
                                <label className={styles.inputLabel}>Password</label>
                                <input className={styles.input} type='password' value='123123'/>
                            </div>
                            <p className={styles.forgotPasswordLink}>Forgot Your Password</p>
                            <button className={styles.nextButton} type='submit'>Next</button>
                        </form>
                        
                    </div>
                    <p className={styles.registerText}>Don't have an account? <span className={styles.registerLink}>Register here</span></p>

            </div>
        </div>
    </div>
  )
}

export default SignUp