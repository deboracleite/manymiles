import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/auth';
import { Container, LeftSide, RightSide, SignInForm } from "./SignInStyle";
import signInImage from "../../assets/images/signIn_image.png";
import { useToast } from '../../hooks/toast';
const SignIn = () => {
    const { signIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setmMssage] = useState('');
    const { addToast } = useToast();
    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const schema = Yup.object().shape({
                email: Yup.string().required('You must have an email').email('Type a valid email!'),
                password: Yup.string().required('You must have a password!')
            })

            if (!await schema.validate({ email, password })) {
                addToast({
                    type: 'error',
                    title: 'Failed to Authenticate1',
                    description: 'Invalid user try again',
                });
                return;
            }


            await signIn({ email, password });
            addToast({
                type: 'success',
                title: 'Authentication Success',
                description: 'The user has been successfully authenticated',
            });
            navigate('/');
        } catch (error) {
            addToast({
                type: 'error',
                title: 'Failed to Authenticate',
                description: 'Invalid user try again ',
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
                        <h2>Sign In</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-container">
                                <label>Email</label>
                                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} require />
                            </div>
                            <div className="input-container">
                                <label>Password</label>
                                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <a className="link-forgot" href="#">Forgot your password?</a>
                            <button type="submit" >Sign In</button>
                            <p>{message}</p>
                            <p>Don't you have an account? <Link to="/signup">Sign Up</Link></p>
                        </form>
                    </SignInForm>
                </RightSide>
            </div>
        </Container>
    );
};

export default SignIn;
