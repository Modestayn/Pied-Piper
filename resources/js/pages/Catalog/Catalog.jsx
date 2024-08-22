// src/components/Catalog/Catalog.jsx
import React, {useEffect, useState} from 'react';
import {Header, ProductCard} from '../../components/index.js';
import './Catalog.css';
import {useCart} from '../../context/CartContext';

// let products = [
// 	{
// 		id: 1,
// 		image: '/assets/img/bg.jpg',
// 		title: 'Product 1',
// 		description: 'Description of Product 1',
// 		price: 9.99,
// 	},
// 	{
// 		id: 2,
// 		image: '/assets/img/bg.jpg',
// 		title: 'Product 2',
// 		description: 'Description of Product 2',
// 		price: 9.99,
// 	},
// ];



export const Catalog = () => {
    const {cartItems} = useCart();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("/catalog", {
          method: "post"
      })
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setProducts(result.products);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

  console.log(products)


    return (
        <>
            <Header/>
            <div className='catalog'>
                <h2 className='catalog-title'>Product Catalog</h2>
                <div className='catalog-grid'>
                    {products.map((product) => (
                        <div className='catalog-item' key={product.id}>
                            <ProductCard product={product}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
