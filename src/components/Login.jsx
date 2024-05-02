import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    Usernameoremail: "",
    Password: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center py-5">
          <div className="col-3 border py-5 rounded">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  UserName or Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="UserName or Email"
                  Name="Usernameoremail"
                  onChange={handleFormChange}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="Password"
                  onChange={handleFormChange}
                />
              </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <NavLink to="/signup" className="d-block pl-1 pt-2">Signup</NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
