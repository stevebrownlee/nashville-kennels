import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"


const Location = ({ location }) => {
    return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                    {location.name}
                </h5>
                {
                    <Link className="card-link"
                        to={{
                            pathname: `/locations/${location.id}`,
                            state: { location: location }
                        }}>
                        Details
                    </Link>
                }
            </div>
        </div>
    )
}

Location.propTypes = {
    location: PropTypes.object
}

export default Location
