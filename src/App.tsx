import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  Login  from './utils/Login';
import  Signup  from './utils/Signup';
import Home from './utils/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
 <>
 <BrowserRouter>
  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/' element={<Home/>}/>
  </Routes>
 </BrowserRouter>
 </>
  );
}

export default App;
