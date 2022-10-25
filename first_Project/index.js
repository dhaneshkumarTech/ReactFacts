function Header(){
    return (
        <header>
            <nav> 
                <img src="react_logo.png" width= "40px"/>
            </nav>
        </header>
    )
}

function Footer(){
    return (
        <footer>
            <small>@ 2022 Daani development. All rights reserved </small>
        </footer>
    )
}
function Page(){
return (
    <div>
        {/** Header component with Composable Concept */}
        <Header/>
        <h1> Fun Fact About React</h1>
        <ul>
            <li>React was first released in 2013</li>
            <li>React is a JavaScript library</li>
            <li>React is a front-end library</li>
            <li>React is a library for building user interfaces</li>
            <li>It is maintained by Facebook</li>
        </ul>
        {/** Footer component with Composable Concept */}
        <Footer/>
</div>
)
}
ReactDOM.render(<Page />, document.getElementById("root"));