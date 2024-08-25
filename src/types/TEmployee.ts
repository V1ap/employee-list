export type TEmployee = {
  id: number;
  name: string;
  isArchive: boolean;
  role: keyof typeof ERole;
  phone: string;
  birthday: string;
};

export enum ERole {
  driver = "Водитель",
  waiter = "Официант",
  cook = "Повар",
}
