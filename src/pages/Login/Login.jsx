import React, { useContext, useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import animation1 from "/public/lottie/Animation1.json";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const animationContainer = useRef(null);
  const {userLogin}=useContext(AuthContext)
  const[error,setError]=useState(null)
  const location=useLocation()
  const navigate=useNavigate()

  const handleLogin=(e)=>{
    e.preventDefault()
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email
      ,password)
    userLogin(email,password)
    .then((result)=>{
      console.log(result)
      setTimeout(()=>{
        navigate("/")
       
      },1000)
      toast.success("Login success")
    })
  }

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation1,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div
            className="text-center lg:text-left w-3/4 lg:w-1/2 h-[350px] lg:h-full" 
            ref={animationContainer}
          ></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-3">
            <h1 className="text-4xl font-bold text-center">Login now!</h1>
            <form className="card-body" onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              <div>
            <p>
              Don't have an account{" "}
              <Link to="/register" className="font-semibold text-red-600">
                Register
              </Link>
            </p>
          </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Login;
