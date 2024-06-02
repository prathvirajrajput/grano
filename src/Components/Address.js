import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Address() {
  let id = localStorage.getItem("userId");
  let AddressId = localStorage.getItem("AddressId");

  const [Address, setAddress] = useState([]);

  useEffect(() => {
    let data = {
      userId: id,
    };

    axios
      .post(`http://103.104.74.215:3033/website/address_list`, data)
      .then((res) => {
        // console.log(res.data.data;
        setAddress(res.data.data);
      });
  }, [id,Address]);

  let handleClick = () => {
    let data1 = {
      userId: id,
      addressId: AddressId,
    };
    axios
      .post(`http://103.104.74.215:3033/website/address_delete`, data1)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <div className="my-account section-mb">
        <div className="container mt-7">
          <div className="row">
            <div className="col ">
              <div className="mt-7 px-7">
                <Link to="/AddAddress">
                  <button className="btn btn-success m-5 pb-4">
                    Add Address
                  </button>
                </Link>
                <br></br>
                <button className="btn btn-success m-5 pb-4">
                  Address List
                </button>
              </div>
            </div>
            {Address.map((item) => {
              return (
                <div
                  className="col-sm-5"
                  style={{ width: "350px", padding: "8px" }}
                  key={item._id}
                >
                  <div
                    className="card card text-black mb-3"
                    style={{ backgroundColor: "#f0fff0" }}
                  >
                    <div className="card-body pt-5">
                      <h1 className="card-title text-center">User Address</h1>
                      <div className="pt-2">
                        <h5 className="card-text">Id : {item._id}</h5>
                        <br />
                        <h5 className="card-text">Address : {item.address}</h5>
                        <br />
                        <h5 className="card-text">City : {item.city}</h5>
                        <br />
                        <h5 className="card-text">Pin Code : {item.pincode}</h5>
                        <br />
                        <div className="row">
                          <div className="col">
                            <button
                              className="btn btn-success"
                              onClick={handleClick}
                            >
                              {" "}
                              Delete{" "}
                            </button>
                          </div>
                          <div className="col">
                            <Link to={"/UpdateAddress"}>
                              <button className="btn btn-success">
                                {" "}
                                Update{" "}
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
