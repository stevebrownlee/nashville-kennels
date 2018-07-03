import React, { Component } from "react"
import DetailCard from "./DetailCard";


export default class EmployeeList extends Component {
    state = { employees: [] }

    componentDidMount () {
        fetch(`${Settings.remoteURL}/employees`)
        .then(e => e.json())
        .then(employees => this.setState({ employees: employees }))
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.employees.map(employee =>
                        <DetailCard id={employee.id}
                                    key={employee.id}
                                    name={employee.name}
                                    resource="employees" />
                    )
                }
            </React.Fragment>
        )
    }
}
