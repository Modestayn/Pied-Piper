// About.jsx
import {Header, Footer} from '../../components';
import './About.css';

export const About = () => {
	return (
		<>
			<Header />
			<div className='about-page'>
				<h1 style={{textAlign: 'center'}}>About Us</h1>
			</div>
			<Footer />
		</>
	);
};
