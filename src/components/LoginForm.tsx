import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './LoginForm.module.css';

interface Props {
    onLogin: () => void;
}

const LoginForm: React.FC<Props> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Implement your login logic here
        onLogin(); // Call the onLogin prop
    };

    return (
        <motion.form
            className={styles['login-form']}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
        >
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Регистрация
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
            </motion.div>
            <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                Регистрация
            </motion.button>
        </motion.form>
    );
};

export default LoginForm;
