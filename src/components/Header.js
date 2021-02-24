import React from 'react'
import './Header.css'

function Header() {

    return (
        <div id="navbar" className="navbar">
            <div className="hamburger">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>
            <h1 className="logo">
                <a href="https://www.google.com/">MUMBLE</a>
            </h1>
            {/* {user ? <div className="button"><button onClick={handleAuthenticaton} className="logout">Logout</button></div>: ""} */}
            <div id="modeToggle" className="modeToggle"><i className="far fa-moon"></i></div>
            <h4 className="logo_m">
                <a href="https://mummblly.herokuapp.com/"> ❤ (̶◉͛‿◉̶) ❤      </a>
            </h4>
        </div>
    )
}

export default Header
