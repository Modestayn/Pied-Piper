// src/components/Header/Header.jsx
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React from 'react';
import { useCart } from '../../context/CartContext';

const navItems = [
	{ path: '/', label: 'Home' },
	{ path: '/about', label: 'About' },
	{ path: '/contact', label: 'Contact' },
	{ path: '/catalog', label: 'Catalog' },
];

export const Header = () => {
	const { cartItems } = useCart();

	return (
		<div>
			<div className='wrapper'>
				<header className='header'>
					<svg
						className='waves'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						viewBox='0 24 150 28'
						preserveAspectRatio='none'
						shapeRendering='auto'
					>
						<defs>
							<path
								id='gentle-wave'
								d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
							/>
						</defs>
						<g className='parallax'>
							<use xlinkHref='#gentle-wave' x='48' y='0' fill='rgba(255,255,255,0.7' />
							<use xlinkHref='#gentle-wave' x='48' y='3' fill='rgba(255,255,255,0.5)' />
							<use xlinkHref='#gentle-wave' x='48' y='5' fill='rgba(255,255,255,0.3)' />
							<use xlinkHref='#gentle-wave' x='48' y='7' fill='#fff' />
						</g>
					</svg>
					<nav className='nav container'>
						<a href='#' className='nav__logo'>
							<img
								src='/assets/img/ogo-removebg-preview-removebg-preview.png'
								alt='Logo'
								className='logo__img'
							/>
						</a>
						<ul className='nav__menu'>
							{navItems.map((item, index) => (
								<li className='menu__item' key={index}>
									<Link to={item.path} className='item__link'>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
						<div className='nav__info'>
							<div className='info__shop'>
								<Link to='/login' className='shop_link'>
									<FontAwesomeIcon icon={faUser} style={{ color: '#deddda'}} />
								</Link>
								<Link to='/cart' className='shop__link'>
									<FontAwesomeIcon icon={faCartShopping} style={{ color: '#deddda' }} />
								</Link>
								<span className='shop__score'>{cartItems.length}</span>
							</div>
						</div>
					</nav>
					<div className='header__info'>
						<h1 className='info__title'>Pied Piper</h1>
						<span className='info__subTitle'>electronics store</span>
					</div>
				</header>
			</div>
		</div>
	);
};
