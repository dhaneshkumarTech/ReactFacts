import React from "react"

function HeaderComponent(){
    return (
        <header>
            <nav className = "nav"> 
                <img src="logo192.png" className = "logo"/>
                <ul className = "nav-items">
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent