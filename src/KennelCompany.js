import React, { Component } from "react"
import { Route } from "react-router-dom"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import "bootstrap/dist/css/bootstrap.min.css"


export default class KennelCompany extends Component {
    render() {
        return (
            <React.Fragment>
                <Route render={history => (
                    <NavBar { ...history } />
                )} />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}
