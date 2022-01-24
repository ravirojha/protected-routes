import {Route, Navigate} from "react-router-dom";
import {FC, useEffect, useState} from "react";
import Loader from "./Loader";
import ForbiddenAccess from "./ForbiddenAccess";
import * as React from "react";
import UserService from "../service/user-service";

// role is all allowed roles of user, for which this path can be rendered
// if no role is passed, then this route can be rendered for all the roles

interface  IProps {
    role?: string[];
    element: JSX.Element
}

const Auth: FC<IProps> = ({role = [], element}) => {
    const [loggedInUser, setLoggedInUser] = useState<any>({});
    const [spinning, setSpinning] = useState<any>(true);

    if (spinning) return <Loader/>

    /**
     Case 1, If no role is passed, then all the logged In user can access this path
     Example: role=[] or role=undefined
     Case 2, If role is passed, only loggedIn user whose role is defined in passed roles array can access this path
     Example role=['role1', 'role2', 'role3'] an loggedInUser.role === 'role1'
     */


    /**
     * Case 3, if roles array does not contain the role of logged in user, show Forbidden Access component
     * Example role=['role1', 'role2', 'role3'] an loggedInUser.role === 'role4'
     */


    /**
     * Redirect to Login page if unauthorised
     */
    return <Navigate to="/login" replace={true}/>

}

export default Auth;