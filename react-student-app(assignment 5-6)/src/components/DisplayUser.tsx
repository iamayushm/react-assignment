import { useUserContext } from "../context/userContext";
import { useNavigate, useParams } from 'react-router-dom';

export function DisplayUser() {
  let navigate = useNavigate();
  let { userData, removeUser } = useUserContext();
  return (
    <ul className="list-group">
      {userData.length == 0
        ? "No users found"
        : userData.map(({ id, name, email, gender }) => {
            return (
              <>
                <li className="list-group-item">
                  name: {name} email: {email} gender: {gender}
                </li>
                <button
                    onClick={() => removeUser(id)}
                  >
                    Delete
                  </button>
                <button
                  onClick={() => navigate("/user/edit/" + id)}
                >
                  edit
                </button>
              </>
            );
          })}
    </ul>
  );
}
