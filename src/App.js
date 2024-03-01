import logo from './logo.svg';
import './App.css';
// import LandingPage from './components/landingpage.jsx';
import LandingPage2 from './components/landingPage2.jsx';
import { Routes, Route } from "react-router-dom";
import Register from './components/register.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Routes>
  {/* <Route index path="/" element={<LandingPage />} /> */}
  <Route index path="/" element={<LandingPage2 />} />
  <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
