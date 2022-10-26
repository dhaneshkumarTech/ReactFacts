import React from 'react';

function PersonalInfo(){
    return (
        <div className="profile-div">
            <img src="images/profilepic.jpg" alt="Dhanesh Kumar Profile" className="profile-pic"></img>
            <h2>Dr AllahBux Mahar</h2>
            <h4>General Physician</h4>
            <a href="#"><p>drallahbux.website</p></a>
            <button className="email-btn"><img src='images/gmail-logo.png' alt='Gmail logo'></img>Gmail</button>
            <button className="facebook-btn"><img src='images/facebook-logo.png' alt='Facebook logo'></img>Facebook</button>
        </div>
    )
}

export default PersonalInfo;
