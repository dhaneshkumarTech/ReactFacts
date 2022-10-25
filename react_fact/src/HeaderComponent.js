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
                    <a href="https://reactjs.org/docs/getting-started.html">
                        <li>Documentation</li>
                    </a>
                    <a href="https://reactjs.org/tutorial/tutorial.html">
                        <li>Tutorial</li>
                    </a>
                    <a href="https://reactjs.org/community/support.html">
                        <li>About</li>
                    </a>
                    <a href="https://github.com/facebook/react/">
                        <li>GitHub</li>
                    </a>
                </ul>
            </nav>
        </footer>
    )
   
}

export default HeaderComponent