import { User } from "../api/types";

export const filterUsers = (users: User[], searchValue: string) => {
  return users.filter((user: User) => {
    const searchVal = searchValue.toLowerCase();
    const userName = `${user.name.firstname} ${user.name.lastname}`
    return userName.toLowerCase().includes(searchVal)
      || user.email.toLowerCase().includes(searchVal)
      || user.phone.toLowerCase().includes(searchVal)
  });
}