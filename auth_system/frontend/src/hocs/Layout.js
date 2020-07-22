import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { checkAuthenticated, load_user } from '../actions/auth'

// components
import Navbar from '../components/Navbar'


const Layout = (props) =>{
    // runs after component has been mounted. Helps keep you logged in after refresh
    useEffect(() => {
        props.checkAuthenticated();
        props.load_user()
    }, [])

    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

// No need for mapStateToProps since i only need the func and not there states
export default connect(null, { checkAuthenticated, load_user })(Layout);