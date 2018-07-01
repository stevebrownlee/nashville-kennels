import React, { Component } from "react"
import Animal from "./Animal"


export default class AnimalList extends Component {
    state = {
        animals: [
            { id: 1, name: "Doodles", breed: "German Shepherd" },
            { id: 2, name: "Jack", breed: "Cocker Spaniel" },
            { id: 3, name: "Angus", breed: "Dalmatian" },
            { id: 4, name: "Henley", breed: "Carolina Retriever" },
            { id: 5, name: "Derkins", breed: "Pug" },
            { id: 6, name: "Checkers", breed: "Bulldog" }
        ]
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.animals.map(animal =>
                        <Animal key={animal.id} animal={animal}/>
                    )
                }
            </React.Fragment>
        )
    }
}


/*
this.state.animals.map(animal =>
    <DetailCard id={animal.id}
                name={animal.name}
                resource="animals"
                addlInfo={animal.breed} />
)
*/