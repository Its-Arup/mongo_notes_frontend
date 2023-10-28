import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div>
      <h1>Notes Taking Application</h1>
      <Routes>
        <Route path='/register' element={<SignUp/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
