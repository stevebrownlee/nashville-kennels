import React from "react"
import { Route } from "react-router-dom"
import Login from "./Login"
import DetailCard from "./DetailCard";

const isAuthenticated = () =>
    localStorage.getItem("credentials") !== null ||
    sessionStorage.getItem("credentials") !== null

const DetailAuthRoute = ({ path, resource}) =>
    <Route exact path={path} render={props => {
        if (isAuthenticated()) {
            return <DetailCard {...props.location.state} resource={resource} />
        } else {
            return <Login />
        }
    }} />


export default DetailAuthRoute
