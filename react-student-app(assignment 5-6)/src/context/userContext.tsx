import { createContext, useState, useContext, FormEvent, ChangeEvent, useEffect } from "react";
import { updateUserDB } from "../service/UserStorage";


export type User = {
    id: number,
    name: string;
    email: string;
    gender: string;
  };
  

type userContextType = {
    currentUser: User
    userData: User[]
    inputOnChange?(event: ChangeEvent<HTMLInputElement>): void
    userFormSubmit?(event: FormEvent):void
    updateUser?(event: FormEvent):void
    setUserToUpdate(id: number):void
    removeUser(id: number):void
}
  
let userContext = createContext<userContextType>({
currentUser:{
    id: 0,
    name:"",
    email: "",
    gender: ""
},
userData: [],
setUserToUpdate: ()=>{},
removeUser: ()=>{}
})
  
type Props = {
children: JSX.Element;
};

export const UserContextProvider = (props: Props) => {
  let { children } = props;
  let [currentUser, setUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
    gender: "",
  });


  let [userData, setUserData] = useState<User[]>([])

  useEffect(()=>{
    updateUserDB(userData)    
  },[userData])



  let inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    setUser({ ...currentUser, [name]: value });
  };
  

  let userFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    currentUser.id = userData.length+1
    setUserData([...userData, currentUser])
    setUser({
        id: userData.length,
        name: "",
        email: "",
        gender: ""
    })
    console.log(userData)
    alert("user updated")
  };

  let updateUser = (event: FormEvent) => {
    event.preventDefault();
    const index = userData.findIndex((user) => user.id === currentUser.id);
    userData[index] = { ...currentUser };
    setUserData([...userData]);
    setUser({ ...userData[index] });
    alert('User Updated');
  };

  let removeUser = (index: number) => {
    let userList = [...userData];
    userList.splice(index-1, 1);
    // console.log(index, userList)
    setUserData([...userList]);
    console.log("user deleted")
  };

  let setUserToUpdate = (id: number) => {
    let result = userData.find((user) => id === user.id);
    if (result === undefined) {
      window.location.replace('/');
    } else {
      setUser({ ...result });
    }
  }
  
  let value: userContextType = {
    currentUser,
    userData,
    inputOnChange,
    userFormSubmit,
    updateUser,
    setUserToUpdate,
    removeUser
  };

  return (
    <userContext.Provider value={value}>{children}</userContext.Provider>
  );
};

// create context Hook
export const useUserContext = () => {
  return useContext(userContext);
};
