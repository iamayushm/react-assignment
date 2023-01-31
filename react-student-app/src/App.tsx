import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DisplayUser } from "./components/DisplayUser";
import NavBar from "./components/NavBar";
import UpdateUserRegistration from "./components/UpdateUserRegistration";
import UserRegistration from "./components/UserRegistration";

const App = () => {

  // let [toggle, setToggle] = useState(false)


  // function updateToggle(){
  //   setToggle(!toggle)
  // }

  return (
    <>
      <main className="container">
        <div className="row justify-content-center">
          
        <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/user" />} />
            <Route path="/user" element={<DisplayUser />} />
            <Route path="/user/add" element={<UserRegistration />} />
            <Route path="/user/edit/:id" element={<UpdateUserRegistration />} />
          </Routes>      
          
        </div>
      </main>
    </>
  );
};

export default App;
