import './MyProfile.css';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';



export default function MyProfile() {
   const { isLoggedIn, logOutUser } = useContext(AuthContext);

   return (
      <>
         <h1>My Profile</h1>
         {isLoggedIn && <div className="navbar-link"><button onClick={() => logOutUser()}>Log out</button></div>}
      </>
   )
}
