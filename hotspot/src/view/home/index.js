import React, { useState, useEffect } from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/';

import { useSelector } from 'react-redux';
// import firebase from '../../config/firebase';
// import hotspotCard from '../../components/hotspot-card/'



function Home(){
    return (
        <>
        <Navbar/>

        <h1>{useSelector(state => state.usuarioEmail)}</h1>
        <h1>Logado: {useSelector(state => state.usuarioLogado)}</h1>



       
        </>

        
    )
    
}

export default Home;










