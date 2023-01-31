import { User } from "../context/userContext";


  export const updateUserDB = (user: User[]) => {
    console.log("here")
    localStorage.setItem('UserList', JSON.stringify(user));
  };

  export const getUserDB= (): User[] => {
    let user = localStorage.getItem('UserList');
    return user ? JSON.parse(user) : [];
  };
  