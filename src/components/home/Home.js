import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom';

const Home = () => {
    return (

        <div class="container">

            <div class="header-bar">
                <h1 class="logo">C</h1>
                <ul class="slider-menu">
                    <Link class="li" to= '/Clients'>Clients</Link>
                    <Link class="li" to= '/Products'>Products</Link>
                    <Link class="li" to= '/Invoice'>Invoice</Link>
                    <Link class="li" to= '/Sales'>Sales</Link>
                </ul>
            </div>



        </div>
    )
}

export default Home
