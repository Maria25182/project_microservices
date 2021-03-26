import React from 'react'
import './Clients.css';


const Clients = () => {
    return (
        <div class="Principal">
            <form class= "Form">
                <label>
                    Name:
    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Clients
