import { ERole } from "@/types/TEmployee";

export const roles: { value: keyof typeof ERole; name: string }[] = [
  { value: "driver", name: "Водитель" },
  { value: "waiter", name: "Официант" },
  { value: "cook", name: "Повар" },
];
