import './MyProfile.css';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';



export default function MyProfile() {
   const { logOutUser, business } = useContext(AuthContext);

   return (
      <>
         <h1>My Profile</h1>
         <div className="navbar-link"><button onClick={() => logOutUser()}>Log out</button></div>
         {business && <p>Business profile</p>}
      </>
   )
}
