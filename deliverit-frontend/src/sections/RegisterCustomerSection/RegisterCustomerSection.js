import React from "react";

import FormImage from "../../assets/register-img.svg";
import "./RegisterCustomerSection.css";
import LoginRegisterHeader from "../../components/LoginRegisterHeader/LoginRegisterHeader";

const RegisterCustomerSection = props => {
  return (
    <div className="register-customer-section">
      <LoginRegisterHeader />
      <div className="register-customer-section--wrapper">
        <form action="">
          <div className="register-customer-section--form_grid">
            <h1 className="register-customer-section--form_label">Register</h1>
            <div id="input-div">
              <label for="name">Full name</label>
              <br />
              <input type="text" name="name" id="FullName" />
            </div>
            <div id="input-div">
              <label for="phone">Phone</label>
              <br />
              <input type="tel" name="phone" id="Phone" />
            </div>
            <div id="input-div">
              <label for="email">Email</label> <br />
              <input type="email" name="email" id="Email" />
            </div>
            <div id="input-div">
              <label for="phone">Phone</label> <br />
              <input type="text" name="phone" id="NextPhone" />
            </div>
            <div id="input-div">
              <label for="password">Password</label> <br />
              <input type="password" name="password" id="Password" />
            </div>
            <div id="input-div">
              <label for="cpassword">Confirm password</label> <br />
              <input type="password" name="cpassword" id="ConfirmPassword" />
            </div>
            <button type="submit">REGISTER</button>

            <p>
              Have an account already? <a href="">Login here</a>
            </p>
          </div>
        </form>

        <img
          className="register-customer-section--form_logo"
          src={FormImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default RegisterCustomerSection;