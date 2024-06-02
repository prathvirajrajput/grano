import React from "react";
import { Link } from 'react-router-dom'

function MyAccount() {
  return (
    <div>
      <div className="my-account section-mb" style={{ paddingTop: "2%" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 mb-5">
              <div className="myaccount-tab-menu nav" role="tablist">
                <a href="#dashboad" data-bs-toggle="tab">
                  <i className="fa fa-tachometer" /> Dashboard
                </a>
                <a href="#orders" data-bs-toggle="tab">
                  <i className="fa fa-cart-arrow-down" /> Orders
                </a>
                <a href="#download" data-bs-toggle="tab">
                  <i className="fa fa-download" /> Download
                </a>
                <a href="#payment-method" data-bs-toggle="tab">
                  <i className="fa fa-credit-card" /> Payment Method
                </a>
                <Link to="/Address"> Address</Link>
                <a href="#account-info" data-bs-toggle="tab" className="active">
                  <i className="fa fa-user" /> Account Details
                </a>
                <a href="login.html">
                  <i className="fa fa-sign-out" /> Logout
                </a>
              </div>
            </div>

            {/* <!-- My Account Tab Menu End --> */}

            {/* <!-- My Account Tab Content Start --> */}
            <div
              className="col-lg-9 col-12 mb-5"
              style={{ paddingLeft: "5%", paddingInline: "2%" }}
            >
              <div className="tab-content" id="myaccountContent">
                {/* Single Tab Content Start */}
                <div className="tab-pane fade" id="dashboad" role="tabpanel">
                  <div className="myaccount-content">
                    <h3>Dashboard</h3>
                    <div className="welcome mb-20">
                      <p>
                        Hello, <strong>Alex Tuntuni</strong> (If Not
                        <strong>Tuntuni !</strong>
                        <a href="login-register.html" className="logout">
                          {" "}
                          Logout
                        </a>
                        )
                      </p>
                    </div>
                    <p className="mb-0">
                      From your account dashboard. you can easily check &amp;
                      view your recent orders, manage your shipping and billing
                      addresses and edit your password and account details.
                    </p>
                  </div>
                </div>
                {/* Single Tab Content End */}
                {/* Single Tab Content Start */}
                <div className="tab-pane fade" id="orders" role="tabpanel">
                  <div className="myaccount-content">
                    <h3>Orders</h3>
                    <div className="myaccount-table table-responsive text-center">
                      <table className="table table-bordered">
                        <thead className="thead-light">
                          <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Mostarizing Oil</td>
                            <td>Aug 22, 2018</td>
                            <td>Pending</td>
                            <td>$45</td>
                            <td>
                              <a
                                href="shopping-cart.html"
                                className="ht-btn black-btn"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Katopeno Altuni</td>
                            <td>July 22, 2018</td>
                            <td>Approved</td>
                            <td>$100</td>
                            <td>
                              <a
                                href="shopping-cart.html"
                                className="ht-btn black-btn"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Murikhete Paris</td>
                            <td>June 12, 2017</td>
                            <td>On Hold</td>
                            <td>$99</td>
                            <td>
                              <a
                                href="shopping-cart.html"
                                className="ht-btn black-btn"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* Single Tab Content End */}
                {/* Single Tab Content Start */}
                <div className="tab-pane fade" id="download" role="tabpanel">
                  <div className="myaccount-content">
                    <h3>Downloads</h3>
                    <div className="myaccount-table table-responsive text-center">
                      <table className="table table-bordered">
                        <thead className="thead-light">
                          <tr>
                            <th>Product</th>
                            <th>Date</th>
                            <th>Expire</th>
                            <th>Download</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Mostarizing Oil</td>
                            <td>Aug 22, 2018</td>
                            <td>Yes</td>
                            <td>
                              <a href="#" className="ht-btn black-btn">
                                Download File
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Katopeno Altuni</td>
                            <td>Sep 12, 2018</td>
                            <td>Never</td>
                            <td>
                              <a href="#" className="ht-btn black-btn">
                                Download File
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* Single Tab Content End */}
                {/* Single Tab Content Start */}
                <div
                  className="tab-pane fade"
                  id="payment-method"
                  role="tabpanel"
                >
                  <div className="myaccount-content">
                    <h3>Payment Method</h3>
                    <p className="saved-message">
                      You Can't Saved Your Payment Method yet.
                    </p>
                  </div>
                </div>
                {/* Single Tab Content End */}
                {/* Single Tab Content Start */}
               
                {/* Single Tab Content End */}
                {/* Single Tab Content Start */}
                <div
                  className="tab-pane fade active show"
                  id="account-info"
                  role="tabpanel"
                >
                  <div className="myaccount-content">
                    <h3>Account Details</h3>
                    <div className="account-details-form">
                      <form action="#">
                        <div className="row">
                          <div className="col-lg-6 col-12 mb-5">
                            <input
                              id="first-name"
                              placeholder="First Name"
                              type="text"
                            />
                          </div>
                          <div className="col-lg-6 col-12 mb-5">
                            <input
                              id="last-name"
                              placeholder="Last Name"
                              type="text"
                            />
                          </div>
                          <div className="col-12 mb-5">
                            <input
                              id="display-name"
                              placeholder="Display Name"
                              type="text"
                            />
                          </div>
                          <div className="col-12 mb-5">
                            <input
                              id="email"
                              placeholder="Email Address"
                              type="email"
                            />
                          </div>
                          <div className="col-12 mb-5">
                            <h4>Password change</h4>
                          </div>
                          <div className="col-12 mb-5">
                            <input
                              id="current-pwd"
                              placeholder="Current Password"
                              type="password"
                            />
                          </div>
                          <div className="col-lg-6 col-12 mb-5">
                            <input
                              id="new-pwd"
                              placeholder="New Password"
                              type="password"
                            />
                          </div>
                          <div className="col-lg-6 col-12 mb-5">
                            <input
                              id="confirm-pwd"
                              placeholder="Confirm Password"
                              type="password"
                            />
                          </div>
                          <div className="col-12">
                            <button className="btn btn-dark">
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* Single Tab Content End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
