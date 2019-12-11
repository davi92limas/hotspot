import React, { useState, useEffect } from 'react';
import './list.css';
import {Link} from 'react-router-dom';
// import firebase from '../../config/firebase';


function list({key, titulo}){

    return(
        
        <div className="col-md-12 col-sm-12 ">
            <div className="container">
                <div>
                    <div class="list-group  align-tems-center">
                        {/* <a href="#" class="list-group-item list-group-item-action active">
                        Lista de hotspot
                        </a> */}
                        <a href="#" class="list-group-item list-group-item-action">{titulo}</a>
                    </div> 
                </div>    
            </div> 
        </div>
    )
}

export default list;