import React from "react"
import { Route, Redirect } from "react-router-dom"

export const PrivateRoute = ({ component, ...rest }) => {
    const token = window.localStorage.getItem("token")

    const Component = component

    return (
        <Route
            {...rest}
            render={(props) => {
                if (token) {
                    return <Component {...props} />
                } else {
                    return <Redirect to="/" />
                }
            }}
        />
    )
}