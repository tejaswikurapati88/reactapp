import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Bookings from './components/Bookings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/bookings' element={<Bookings/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
