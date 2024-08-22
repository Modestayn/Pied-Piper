import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Profile.css';

export function LoginForm() {
	const [isFlipped, setIsFlipped] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
	const navigate = useNavigate();

	const goToRegister = () => {
		setIsFlipped(true);
		setTimeout(() => {
			navigate('/register');
		}, 325);
	};

	const goToHomePage = () => {
		navigate('/');
	};

	const submit = async (e) => {
        e.preventDefault();

        setError('');
        const response = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
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
					<div className='card-front'>
						<h2>Login</h2>
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
							<button type='submit'>Login</button>
						</form>
						<button className='toggle-button' onClick={goToRegister}>
							Register
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
