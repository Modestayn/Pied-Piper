// src/components/ProductCard/ProductCard.jsx
import './ProductCard.css';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {useCart} from '../../context/CartContext';

export const ProductCard = ({product}) => {
	const {image, title, description, price} = product;
	const [count, setCount] = useState(0);
	const {addToCart} = useCart();

	const handleAddToCart = () => {
		setCount(count + 1);
		addToCart({...product});
	};

	return (
		<div className='product-card'>
			<div className='product-card-inner'>
				<div className='product-card-front'>
					<img src={image} alt='product image' className='product-card-image' />
				</div>
				<div className='product-card-back'>
					<h3 className='product-card-title'>{title}</h3>
					<p className='product-card-description'>{description}</p>
					<p className='product-card-price'>{price}</p>
					<button className='product-card-button' onClick={handleAddToCart}>
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		image: PropTypes.string,
		price: PropTypes.number,
		description: PropTypes.string,
	}),
};
