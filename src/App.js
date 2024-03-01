import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landingpage.jsx';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard.jsx';
import Register2 from "./components/register2.jsx";

function App() {
    return (
        <Routes>
            <Route index path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="register2" element={<Register2 />} />
        </Routes>
    );
}
export default App;
