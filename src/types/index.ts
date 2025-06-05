import {Roles} from "@/enums";

export type UserProfile = {
    name: string;
    role: Roles;
    avatarUrl?: string;
}