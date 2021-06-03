import React from 'react';
import './Logout.css';
import logoutPic from '../../assets/logoutPic.png';




const Logout = (props) => {
    return (
        <div>
            <img id="logout" 
            src={logoutPic} 
            alt="powerButton" 
            onClick={props.clearSession}/>
        </div>
    )
}

export default Logout;