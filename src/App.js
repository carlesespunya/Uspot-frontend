import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ErrorPage from './pages/ErrorPage';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import IsPrivate from './components/IsPrivate';
import Bookings from './pages/Bookings';
import Experience from './pages/Experience';
import Experiences from './pages/Experiences';
import Profile from './pages/Profile';
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
            <Route path="/experiences/:experienceId" element={<IsPrivate><Experience /></IsPrivate>} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/users/:userId" element={<IsPrivate><Profile /></IsPrivate>} />
            <Route path="/myProfile" element={<IsPrivate><MyProfile /></IsPrivate>} />
            <Route path="*" element={<ErrorPage />} />
         </Routes>
      </div>
   );
}

export default App;
