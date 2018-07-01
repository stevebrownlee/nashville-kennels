import React from "react"
import { Link } from "react-router-dom"


const DetailCard = ({id, name, resource, addlInfo}) => {
    return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                    {name}
                </h5>
                <p className="card-text">{addlInfo ? addlInfo : ""}</p>
                {
                    <Link className="card-link"
                        to={{
                            pathname: `/${resource}/${id}`,
                            state: {
                                id: id,
                                name: name,
                                resource: resource,
                                addlInfo: addlInfo
                            }
                        }}>
                        Details
                    </Link>
                }
            </div>
        </div>
    )
}

export default DetailCard
