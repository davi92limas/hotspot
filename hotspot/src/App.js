import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store/';
import {Provider} from 'react-redux';

/*PÁGINAS*/
import Login from './view/login/';
import NovoUsuario from './view/usuario-novo/';
import Home from './view/home/';
import {isModuleDeclaration} from '@babel/types';
import UsuarioRecuperarSenha from './view/usuario-recuperar-senha/';
import HotspotCadastro from './view/hotspot-cadastro/';
// import hotspotDetalhes from './view/hotspot-detalhes/';
function App() {
  return (
     <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Router>
          
        <Route exact path='/' component={Home} />
        {/* <Route path='/hotspots/:parametro' component={Home} /> */}
        <Route exact path='/novousuario' component={NovoUsuario} />
        <Route exact path='/login' component={Login} /> 
        <Route exact path='/usuariorecuperarsenha' component={UsuarioRecuperarSenha} />
        <Route exact path='/hotspotcadastro' component={HotspotCadastro} />
         {/*
        <Route path='/hotspotdetalhes/:id' component={hotspotDetalhes} /> */}
        {/* <Route path='/editarhotspot/:id' component={hotspotCadastro} /> */}
      </Router>
     {/* </PersistGate> */}
     </Provider>
  );
}

export default App;
