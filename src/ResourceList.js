import React, { Component } from "react"
import Settings from "./Settings"
import DetailCard from "./DetailCard";

const ResourceList = (resource, addlInfo) => {
    return class extends Component {
        state = { data: [] }

        componentDidMount () {
            fetch(`${Settings.remoteURL}/${resource}`)
            .then(e => e.json())
            .then(data => this.setState({ data: data }))
        }

        render() {
            return (
                <React.Fragment>
                {
                    this.state.data.map(item =>
                        <DetailCard id={item.id}
                            key={item.id}
                            name={item.name}
                            addlInfo={item[addlInfo]}
                            resource={resource} />
                    )
                }
                </React.Fragment>
            )
        }
    }
}

export default ResourceList
