// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (product) => {
		setCartItems((prevItems) => {
			const itemIndex = prevItems.findIndex((item) => item.id === product.id);
			if (itemIndex >= 0) {
				const newItems = [...prevItems];
				newItems[itemIndex].quantity += 1;
				return newItems;
			} else {
				return [...prevItems, { ...product, quantity: 1 }];
			}
		});
	};

	const removeFromCart = (id) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};

	const value = {
		cartItems,
		addToCart,
		removeFromCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
