import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event:any) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event:any) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event:any) => {
        event.preventDefault();
        // Implement your registration logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Регистрация</h2>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit">Зарегистрироваться</button>
            <p>
                Уже есть аккаунт? <Link to="/">Войти</Link>
            </p>
        </form>
    );
};

export default RegistrationForm;
