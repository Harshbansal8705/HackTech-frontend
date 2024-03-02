import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landingpage.jsx';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard.jsx';

import Register from "./components/register.jsx";

function App() {
    return (
        <Routes>
            <Route index path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="register2" element={<Register2 />} />
            <Route path="/recommended" element={<RecommendedBreadthCourses />} />
        </Routes>
    );
}
export default App;
