import React from 'react'
import './Clients.css';


const Clients = () => {
    return (


        <div class="Principal">
            <h1>Lista de usuarios</h1>
            <form class="Form">
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" placeholder="Nombres" />
                <label for="apellidos">Apellidos</label>
                <input type="text" name="apellidos" id="apellidos" placeholder="Apellidos" />
                <label for="apellidos">Email</label>
                <input type="email" name="email" id="email" placeholder="email" required />
                <input type="submit" name="enviar" value="Guardar" />
            </form>
        </div >
    )
}

export default Clients
