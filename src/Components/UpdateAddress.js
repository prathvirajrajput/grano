import React,{useState} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function UpdateAddress() {

    let id = localStorage.getItem("userId");
    let AddressId = localStorage.getItem("AddressId");

    const[inputData,setInputData] = useState({
        userId : id,
        address: "",
        pincode: "",
        city: "",
        addressId: AddressId,
   });
   const navigate = useNavigate();

   
 const handleChange = (e) => {

    setInputData({...inputData,[e.target.name] : e.target.value})};

    const handleSubmit = (e) => {
        e.preventDefault();  
        // console.log(inputData)
    
        axios
          .post(`http://103.104.74.215:3033/website/address_update`,inputData)
          .then((res) => {
            console.log(res)
             if(res.data.result){
    
                   setTimeout(() => {
                navigate("/Address"); 
              }, 1000);
              toast.success("address Updated sucessfully");
            
             }
         
          });
        }
  return (
    <div>
                     {/* <ToastContainer position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark" /> */}
       <div className="container mt-6">
        <div className="row">
          <div className="col-lg-7 col-md-12 mx-auto">
            <div className="login-register-wrapper">
              <div
                className="login-register-tab-list nav nav-tabs"
             
              >
                <h2 style={{color:"green"}}>Update Your Address Here..</h2>
              </div>

              <div className="tab-content">
                <div className="tab-pane show active">
                  <div className="login-form-container">
                    <div className="login-register-form">
                      <form onSubmit={handleSubmit}>
                        <input
                          type="text"
                          name="address" 
                          placeholder="Enter Your Address"
                          value={inputData.address}
                          onChange={handleChange}
                        />
                        <input
                          type="text"
                          name="pincode"
                          placeholder="Enter Pincode Of Your Area"
                          value={inputData.pincode}
                          onChange={handleChange}
                        />
                        <input
                          type="text"
                          name="city"
                          placeholder="Enter Your City Name"
                          value={inputData.city}
                          onChange={handleChange}
                        />
                        <div className="button-box">

                          <button type="submit" className="btn btn-dark">
                            Submit
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

  )
}

export default UpdateAddress
