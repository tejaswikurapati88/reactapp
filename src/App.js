import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Bookings from './components/Bookings'
import Order from './components/Order';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/bookings' element={<Bookings/>} />
        <Route exact path='/order' element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
