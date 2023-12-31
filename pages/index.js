import SignUp from '@/pages/sign-up-view/sign-up'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Home from '../components/home/dashboard'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../components/home/home.module.css'




export default function Index() {

  const [loading , setLoading] = useState(false)
  const [visible , setVisible] = useState(false)
  const {data: session} = useSession()
  const router = useRouter()

  useEffect(() =>{
        if(!session){
          router.push("/sign-up-view/sign-up")
          setLoading(!loading)
          
          
        }else if(session){
          setVisible(true)
        }
        
  }, [session])



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
      {loading &&  <div className={styles.loading}><div className={styles.ldsheart}><div></div></div> </div>}
      { visible &&  <Home/>}
     
    
      </main>
    </>
  )
}
