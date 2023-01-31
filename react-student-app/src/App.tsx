import { useState } from "react";
import { DisplayUser } from "./components/DisplayUser";
import UserRegistration from "./components/UserRegistration";

const App = () => {

  let [toggle, setToggle] = useState(false)


  function updateToggle(){
    setToggle(!toggle)
  }

  return (
    <>
      <main className="container">
        <div className="row justify-content-center">
          
          <button className="btn" onClick={updateToggle}> {toggle? "Register User": "Display users"}</button>

          {toggle ? <DisplayUser/> : <UserRegistration />}
          
          
          
        </div>
      </main>
    </>
  );
};

export default App;
