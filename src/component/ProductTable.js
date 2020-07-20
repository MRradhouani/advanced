import React, { Component } from 'react'

function ProductTable(props) {
    
    return (
        <div>

            {props.Products.name}&nbsp;&nbsp;
            {props.Products.price}&nbsp;&nbsp;
            {props.Products.category}



        </div>


    )
}


export default ProductTable;
