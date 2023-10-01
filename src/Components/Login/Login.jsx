import { useContext } from "react";
import { Link, Navigate} from "react-router-dom";
import { ContextProvider } from "../../AuthContext/AuthContext";

import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const { user, singInEmail, signInGoogle } = useContext(ContextProvider);

  

    if(user) {
      return <Navigate to='/'></Navigate>
    }

    const handleClickLogin = e =>{
        e.preventDefault();
       
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        singInEmail(email, password)
          .then((userCredential) => {
            const user = userCredential.user;

            console.log("successful log in", user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log("something is wrong for log in", errorMessage);
          });

    }

    const handleClickGoogle = () =>{
       signInGoogle()
         .then((result) => {
           
           const user = result.user;
           console.log('successfully login with google',user)
         })
         .catch((error) => {
           
           const errorMessage = error.message;

           console.log('not successfull login with google',errorMessage)
           
          
         });
    }



    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleClickLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <div>
                <h1>Are you new user? <Link to="/register" className="font-bold text-green-500 underline">Register</Link></h1>

                <div>
                   <FcGoogle onClick={handleClickGoogle} className="text-4xl"></FcGoogle>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;