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
                            state: { animal: props.animal }
                        }}>
                        Details
                    </Link>
                }
            </div>
        </div>
    )
}
