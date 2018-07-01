import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"


const Employee = ({ employee, children }) => {
    return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                    {children}
                </h5>
                {
                    <Link className="card-link"
                        to={{
                            pathname: `/employees/${employee.id}`,
                            state: { employee: employee }
                        }}>
                        Details
                    </Link>
                }
            </div>
        </div>
    )
}

Employee.propTypes = {
    employee: PropTypes.object
}

export default Employee
