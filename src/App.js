import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home/index';
import Navbar from './components/Navbar';
import ErrorPage from './pages/ErrorPage';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import IsPrivate from './components/IsPrivate';
import Bookings from './pages/bookings';
import Experience from './pages/experience';
import Experiences from './pages/experiences';
import Profile from './pages/profile';
import MyProfile from './pages/MyProfile';


function App() {
   return (
      <div className="App">
         <Toaster />
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bookings" element={<IsPrivate><Bookings /></IsPrivate>} />
            <Route path="/experience" element={<IsPrivate><Experience /></IsPrivate>} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/profile" element={<IsPrivate><Profile /></IsPrivate>} />
            <Route path="/myProfile" element={<IsPrivate><MyProfile /></IsPrivate>} />
            <Route path="*" element={<ErrorPage />} />
         </Routes>
      </div>
   );
}

export default App;
