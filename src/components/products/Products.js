import React from 'react'
import './Products.css';
const Products = () => {
    return (
        <div className="form-container">
            
        <div className="form-box">
            <div className="form-product">
                <form className="form-product-btn">
                    < label htmlFor="productname">Product name</label><br/>
                    <input name="productname" id="productname" type="text" placeholder="Write the name" /><br/>
                
                    <label htmlFor="productprice">Price</label><br/>
                    <input name="productprice" id="productprice" type="text" placeholder="Write the price" /><br/>

                    <input className='btn_enviar' name="productsubmit" id="productsubmit" type="submit" value="Enviar" /><br/>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Products
