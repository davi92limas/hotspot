import React, { useState, useEffect } from 'react';
import './meus.css';
import {Link, Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import List from '../../components/list-hotspot/';
// import HotspotCard from '../../components/hotspot-card/'
// import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';




function Meus(props){

    const [hotspots, setHotspots] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    const [excluido, setExcluido] = useState(0);
    let lista = [];
    
   

    // function remover(){
    //     firebase.firestore().collection('hotspots').doc(props.match.params.id).delete().then(() => {
    //         setExcluido(1);
    //     })
    // }

    useEffect(() => {
            firebase.firestore().collection('hotspots').get().then(async (resultado) => {
                await resultado.docs.forEach(doc => {  
                    // if(doc.data().titulo.indexOf(pesquisa) >= 0)  
                    // {
                      
                    // }  
                    lista.push({
                        id: doc.id,
                        ...doc.data()
                    })             
               })
               setHotspots(lista);
            })
           });

    return (
        <>
        <Navbar/>
        {excluido ? <Redirect to='/' /> : null}
    <div className="container  ">
                <div>
                    <h1 className="imgHome centerTex">Lista de hotspot</h1>  
                </div>
                {/* <div className="row p-5">
                <input onChange={(e) => setPesquisa(e.target.value)} type="text" className="form-control text-center" placeholder="Pesquisar Lista de hotspots" />
                </div> */}
                   
        <div className="listas">
                <div>
                    <p className="titulo text-center">Lista de hotspot</p>  
                </div>
        {hotspots.map(item => <List key={item.id} id={item.id} titulo={item.nome} />) }
        </div>
        {/* {
             <button onClick={remover} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Remover</button>
                
                } */}

    </div>
        </>      
    )
    
}

export default Meus;