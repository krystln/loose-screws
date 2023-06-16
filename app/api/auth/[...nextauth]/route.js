import NextAuth from "next-auth/next";
import GoogleProviders from "next-auth/providers/google";

import { connectToDB } from "@utils/db";
import User from "@models/user";

const authOptions = {
    providers : [
        GoogleProviders({
            clientId : process.env.GOOGLE_ID,
            clientSecret : process.env.GOOGLE_SECRET    
        })
    ],
    pages : {
        
    },
    callbacks : {
        async session({session}){
            const sessionUser = await User.findOne({ email : session.user.email });
            session.user.id = sessionUser._id.toString();

            return session;
        },

        async signIn({profile, account, email, credentials}){
            try {
                await connectToDB();

                //User exists
                const userExists = await User.findOne({ email : profile.email });

                //User does not exist
                if(!userExists){
                    await User.create({
                        email : profile.email,
                        username : profile.name.replace(" ", "").toLowerCase(),
                        image : profile.picture
                    });
                }


                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        },

        
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };