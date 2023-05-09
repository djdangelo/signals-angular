import { computed, signal } from "@angular/core";
import { User } from "../interfaces/users";

export const users = signal<User[]>([]);
export const currentPage = signal<number>(1);

export const totalUsers = computed( () => `Total usuarios: ${users().length}`);
