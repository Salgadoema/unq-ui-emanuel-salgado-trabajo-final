import React from 'react';
import { useHistory } from "react-router-dom";


function Rules () {
    let history = useHistory();
    function iraHome() {
        history.push("/");
    }
   
    return (
        <div className="contenedor1">
            
            <button className="btnToHome" type="button" onClick={iraHome}>Back to Home</button>
            <div className="contenedor2">
            <iframe title="reproductor" width="1200" height="800" src={"https://www.youtube.com/embed/3FAnlDUDbLA?autoplay=1&enablejsapi=1"} frameborder="0" allowfullscreen/>
            </div>
        </div>
    );
}

export default Rules;