import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Container, LeftSide, RightSide, SignInForm } from "./SignUpStyle";
import signInImage from "../../assets/images/signIn_image.png";
import api from "../../services/api";
import { useToast } from '../../hooks/toast';
const SignUp = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateofBirth, setDateofBirth] = useState('');
    const [message, setmMssage] = useState('');
    const { addToast } = useToast();
    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await api.post('/users', { firstName, lastName, email, password, birthday: dateofBirth, phone: phoneNumber });
            addToast({
                type: 'success',
                title: 'User created successfully',
                description: 'The user has been successfully created',
            });
            navigate('/signIn');
        } catch (error) {
            addToast({
                type: 'error',
                title: String(error.message),
            });
        }


    }

    return (
        <Container>
            <div className="main">
                <LeftSide>
                    <img src={signInImage} alt="Imagem" />
                </LeftSide>
                <RightSide>
                    <SignInForm>
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-container-side" >
                                <div className="name-inputs">
                                    <label>First Name</label>
                                    <input type="text" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                </div>
                                <div className="name-inputs">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                                </div>
                            </div>

                            <div className="input-container">
                                <label>Email</label>
                                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="input-container">
                                <label>Password</label>
                                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className="input-container-side" >
                                <div className="name-inputs">
                                    <label>Phone No</label>
                                    <input type="tel" placeholder="+1" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                                </div>
                                <div className="name-inputs">
                                    <label>Date of Birth</label>
                                    <input type="date" placeholder="DD-MM-YYY" value={dateofBirth} onChange={(e) => setDateofBirth(e.target.value)} required />
                                </div>
                            </div>
                            <button type="submit">Sign Up</button>
                            <p>{message}</p>
                            <p>Already have an account? <Link to="/signIn">Sign In</Link></p>
                        </form>

                    </SignInForm>
                </RightSide>
            </div>
        </Container>
    );
};

export default SignUp;
