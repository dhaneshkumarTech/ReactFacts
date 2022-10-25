import React from "react"

function HeaderComponent(){
    return (
        <footer>
            <nav className = "nav"> 
                <div className="nav-div">
                    <img src="logo192.png" alt = "React logo should appear"className = "logo"/>
                    <h3>ReactFacts</h3>
                </div>
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