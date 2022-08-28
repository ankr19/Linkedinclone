import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginuser } from "../../features/user/userSlice";
import { auth } from "../../Firebase1";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [creditial, setCreditial] = useState({
    name: "",
    email: "",
    password: "",
    photoURL: "",
  });

  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    if (!creditial.email) {
      alert("Enter a the mail");
    }
    if (!creditial.photoURL) {
      alert("Enter a the PhotoURL");
    }
    if (!creditial.name) {
      alert("Enter a the name");
    }
    if (!creditial.password) {
      alert("Enter a the password");
    }

    auth
      .createUserWithEmailAndPassword(creditial.email, creditial.password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: creditial.name,
            photoURL: creditial.photoURL,
          })
          .then(() => {
            dispatch(
              loginuser({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                photoURL: creditial.photoURL,
                displayName: creditial.name,
              })
            );
          });
      })
      .catch((error) => alert(error));

    setCreditial({
      name: "",
      email: "",
      password: "",
      photoURL: "",
    });
  };
  const handleChange = (e) => {
    setCreditial({ ...creditial, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-5">
      <form className="row g-3 needs-validation" noValidate>
        <div className="col-md-4 position-relative">
          <label htmlFor="Fname" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={creditial.name}
            onChange={handleChange}
            required
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 position-relative">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="email">
              <i className="bi bi-envelope"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={creditial.email}
              aria-describedby="EmailPrepend"
              onChange={handleChange}
              required
            />
            <div className="invalid-tooltip">Please enter valid Email.</div>
          </div>
        </div>
        <div className="col-md-4 position-relative">
          <label htmlFor="Password" className="form-label">
            password
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="PasswordPrepend">
              <i className="bi bi-lock-fill"></i>
            </span>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={creditial.password}
              aria-describedby="PasswordPrepend"
              onChange={handleChange}
              required
            />
            <div className="invalid-tooltip">Please enter valid Password.</div>
          </div>
        </div>
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltipUsername" className="form-label">
            PhotoURL
          </label>
          <div className="input-group has-validation">
            <span
              className="input-group-text"
              id="validationTooltipUsernamePrepend"
            >
              <i className="bi bi-lock-fill"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="photoURL"
              name="photoURL"
              value={creditial.photoURL}
              onChange={handleChange}
              aria-describedby="validationTooltipUsernamePrepend"
              required
            />
            <div className="invalid-tooltip">Please enter PhotoURL</div>
          </div>
        </div>

        <div className="col-12">
          <button
            onClick={handleClick}
            className="btn btn-primary"
            type="submit"
          >
            Submit form
          </button>
        </div>
      </form>
      <p className="text-center mt-3 mb-3">
        If you have account <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
