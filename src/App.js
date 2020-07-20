import React from 'react';
import ProductTable from './component/ProductTable.js';
import './App.css';
import PropTypes from 'prop-types';

function App(props) {
  let Products = [{
    name: "Radhouani Mohaned",
    price: "1.500.000$",
    category: {
      Electronics: "Electronics",
      Clothes: "Clothes",
    }

  },
  {
    name: "KArim ",
    price: "100.000$",
    category: {
      Electronics: "Electronics",
      Clothes: "Clothes",
    }

  }
  ];

  return (

    <div className="App">

      <h1>hello</h1>



      {Products.map(Product => <table>
        <tr>
          <td> {Product.name}</td>
          <td>{Product.price}</td>
          <td>{Product.category.Clothes} </td>
        </tr>
      </table>)}



      {/* 
      <table>
        <tr>
          <td> Name :<ProductTable name="Radhouani Mohaned" /> </td>
          <td>Price : <ProductTable price="1.500.000$" /> </td>
          <td> Categorie : <ProductTable category="Electronics" /> </td>
        </tr>
        <tr>
          <td> <ProductTable name="Karim" /> </td>
          <td><ProductTable price="7.500.000$" /> </td>
          <td><ProductTable category="Clothes" /> </td>
        </tr>
        <tr>
          <td> <ProductTable name="Mourad" /> </td>
          <td><ProductTable price="1.500.000$" /> </td>
          <td><ProductTable category="Electronics" /> </td>

        </tr>
      </table> */}

    </div>
  );
}
App.propTypes = {
  name: PropTypes.string,

  price: PropTypes.string,

  category: PropTypes.string
};
export default App;
