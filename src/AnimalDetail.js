import React from "react"
import { Link } from "react-router-dom"


export default props => {
    return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                    {props.animal.name}
                </h5>
                {
                    <Link className="card-link"
                        to={{
                            pathname: `/animals/${props.animal.id}`,
                            state: { animal: animal }
                        }}>
                        Details
                    </Link>
                }
            </div>
        </div>
    )
}


// export default props => {
//     let animal = {}
//     let showLink = false

//     if (props.hasOwnProperty("animal")) {
//         animal = props.animal
//         showLink = true
//     } else {
//         animal = props.location.state.animal
//     }

//     return (
//         <div className="card" style={{width: `18rem`}}>
//             <div className="card-body">
//                 <h5 className="card-title">
//                     {animal.name}
//                 </h5>
//                 <p className="card-text">{animal.breed}</p>
//                 {
//                     showLink
//                         ? <Link className="card-link"
//                             to={{
//                                 pathname: `/animals/${animal.id}`,
//                                 state: { animal: animal }
//                             }}>
//                             Details
//                         </Link>
//                         : <div></div>
//                 }
//             </div>
//         </div>
//     )
// }
