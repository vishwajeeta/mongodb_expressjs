import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const { username, email, password } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', formData);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit} style={{ maxWidth: '400px', float:'right',padding:'7%', background:'blue' }}><h1>Register</h1>
            <div><label>Username:</label><input type="text" name="username" value={username} onChange={onChange} placeholder="Username" /></div>
            <div><label>Email:</label><input type="email" name="email" value={email} onChange={onChange} placeholder="Email" /></div>
            <div><label>Password:</label><input type="password" name="password" value={password} onChange={onChange} placeholder="Password" /></div>
            <button type="submit" style={{color:'red', margin:'auto'}}>Register</button>
        </form>
    );
};

export default Register;
