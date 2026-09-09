import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async (e) => {
        e.preventDefault();
        // Registration logic
    };

    return (
        <div className="register-container">
            <h2>Sign Up</h2>
            <form onSubmit={register}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter Username" 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter First Name" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter Last Name" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <input 
                        type="email" 
                        placeholder="Enter Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder="Enter Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
