import {Roles} from "@/enums";
import {z} from "zod";
import {LoginSchema} from "@/lib/zod/authShema";

export type UserProfile = {
    name: string;
    role: Roles;
    avatarUrl?: string;
}

export type LoginFormData = z.infer<typeof LoginSchema>;