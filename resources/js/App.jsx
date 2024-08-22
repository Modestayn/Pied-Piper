// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import {About, Cart, Catalog, Contact, Footer, RegisterForm, LoginForm, Header, Slider} from './components';

function App() {
	const location = useLocation();
	const showFooter = ['/', '/about', '/contact'].includes(location.pathname);
    const showSlider = ['/'].includes(location.pathname);

	const routes = [
		{ path: '/', element: <Header/> },
		{ path: '/about', element: <About /> },
		{ path: '/contact', element: <Contact /> },
		{ path: '/catalog', element: <Catalog /> },
		{ path: '/cart', element: <Cart /> },
		{ path: '/login', element: <LoginForm /> },
		{ path: '/register', element: <RegisterForm /> },
	];

	return (
		<>
			<Routes>
				{routes.map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Routes>
            {showSlider && <Slider />}
			{showFooter && <Footer />}
		</>
	);
}

export default App;
