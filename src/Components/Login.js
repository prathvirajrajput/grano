import React, {useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'


function Login() {
 const[inputData,setInputData] = useState({
    name : "",
    phone: "",
    password: "",
    email: ""
 });
 

 const [email,setEmail] = useState('');
 const [password,setPasssword] = useState('')

 const navigate = useNavigate();
 




 const handleChange = (e) => {

  setInputData({...inputData,[e.target.name] : e.target.value})};
 
  const HandleSubmit = (e) => {
    e.preventDefault();  
    // console.log(inputData)

    axios
      .post(`http://103.104.74.215:3033/website/signup`,inputData)
      .then((res) => {
        console.log(res)
      
          setTimeout(() => {
            navigate("/"); 
          }, 1000);
          toast.success("User Registered successfully");
        
      });
  };


  const  HandleSubmit2 = (e)=>{
    e.preventDefault();
  
    let Data ={
        "email" : email,
        "password": password
        
    }

 
    // console.log(apiData)

    axios.post(`http://103.104.74.215:3033/website//login`,Data).then((res)=>{
        // console.log(res);

        if(res.data.result){

          localStorage.setItem("userId" , res.data.data._id )
          setTimeout(() => {
            navigate("/"); 
          }, 1000);
          toast.success("LogIn Successfully");
          
        }
    });


}

 

  return (
    <div>
          <ToastContainer position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark" />
      <div className="login-register-area section-mb">
      </div>

      <div className="container mt-6">
        <div className="row">
          <div className="col-lg-7 col-md-12 mx-auto">
            <div className="login-register-wrapper">
              <div
                className="login-register-tab-list nav nav-tabs"
                id="nav-tab"
                role="tablist"
              >
                <a className="active" data-bs-toggle="tab" href="#lg1">
                  <h4>login</h4>
                </a>
                <a data-bs-toggle="tab" href="#lg2">
                  <h4>register</h4>
                </a>
              </div>

              <div className="tab-content">
                <div id="lg1" className="tab-pane show active">
                  <div className="login-form-container">
                    <div className="login-register-form">
                      <form onSubmit={HandleSubmit2}>
                        <input
                          type="email"
                            name="email"
                          placeholder=" Enter Your E-Mail Here"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                        />
                        <input
                          type="password"
                            name="password"
                          placeholder="Enter Your Password Here"
                            onChange={(e) => {
                              setPasssword(e.target.value);
                            }}
                        />
                        <div className="button-box">
                          <div className="login-toggle-btn">
                            <input id="remember" type="checkbox" />
                            <label htmlFor="remember">Remember me</label>
                            <h7>
                            <Link to="/ForgetPassword">Forgot Password..?</Link>
                            </h7>
                          </div>

                          <button type="submit" className="btn btn-dark">
                            Log In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div id="lg2" className="tab-pane">
                  <div className="login-form-container">
                    <div className="login-register-form">
                      <form onSubmit={HandleSubmit}>
                        <input
                          type="text"
                          name="name"
                          placeholder=" Enter Your Username"
                          value={inputData.name}
                          onChange={handleChange}
                        />
                          <input
                          type="text"
                          name="phone"
                          pattern="[0-9]{10}"
                          required
                          placeholder=" Enter Your mobile number"
                          value={inputData.phone}
                          onChange={handleChange}
                        />
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter Your Password"
                          value={inputData.password}
                          onChange={handleChange}
                        />
                        <input
                          name="email"
                          placeholder=" Enter your Email"
                          type="email"
                          value={inputData.email} 
                          onChange={handleChange}
                        />
                        <div className="button-box">
                          <button type="submit" className="btn btn-dark">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Login;
