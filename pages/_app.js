import { UserContext, UserProvider } from '@/context/AddNewProfile'
import '@/styles/globals.css'
import {SessionProvider, useSession} from 'next-auth/react'
import { useRouter } from 'next/router'
import { useContext } from 'react'


export default function App({ Component, pageProps , sessions}) {
 



  return (
    <UserProvider>
    <SessionProvider session={sessions}>
      <Component {...pageProps} />
      
    </SessionProvider>
    </UserProvider>
    
  )
}
