import React, { Component } from "react"
import Animal from "./Animal";
import Employee from "./Employee";


export default class SearchResults extends Component {

    displayLocations = () => {
        if (this.props.location.state.locations.length) {
            return (
            <React.Fragment>
                <h3>Matching Locations</h3>
                <ul>
                {
                    this.props.location.state.locations.map(loc => <li key={loc.id}>{loc.name}</li>)
                }
                </ul>
            </React.Fragment>
            )
        }
    }

    displayEmployees = () => {
        if (this.props.location.state.employees.length) {
            return (
            <React.Fragment>
                <h3>Matching Employees</h3>
                <ul>
                {
                    this.props.location.state.employees.map(item => (
                        <Employee key={item.id} employee={item}>
                            {item.name}
                        </Employee>
                    ))
                }
                </ul>
            </React.Fragment>
            )
        }
    }

    displayAnimals = () => {
        if (this.props.location.state.animals.length) {
            return (
            <React.Fragment>
                <h3>Matching Animals</h3>
                <ul>
                {
                    this.props.location.state.animals.map(item => <Animal animal={item} key={item.id}/>)
                }
                </ul>
            </React.Fragment>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.displayLocations()}
                {this.displayEmployees()}
                {this.displayAnimals()}
            </React.Fragment>
        )
    }
}
