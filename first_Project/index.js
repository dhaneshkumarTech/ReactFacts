import HeaderComponent from "./HeaderComponent"
import MainComponent from "./MainComponent"
import FooterComponent from "./FooterComponent"

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