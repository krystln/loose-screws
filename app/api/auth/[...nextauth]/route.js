import NextAuth from "next-auth/next";
import GoogleProviders from "next-auth/providers/google";

const authOptions = {
    providers : [
        GoogleProviders({
            clientId : process.env.GOOGLE_ID,
            clientSecret : process.env.GOOGLE_SECRET    
        })
    ],
    pages : {
        signIn : '/login'
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };