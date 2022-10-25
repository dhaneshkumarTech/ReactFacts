function HeaderComponent(){
    return (
        <header>
            <nav className = "nav"> 
                <img src="images/react_logo.png" className = "logo"/>
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

function MainComponent(){
    return (
        <div className = "main-div">
            <h1> Fun Fact About React</h1>
        <ul>
            <li>React was first released in 2013</li>
            <li>React is a JavaScript library</li>
            <li>React is a front-end library</li>
            <li>React is a library for building user interfaces</li>
            <li>It is maintained by Facebook</li>
        </ul>
        </div>
    )
}

function FooterComponent(){
    return (
        <footer className = "footer">
            <small>@ 2022 Daani development. All rights reserved </small>
        </footer>
    )
} 
{/** Render the page components with Composable*/}
function Page(){
return (
    <div>
        <HeaderComponent/>
        <MainComponent/>
        <FooterComponent/>
    </div>
)
}

ReactDOM.render(<Page/>, document.getElementById("root"))