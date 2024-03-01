import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landingpage.jsx';
import { Routes, Route } from "react-router-dom";
import Register from './components/register.jsx';
import Dashboard from './components/Dashboard.jsx';

function App() {
    return (
        <Routes>
            <Route index path="/" element={<LandingPage />} />
            <Route path="register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default App;
