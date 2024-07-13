export type User = {
  id: number;
  email: string;
  name: { firstname: string; lastname: string };
  phone: string;
}