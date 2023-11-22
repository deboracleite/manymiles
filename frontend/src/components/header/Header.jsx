import React from 'react';
import { VscAccount, VscSignIn, VscSignOut, VscHome } from 'react-icons/vsc';

import { LeftMenu, CenterLogo, RightMenu, StyledLink, MenuItem, HeaderContainer } from './headerStyle';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
const Header = () => {
    const { user, signOut } = useAuth();
    const isAdmin = user && user.user_role === 'admin';
    const { addToast } = useToast();

    const handleSignOut = () => {
        signOut();
        addToast({
            type: 'success',
            title: 'SignOut Success',
            description: 'The user has been successfully signed out',
        });
    }
    return (
        <HeaderContainer>
            <LeftMenu>
                <MenuItem><StyledLink to="/"><VscHome size={24} /></StyledLink></MenuItem>
                {user && <MenuItem><StyledLink to="/registerVehicle">{isAdmin ? 'Register Vehicle' : 'Rent Vehicle'}</StyledLink></MenuItem>}
                {user && <MenuItem><StyledLink to="/bookingRequest">Book Requests</StyledLink></MenuItem>}
                {user && <MenuItem><StyledLink to="/myRentals">My Rentals</StyledLink></MenuItem>}

            </LeftMenu>
            <CenterLogo>
                <MenuItem><StyledLink to="/">MANYMILES</StyledLink></MenuItem>
            </CenterLogo>

            <RightMenu>
                {user && <MenuItem>
                    <StyledLink to="/myAccount">
                        <VscAccount size={24} />
                    </StyledLink>
                </MenuItem>}

                {!user ?
                    <MenuItem>
                        <StyledLink to="/signIn">
                            <VscSignIn size={24} />
                        </StyledLink>
                    </MenuItem> :
                    <MenuItem onClick={handleSignOut}>
                        <StyledLink to="/">
                            <VscSignOut size={24} />
                        </StyledLink>
                    </MenuItem>}

            </RightMenu>
        </HeaderContainer>
    );

}

export default Header;