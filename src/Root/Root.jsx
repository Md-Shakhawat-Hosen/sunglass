import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;