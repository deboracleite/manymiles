import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './headerStyle';
import { useAuth } from '../../hooks/auth';
const Header = () =>{
    const { user, signOut } = useAuth();
    return(
        <Container>
            <nav>
                <ul className="menu-list">
                    <li><Link to="/" >Home</Link></li>
                     <li><Link to="/" >Rent your vehicle</Link></li> 
                    <li id='name-logo' className="centered" >MANYMILES</li>
                    { user && <li className='right'><Link to="/registerVehicle" >Register Vehicle</Link></li>}
                    {!user ? <li className='right'><Link to="/signIn" >Sign In</Link></li> :
                    <li className='right' onClick={() => signOut()}><Link to="/" >Sign Out</Link></li>}
                    {user && <li className='right'><Link to="/" >My account</Link></li> }
                </ul>
            </nav>

        </Container>
    );

}

export default Header;