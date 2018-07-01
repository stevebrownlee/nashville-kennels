import { Route } from 'react-router-dom'
import React, { Component } from "react"
import Login from './Login'
import SearchResults from './SearchResults'
import AuthRoute from './AuthRoute'
import ResourceList from './ResourceList'
import DetailAuthRoute from './DetailAuthRoute';


export default class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <AuthRoute path="/" Destination={ResourceList("locations")} />
                <DetailAuthRoute path="/locations/:locationId" resource="locations" />

                <AuthRoute path="/animals" Destination={ResourceList("animals", "breed")} />
                <DetailAuthRoute path="/animals/:animalId" resource="animals" />

                <AuthRoute path="/employees" Destination={ResourceList("employees")} />
                <DetailAuthRoute path="/employees/:employeeId" resource="employees" />

                <Route path="/login" component={Login} />
                <AuthRoute path="/search" Destination={SearchResults} />
            </React.Fragment>
        )
    }
}
