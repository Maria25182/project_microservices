import React from 'react'
import './Clients.css';


const Clients = () => {
    return (


        <div class="Principal">
            <h1>Lista de usuarios</h1>
            <div class= "content_2">
                <p>Lorem ipsum d</p>
            </div>
            <form class="Form">
                <div>
                    <label for="nombre">Nombre</label>
                    <br />
                    <input type="text" name="nombre" id="nombre" placeholder="Nombres" />
                </div>
                <div>
                    <label for="apellidos">Apellidos</label>
                    <br />
                    <input type="text" name="apellidos" id="apellidos" placeholder="Apellidos" />
                </div>
                <div>
                    <label for="apellidos">Email</label>
                    <br />
                    <input type="email" name="email" id="email" placeholder="email" required />
                </div>
                <br />
                <input type="submit" name="enviar" value="Guardar" />

             
            </form>
           
        </div >
    )
}

export default Clients
