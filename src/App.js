import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landingpage.jsx';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard.jsx';

import Register from "./components/register.jsx";
import Verification from './components/verification.jsx';
import Login from './components/login.jsx';

function App() {
    return (
        <Routes>
            <Route index path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register/verify" element={<Verification />} />
            <Route path="/register" element={<Register />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    );
}
export default App;
