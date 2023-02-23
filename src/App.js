import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './component/Contact/Contact';
import NotFound from './component/NotFound/NotFound';
import Common from './component/Common/Common';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Common/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
