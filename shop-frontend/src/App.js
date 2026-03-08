import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">🛒 Shop Monolithic</h1>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="card">

            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />

            <h3>{product.name}</h3>
            <p className="price">{product.price} VND</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
