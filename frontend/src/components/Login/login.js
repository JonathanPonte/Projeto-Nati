import React, { Component } from 'react'
import './login.css';
import { Button, Form, FormGroup, Label, Input } from 'react-bootstrap'
import axios from "axios"

class Login extends Component {



    constructor() {
        super()

        var tipo = 0;

        this.state = {
            email: '',
            senha: ''
        }

        this.usuario = {
            id: '',
            email: '',
            senha: '',
            nome: '',
            tipo: ''
        }

    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)

        axios.post('http://localhost:8080/api/login', this.state)
            .then(response => {
                console.log(response)

                localStorage.setItem('usuario', response.data)

                if (response.data.tipo == 1) {
                    this.props.history.push('/adm')
                }
                if (response.data.tipo == 2) {
                    this.props.history.push('/coordenador')
                }
                if (response.data.tipo == 3) {
                    this.props.history.push('/alunoprofessor')
                }

            })
            .catch(erro => {
                console.log(erro)
            })

    }

    render() {
        const { email, senha } = this.state

        return (
            <Form onSubmit={this.submitHandler} className="login-form" >
                <h1>Login</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="email" value={email} onChange={this.changeHandler} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="senha" type="password" placeholder="Password" value={senha} onChange={this.changeHandler} />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>


            </Form>
        )
    }

}


export default Login
