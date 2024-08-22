import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Profile.css';

export function RegisterForm() {
	const [isFlipped, setIsFlipped] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeat, setRepeat] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const goToLogin = () => {
		setIsFlipped(false);
		setTimeout(() => {
			navigate('/login');
		}, 325);
	};

	const goToHomePage = () => {
		navigate('/');
	};

	const submit = async (e) => {
	    e.preventDefault();

	    setError('');

	    const response = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                repeat: repeat
            })
        });

	    const data = await response.json();

	    if(data.success) {
	        localStorage.setItem('session_id', data.session_id);
            goToHomePage();

        } else {
	        setError(data.message);
        }
    };

	return (
		<div className='page-container'>
			<button className='home-button' onClick={goToHomePage}>
				Home page
			</button>
			<div className={`card ${isFlipped ? 'show-register' : ''}`}>
				<div className='card-inner'>
					<div className='card-back'>
						<h2>Register</h2>
                        <div>{error}</div>
						<form onSubmit={submit}>
							<input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='text'
                                placeholder='Your email'
                                required
                            />
							<input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                                placeholder='Password'
                                required
                            />
							<input
                                value={repeat}
                                onChange={(e) => setRepeat(e.target.value)}
                                type='password'
                                placeholder='Confirm your password'
                                required
                            />
							<button type='submit'>Register</button>
						</form>
						<button className='toggle-button' onClick={goToLogin}>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
