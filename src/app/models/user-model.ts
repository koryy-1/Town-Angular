export interface User {
    id: number;
    firstName: string | null;
    lastName: string | null;
    patronymic: string | null;
    role: string | null;
    isActive: boolean | null;
}