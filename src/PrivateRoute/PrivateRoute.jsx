import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ContextProvider } from "../AuthContext/AuthContext";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(ContextProvider)
    
    if (user) {
        return children;
    }
    
    if (loading) {
        return (
          <div className="h-screen w-full flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>;
          </div>
        );
    }

    return <Navigate to="/"></Navigate>
   
};

PrivateRoute.propTypes={
    children: PropTypes.node
}
export default PrivateRoute;