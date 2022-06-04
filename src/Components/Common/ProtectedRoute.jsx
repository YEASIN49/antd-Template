import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

class ProtectedRoute extends React.PureComponent {
    render() {
        const { isAuthenticated, children, ...restProps } = this.props

        return (
            <Route
                { ...restProps }
            >
                {/* { isAuthenticated ?
                    <React.Fragment> { children } </React.Fragment>
                    :
                    <Redirect to='/login' />
                } */}
            </Route>
        )
    }
}

// Prop Types
ProtectedRoute.propTypes = {
    isAuthenticated: PropTypes.bool
}

ProtectedRoute.defaultProps = {
    isAuthenticated: false
}

export default ProtectedRoute