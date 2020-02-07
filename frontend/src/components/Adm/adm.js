import React, { Component } from 'react'

class Adm extends Component {

    constructor() {
        super()

        let usuario = JSON.parse(localStorage.getItem('usuario'))

        this.state = {
            usuario: usuario
        }

        console.log(this.state.usuario.nome)

    }


    render() {
        return (
            <div>
                <label>aqui</label>
            </div>
        )
    }

}


export default Adm