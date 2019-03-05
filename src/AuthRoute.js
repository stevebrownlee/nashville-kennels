import React from "react"
import { Route } from "react-router-dom"
import Login from "./Login"

const isAuthenticated = () =>
    localStorage.getItem("credentials") !== null ||
    sessionStorage.getItem("credentials") !== null

/*
    Using destructuring and rest operator to pull out
    specific props for use in this component, but collecting
    all other ones to be passed down to target component
*/
const AuthRoute = ({Destination, path, ...srcProps}) =>
    <Route exact path={path} render={props => {
        if (isAuthenticated()) {
            /*
                Pass routing `props` and parent component `srcProps`
                down to target component
            */
            return <Destination {...props} {...srcProps} />
        } else {
            return <Login />
        }
    }} />


export default AuthRoute
