import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './normalize.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('app')).render(
	<React.StrictMode>
		<BrowserRouter>
			<CartProvider>
				<App />
			</CartProvider>
		</BrowserRouter>
	</React.StrictMode>
);
