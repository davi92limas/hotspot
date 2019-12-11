import React, { useState, useEffect } from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/';
import HotspotCard from '../../components/hotspot-card/'
import { useSelector } from 'react-redux';
// import firebase from '../../config/firebase';




function Home(){
    return (
        <>
        <Navbar/>
        <HotspotCard/>
        </>      
    )    
}

export default Home;










