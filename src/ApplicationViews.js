import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Settings from "./Settings"
import Login from './Login'
import SearchResults from './SearchResults'
import AuthRoute from './AuthRoute'
import ResourceList from './ResourceList'
import AnimalList from './AnimalList'
import DetailAuthRoute from './DetailAuthRoute';
import Animal from './Animal';


export default class ApplicationViews extends Component {
    displayResource = (resource, id) => {
        fetch(`${Settings.remoteURL}/${resource}/${id}`)
            .then(e => e.json())
            .then(data => {
                return <Redirect to={{
                    pathname: `/${resource}/${id}`,
                    state: { [resource]: data }
                }} />
            })
    }

    render() {
        return (
            <React.Context>
                <React.Fragment>
                    <AuthRoute path="/" locations={[{id:1}]} Destination={ResourceList("locations")} />
                    <DetailAuthRoute path="/locations/:locationId" resource="locations" />

                    <AuthRoute path="/animals" Destination={ResourceList("animals", "breed")} />
                    <DetailAuthRoute path="/animals/:animalId" resource="animals" />

                    <AuthRoute path="/employees" Destination={ResourceList("employees")} />
                    <DetailAuthRoute path="/employees/:employeeId" resource="employees" />

                    <Route path="/login" component={Login} />
                    <AuthRoute path="/search" Destination={SearchResults} />
                </React.Fragment>
            </React.Context>
        )
    }
}
