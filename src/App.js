

import './App.css';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Contact from './Components/Contact';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login';
import Home from './Components/Home';
import MainNav from './Components/MainNav';
import About from './Components/About';
import Shop from './Components/Shop';
import ForgetPassword from './Components/ForgetPassword';
import MyAccount from './Components/MyAccount';
import AddAddress from './Components/AddAddress';
import Address from './Components/Address';
import UpdateAddress from './Components/UpdateAddress';
import SingleProduct from './Components/SingleProduct';




function App() {
  return (
    <Router>
    <div >
      
        <Header />
        <MainNav />
        
        
      <Routes>
           
     
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/Shop" element={<Shop />}></Route>
      <Route exact path="/Contact" element={<Contact />}></Route>
      <Route exact path="/Login" element={<Login />}></Route>
      <Route exact path="/SingleProduct" element={<SingleProduct />}></Route>
      <Route exact path="/ForgetPassword" element={<ForgetPassword />}></Route>
      <Route exact path="/MyAccount" element={<MyAccount />}></Route>
      <Route exact path="/AddAddress" element={<AddAddress />}></Route>
      <Route exact path="/Address" element={<Address />}></Route>
      <Route exact path="/UpdateAddress" element={<UpdateAddress />}></Route>


      
    
      </Routes>
    </div>
    
    <Footer />
   
    </Router>
  );
}

export default App;
