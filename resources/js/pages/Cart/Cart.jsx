import { useCart } from '../../context/CartContext';
import { Header } from '../../components';
import './Cart.css'
export function Cart() {
	const { cartItems, removeFromCart } = useCart();

	if (!cartItems) {
		return <p>Loading...</p>;
	}

	const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

	const goToHome = () => {
		window.location.href = '/';
	};

	return (
		<div className='page-cart'>
			<Header cartItems={cartItems.length} />
			<h1>Your Cart</h1>
			<button onClick={goToHome}>Go to Home</button>
			<div className='cart'>
				{cartItems.length > 0 ? (
					<>
						<ul>
							{cartItems.map((item) => (
								<li key={item.id}>
									<img src={item.image} alt={item.title} />
									<h2>{item.title}</h2>
									<p>Price: ${item.price}</p>
									<p>Quantity: {item.quantity}</p>
									<button className="cart-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
								</li>
							))}
						</ul>
						<h2>Total: ${total.toFixed(2)}</h2>
					</>
				) : (
					<p>Your cart is empty.</p>
				)}
			</div>
		</div>
	);
}
