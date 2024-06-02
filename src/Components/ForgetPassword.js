import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

function ForgetPassword() {
  const [email, setEmail] = useState();
  const [password, setPasssword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log(email)

    let data = {
      email: email,
    };

    axios
      .post(`http://103.104.74.215:3033/website/resetPassword`, data)
      .then((res) => {
        console.log(res.data);
        if(res.data.result==='true'){
          setPasssword(res.data.password);

          setTimeout(() => {
            navigate("/Login"); 
          }, 2500);
          toast.success(`new password : ${password}`);

        }

     
  
  
      });
  };

  return (
    <div>
              <ToastContainer position="top-center"
autoClose={2500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark" />
      <div className="login-register-area section-mb"></div>

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
                  <h4>Forget Password...?</h4>
                </a>
              </div>

              <div className="tab-content">
                <div id="lg1" className="tab-pane show active">
                  <div className="login-form-container">
                    <div className="login-register-form">
                      <form onSubmit={handleSubmit}>
                        <input
                          type="email"
                          name="email"
                          placeholder=" Enter Your E-Mail Here"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
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
  );
}

export default ForgetPassword;
