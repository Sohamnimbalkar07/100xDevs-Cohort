import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import { pages } from "next/dist/build/templates/app-page";

export const NEXT_AUTH = {
    providers : [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: {label:'email', type: 'text', placeholder: 'email'},
                password: {label: 'password', type: 'password', placeholder: 'password'},
            },
            async authorize(credentials: any){
                console.log(credentials);
                return {
                    id: "user1",
                    name: "soham nimbalkar",
                    email: "sohamnimbalkar07@gmail.com"
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        signIn: ({user}) => {
            if(user.email === "randomperson@gamil.com"){
                return false;
            };
            return true;
        },
        jwt: ({ token, user}) => {
            console.log(token);
            token.userId = token.sub;
            return token;
        },
        session: ({ session, token, user }: any) => {
            if (session.user) {
                session.user.id = token.userId
            }
            return session
        }
    },
    pages: {
        signIn : '/signin'
    }
}