import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/register', formData);
            alert('Реєстрація успішна!');
        } catch (error) {
            console.error('Помилка реєстрації:', error);
            alert('Сталася помилка при реєстрації');
        }
    };

    return (
        <div>
            <h1>Форма реєстрації</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Ім'я:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br />
                <label htmlFor="password">Пароль:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required /><br />
                <button type="submit">Зареєструватися</button>
            </form>
        </div>
    );
};

export default RegisterForm;
