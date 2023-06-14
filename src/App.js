
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import State from './Components/State';
import Parent from './Components/Parent';
import Book from './Components/Books';
// import Card1 from './Components/Card1';
// import CardHome from './Components/CardHome';
// import MyForm from './Components/MyForm';
import MyForm from './Components/MyForm';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/state' element={<State/>}/>
        <Route path='/parent' element={<Parent/>}/>
        {/* <Route path='/card1' element={<Card1/>}/> */}
        {/* <Route path='/cardhome' element={<CardHome/>}/> */}
        
        {/* <Route path='/navbar'element={<Navbar/>}/> */}
        <Route path='/myform' element={<MyForm/>}/>
      </Routes>
      </Router>
    </>
    );
}

export default App;
