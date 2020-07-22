import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="Container">
            <div className="jumbotron">
                <h1 className="display-4">Welcome to Auth System</h1>
                <p className="lead">This is a incredible sh!t!</p>
                <hr className="my-4" />
                <p>Click in the login btn</p>
                <Link className="btn btn-primary btn-lg" to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default Home;