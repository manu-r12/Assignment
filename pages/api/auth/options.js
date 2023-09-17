import CredentialsProvider from 'next-auth/providers/credentials'

 export const options =  {
        providers: [
            CredentialsProvider({
                name: "Credentials",
                credentials: {
                    username: {
                        label: "Username",
                        type:"text",
                        placeholder: "your username"
                    }
                }
            })
        ]
 }