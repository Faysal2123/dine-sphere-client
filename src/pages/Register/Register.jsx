import Lottie from 'lottie-web';
import React, { useContext, useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Animation2 from '../../../public/lottie/Animation2.json';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate=useNavigate()
    const{createUser,updateUserProfile}=useContext(AuthContext)
    const animationContainer = useRef(null);  
    const handleRegister = async (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;

      try {
          const userCredential = await createUser(email, password);
          await updateUserProfile(name); 
          toast.success("Registration successful!");
          setTimeout(()=>{
            navigate('/')
          },1000)
         
          console.log("User Created:", userCredential.user);
      } catch (error) {
          toast.error(error.message);
          console.error("Error:", error);
      }
  };
   useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      animationData: Animation2,
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
              <h1 className="text-4xl font-bold text-center">Register now!</h1>
              <form className="card-body" onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="fieldset-label">Name</label>
                  <input name="name" type="text" className="input" placeholder="Name" />
                  <label className="fieldset-label">Email</label>
                  <input name="email" type="email" className="input" placeholder="Email" />
                  <label className="fieldset-label">Password</label>
                  <input name="password" type="password" className="input" placeholder="Password" />
                  
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                <div>
            <p>
              Already have an account{" "}
              <Link to="/login" className="font-semibold text-blue-600">
                Login
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

export default Register;