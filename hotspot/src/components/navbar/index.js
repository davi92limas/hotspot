import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

function Navbar(){
//log_out
     const dispatch = useDispatch();

    return(
        <nav className="navbar navbar-expand-lg">
            <span className="imgHot2"></span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars text-white"></i>
                  
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item"><Link className="nav-link ml-2" to="/">Home</Link></li> 
                    {/* <li className="nav-item"><Link className="nav-link" to="/novousuario">Cadastrar</Link></li> 
                    <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>  */}

                    {           
                        useSelector(state => state.usuarioLogado) > 0 ?                  
                    <>                        
                        <li className="nav-item"><Link className="nav-link" to="/hotspotcadastro">Criar hotspot</Link></li> 
                        <li className="nav-item"><Link className="nav-link" to="/meushotspot">Lista hotspots</Link></li> 
                        <li className="nav-item"><Link className="nav-link" onClick={() => dispatch({type: 'LOG_OUT'})   }>Sair</Link></li> 
                    </>
                    :
                    <>
                    <li className="nav-item"><Link className="nav-link" to="/novousuario">Cadastrar</Link></li> 
                    <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li> 
                    </>
                    }
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;