import './App.css';
import HomePage from './pages/Home';
import NavBar from './components/Navbar.jsx';
import { Routes, Route } from "react-router-dom";
import AddVehicle from './pages/AddVehicle.jsx';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-vehicle" element={<AddVehicle />} />
    </Routes>
    </>
  );
}

export default App;
