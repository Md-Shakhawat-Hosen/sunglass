import { useContext } from "react";
import { Link, Navigate} from "react-router-dom";
import  { ContextProvider } from "../../AuthContext/AuthContext";


const Register = () => {

    const {user,createUser, userUpdateProfile } = useContext(ContextProvider);


    if (user) {
      return <Navigate to="/products"></Navigate>
    }

    const handleRegisterClick = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name,email,password);

         createUser(email, password)
           .then((userCredential) => {
             const user = userCredential.user;

             userUpdateProfile(name)
             .then(()=>{
              console.log('successfully upadate profile')
             })
             .catch(()=>{
               console.log('not successfully update profile')
             })

             console.log("successful register", user);
           })
           .catch((error) => {
             const errorMessage = error.message;
             console.log("something is wrong register", errorMessage);
           });

    }

   
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegisterClick} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
              <div>
                <h1>
                  Are you all ready Register?{" "}
                  <Link
                    to="/login"
                    className="font-bold text-green-500 underline"
                  >
                    Login
                  </Link>
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;