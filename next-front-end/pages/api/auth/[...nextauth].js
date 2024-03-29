import NextAuth from "next-auth"
import FacebookProvider  from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        authorizationUrl: "/api/auth/callback/facebook",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl: "/api/auth/callback/google",
  }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)