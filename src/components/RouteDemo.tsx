import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Auth from "./Auth";

const RouteDemo = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth element={<Home/>}/>}/>
                <Route path="/dashboard" element={<Auth role={['admin']} element={<Dashboard/>}/>}/>
                <Route path="/home" element={<Auth element={<Home/>}/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>,
    </>
}

export default RouteDemo;