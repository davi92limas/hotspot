import React, { useState, useEffect } from 'react';
import './hotspot-card.css';
import {Link} from 'react-router-dom';
// import firebase from '../../config/firebase';


function hotspotCard(){

    return(
        
        <div className="align-tems-center">
            <div className="container  ">
                <div>
                <h1 className="imgHome centerTex">hotspot</h1>  
                </div>
                <div>
                    <h2 className="centerTex">Benvindo a hotspot</h2>
                    <h2 className="centerTex">Loguese e crie suas lista de hotspot</h2>
                </div>    
            </div> 
        </div>
    )
}

export default hotspotCard;