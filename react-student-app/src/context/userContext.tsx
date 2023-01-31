import { createContext, useState, useContext, FormEvent, ChangeEvent } from "react";


type User = {
    name: string;
    email: string;
    gender: string;
  };
  

type userContextType = {
    user: User
    userData: User[]
    inputOnChange?(event: ChangeEvent<HTMLInputElement>): void
    userFormSubmit?(event: FormEvent):void
}
  
let userContext = createContext<userContextType>({
user:{
    name:"",
    email: "",
    gender: ""
},
userData: []
})
  
type Props = {
children: JSX.Element;
};

export const UserContextProvider = (props: Props) => {
  let { children } = props;
  let [user, setUser] = useState<User>({
    name: "",
    email: "",
    gender: "",
  });

  let [userData, setUserData] = useState<User[]>([])

  let inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  let userFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    setUserData([...userData, user])
    setUser({
        name: "",
        email: "",
        gender: ""
    })
    console.log(userData)
  };
  
  let value: userContextType = {
    user,
    userData,
    inputOnChange,
    userFormSubmit
  };

  return (
    <userContext.Provider value={value}>{children}</userContext.Provider>
  );
};

// create context Hook
export const useUserContext = () => {
  return useContext(userContext);
};
