import NextAuth from "next-auth"
import FacebookProvider  from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        authorizationUrl: process.env.FACEBOOK_CLIENT_AUTH_URL,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl: process.env.GOOGLE_CLIENT_AUTH_URL,
  }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)