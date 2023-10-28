import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Components/SignUp';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <h1>Notes Taking Application</h1>
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
