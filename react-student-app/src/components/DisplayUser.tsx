import { useUserContext } from "../context/userContext";

export function DisplayUser() {
  let { userData } = useUserContext();

  return (
    <ul className="list-group">
        
        { userData.length==0? "No users found" : userData.map(({name, email, gender})=>{
            return (
            <li className="list-group-item">name: {name} email: {email} gender: {gender}</li>
            )
        })}
    </ul>
  );
}
