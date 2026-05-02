import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    // This correctly points to your production server
    baseURL: "https://slab-studio.vercel.app" 
})

// Destructure from the 'authClient' instance you just created above
export const { signIn, signUp, useSession } = authClient