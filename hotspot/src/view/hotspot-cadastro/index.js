import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'; 
import './hotspot-cadastro.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/';

import firebase from '../../config/firebase';



function HotspotCadastro(props){
    const [nome, setNome] = useState();
    const usuarioEmail = useSelector(state => state.usuarioEmail);
    const [carregando, setCarregando] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [hotspotsAtual, setHotspotsAtual] = useState();    
    const [novoHotspots, setNovoHotspots] = useState();   
   
    
        const db = firebase.firestore();


        useEffect(() => {  
            if(props.match.params.id){                   
                firebase.firestore().collection('hotspots').doc(props.match.params.id).get().then(resultado => {
                    setNome(resultado.data().nome)          
                    setHotspotsAtual(resultado.data().hotspotsAtual)                                                                                                  
        })
    }
    },[carregando])


    function atualizar(){
        setMsgTipo(null);
        setCarregando(1);
    
        if(novoHotspots)    
            db.collection('hotspots').doc(props.match.params.id).update({
                nome: nome               
            }).then(() => {
                setMsgTipo('sucesso');
                setCarregando(0);
            }).catch(erro => {
                setMsgTipo('erro');
                setCarregando(0);
        });
    }

        function cadastrar(){
        setMsgTipo(null);
        setCarregando(1);
        //criaçao do hotspot no firebase
      
            db.collection('hotspots').add({
                nome: nome,
                usuario: usuarioEmail, 
                criacao: new Date()
            }).then(() => {
                setMsgTipo('sucesso');
                setCarregando(0);
            }).catch(erro => {
                setMsgTipo('erro');
                setCarregando(0);
        });
  
}

    return(
        <>
        <Navbar/>
        <div className="container">
        <div className="col-12 mt-5">
            <div className="row">
                <h3 className="mx-auto font-weight-bold">Adicionar novos Hotspot</h3>
            </div>


            <div className="d-flex align-tems-center mx-auto col-12 mt-5">

     
<button type="button" class="btn btn-primary btn-cadastro mx-auto" data-toggle="modal" data-target="#exampleModal">
Novo Hotspot
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Novo Hotspot</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <form>
                            <div className="form-group">
                                <label>Nome do Hotspot:</label>
                                <input onChange={(e) => setNome(e.target.value) } type="text" className="form-control"/>
                            </div> 

                                   <div className="row">               
                {
                    carregando > 0 ? <div class="spinner-border text-danger mx-auto" role="status"><span class="sr-only">Loading...</span></div>
                    : <button onClick={props.match.params.id ? atualizar : cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">{props.match.params.id ? 'Atualizar Evento' : 'ADD Hotspot'}</button>
                }
                </div>        
                        </form>
                            <div className="msg-login text-center mt-2">
                                {msgTipo === 'sucesso' && <span><strong>WoW!</strong> Hotspot Publicado &#128526; </span>}
                                {msgTipo === 'erro' && <span><strong>Ops!</strong> Não foi possível publicar o Hotspot! &#128546; </span>}               
                            </div>
                      
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>   
    </div>
  
    </div>
        </div>
        </div>
        </div>

            
        </div>
        </div>
        </>
    )

}

 export default HotspotCadastro;