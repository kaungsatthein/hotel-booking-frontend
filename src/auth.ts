import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log("user, account", user, account);
      try {
        if (user.email && account?.provider === "google") {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/v1/users/oauth`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                profile: {
                  name: user.name,
                  email: user.email,
                  image: user.image,
                  providerId: account.providerAccountId,
                },
              }),
            }
          );

          if (!response.ok) {
            console.error(
              "Failed to sync user with Express API:",
              response.statusText
            );
          } else {
            const data = await response.json();
            console.log("User synced successfully:", data.user);
          }
        }
        return true; //
      } catch (error) {
        console.error("Failed to sync user with Express API:", error);
        return true;
      }
    },
    async session({ session, token }) {
      if (session.user && token.email) {
        session.user.email = token.email as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user && user.email) {
        token.email = user.email;
      }
      return token;
    },
  },
  trustHost: true,
});
