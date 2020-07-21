import React from 'react'

// components
import Navbar from '../components/Navbar'

const Layout = (props) => {
    return (
      <div>
        <Navbar />
        {props.children}
        {/* '{props.children}' refers to anything within the layout tags in App.js */}
      </div>
    );
}

export default Layout