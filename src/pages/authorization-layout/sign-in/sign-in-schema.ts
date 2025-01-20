import {z} from "zod";

export const signInSchema = z.object({
    email: z.string().email().min(1),
    password: z.string()
})

export type SignInForm = z.infer<typeof signInSchema>