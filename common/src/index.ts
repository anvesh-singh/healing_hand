import z from "zod";

export const UsersignupInput = z.object({
    FirstName: z.string(),
    LastName:z.string(),
    Email: z.string().email(),
    Phone:z.number(),
    Password: z.string().min(6),
    address: z.object({
        street: z.string(),
        city: z.string(),
        state: z.string(),
        zip: z.string()
    }).optional(),
});

export type UserSignupInput = z.infer<typeof UsersignupInput>

export const UsersigninInput = z.object({
    Email: z.string().email(),
    Password: z.string().min(6),
})

export type UserSigninInput = z.infer<typeof UsersigninInput>


export const DoctorsignupInput = z.object({
    FirstName: z.string(),
    LastName:z.string(),
    Email: z.string().email(),
    Phone:z.number(),
    Password: z.string().min(6),
    address: z.object({
        street: z.string(),
        city: z.string(),
        state: z.string(),
        zip: z.string()
    }).optional(),
});

export type DoctorSignupInput = z.infer<typeof DoctorsignupInput>


export const DoctorsigninInput = z.object({
    Email: z.string().email(),
    Password: z.string().min(6),
})

export type DoctorSigninInput = z.infer<typeof DoctorsigninInput>


