import { UserProvider } from '@/context/AddNewProfile'
import '@/styles/globals.css'
import {SessionProvider, useSession} from 'next-auth/react'
import { useRouter } from 'next/router'


export default function App({ Component, pageProps , sessions}) {
 

  return (
    <UserProvider>
    <SessionProvider session={sessions}>
      <Component {...pageProps} />
    </SessionProvider>
    </UserProvider>
    
  )
}
