import './MyProfile.css';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';



export default function MyProfile() {
   const { logOutUser, isBusiness } = useContext(AuthContext);

   return (
      <>
         <h1>My Profile</h1>
         <div className="navbar-link"><button onClick={() => logOutUser()}>Log out</button></div>
         {isBusiness && <p>Business profile</p>}
      </>
   )
}
