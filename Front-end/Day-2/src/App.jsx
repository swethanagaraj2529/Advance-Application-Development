import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Booking from './pages/booking';
import NavAdmin from './pages/navadmin';
import Signup from './pages/signup';
import Academy from './pages/academy';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/home" element={<Home/>}></Route> 
                <Route path="/booking" element={<Booking/>}></Route>  
                <Route path="/navadmin" element={<NavAdmin/>}></Route>  
                <Route path="/signup" element={<Signup/>}></Route>  
                <Route path="/academy" element={<Academy/>}></Route>  
             
              
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;