import React, { Component } from "react"
import DetailCard from "./DetailCard";


export default class LocationList extends Component {
    state = { locations: [] }

    componentDidMount () {
        fetch(`${Settings.remoteURL}/locations`)
        .then(e => e.json())
        .then(locations => this.setState({ locations: locations }))
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.locations.map(location =>
                        <DetailCard id={location.id}
                            key={location.id}
                            name={location.name}
                            resource="locations" />
                    )
                }
            </React.Fragment>
        )
    }
}
