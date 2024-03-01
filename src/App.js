import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landingpage.jsx';
import { Routes, Route } from "react-router-dom";
import Register from './components/register.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Routes>
  <Route index path="/" element={<LandingPage />} />
  <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
