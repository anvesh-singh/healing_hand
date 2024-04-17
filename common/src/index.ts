import z from "zod";

export const PatientsignupInput = z.object({
    FirstName: z.string(),
    LastName:z.string(),
    Email: z.string().email(),
    Phone:z.string(),
    Password: z.string().min(6),
    address: z.object({
        street: z.string(),
        city: z.string(),
        state: z.string(),
        zip: z.string()
    }).optional(),
});

export type PatientSignupInput = z.infer<typeof PatientsignupInput>

export const PatientsigninInput = z.object({
    Email: z.string().email(),
    Password: z.string().min(6),
})

export type PatientsigninInput = z.infer<typeof PatientsigninInput>


export const DoctorsignupInput = z.object({
    FirstName: z.string(),
    LastName:z.string(),
    Email: z.string().email(),
    Phone:z.string(),
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


