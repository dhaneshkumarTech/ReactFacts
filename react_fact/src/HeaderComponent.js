import React from "react"

function HeaderComponent(){
    return (
        <footer>
            <nav className = "nav"> 
                <img src="logo192.png" alt = "React logo should appear"className = "logo"/>
                <ul className = "nav-items">
                    <li>Documentation</li>
                    <li>Download</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </footer>
    )
   
}

export default HeaderComponent