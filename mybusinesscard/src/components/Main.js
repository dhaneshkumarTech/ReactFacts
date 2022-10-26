import React from "react";

function Main(){
    return (
        <div className="main-component">
            <div className="personal-info">
                <h2>Dhanesh Kumar</h2>
                <h4>Web Application Developer</h4>
                <a href="#"><p>dhaneshkumar.com</p></a>
                <button className="email-btn"><img src='images/gmail-logo.png' alt='Gmail logo'></img>Gmail</button>
                <button className="facebook-btn"><img src='images/facebook-logo.png' alt='Facebook logo'></img>Facebook</button>
            </div>
            <div className="more-info">
                <h3>About</h3>
                <p><small>I am General practitioners and family physician diagnose and treat the diseases, physiological disorders and injuries of patients. I provide primary contact and continuous care toward the management of patients' health. I work in private practice, including group or team practices, hospitals and clinics</small></p>
                <h3>Interests</h3>
                <p><small>I like work activities that have to do with ideas and thinking. I search for facts and figure out solutions to problems mentally. I also have social interests. I like work activities that assist others and promote learning and personal development. I like to communicate with others: to teach, give advice, help, or otherwise be of service to others.</small></p>
                <h3>Hobbies</h3>
                <p><small>I like to read books, watch movies, listen to music, play games, and do puzzles. I also like to spend time with my family and friends. I like to go to the movies, go out to eat, and go shopping. I like to go to the beach, go camping, and go hiking. I like to go to the park, go to the zoo, and go to museums.</small></p>
            </div>
        </div>
    )
}

export default Main;