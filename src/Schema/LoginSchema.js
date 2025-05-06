import {z} from "zod"


export const LoginSchema = z.object({
    username: z.string().min(2, "you must have more than two letters to register"),
    password: z.string().min(6, "you must have more than six letters")
})