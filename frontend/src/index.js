import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Curso from './components/Curso/curso';
import Disciplina from './components/Disciplina/disciplina';
import Login from './components/Login/login'
import Semestre from './components/Semestre/semestre'
import Usuario from './components/Usuario/usuario'
import Adm from './components/Adm/adm'
import Coordenador from './components/Coordenador/coordenador'
import AlunoProfessor from './components/Aluno-Professor/aluno-professor'
import 'bootstrap/dist/css/bootstrap.css'

const routing = (
    <Router>
      <div>
        {/* <Route exact path="/" component={App} /> */}
        <Route exact path="/" component={Login} />
        <Route path="/adm" component={Adm} />
        <Route path="/alunoprofesor" component={Coordenador} />
        <Route path="/coordenador" component={AlunoProfessor} />
      </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

