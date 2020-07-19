import React, { Component } from 'react'

function ProductTable(props) {
    
    return (
        <div>

            <td><h1>{props.name}&nbsp;&nbsp;</h1></td>
            <td><h1>{props.price}&nbsp;&nbsp; </h1></td>
            <td><h1>{props.category}</h1></td>



        </div>


    )
}


export default ProductTable;
