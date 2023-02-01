import { useUserContext } from "../context/userContext";
import { useNavigate, useParams } from "react-router-dom";

export function DisplayUser() {
  let navigate = useNavigate();
  let { userData, removeUser } = useUserContext();
  return (
    <>
      {userData.length == 0 ? (
        "No users found"
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <th scope="row"></th>
              {userData.map(({ id, name, email, gender }) => {
                return (
                  <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{gender}</td>
                    <td>
                      <button onClick={() => navigate("/user/edit/" + id)}>
                        edit
                      </button>
                    </td>
                    <td>
                      <button onClick={() => removeUser(id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
