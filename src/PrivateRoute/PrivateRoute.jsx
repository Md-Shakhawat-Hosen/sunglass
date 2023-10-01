import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ContextProvider } from "../AuthContext/AuthContext";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {

    const {user} = useContext(ContextProvider)
    
    if (user) {
        return children;
    }
     

    return <Navigate to="/"></Navigate>
   
};

PrivateRoute.propTypes={
    children: PropTypes.node
}
export default PrivateRoute;