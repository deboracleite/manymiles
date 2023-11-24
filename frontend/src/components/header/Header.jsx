import React, { useCallback, useEffect } from 'react';
import { VscAccount, VscSignIn, VscSignOut, VscHome } from 'react-icons/vsc';

import { LeftMenu, CenterLogo, RightMenu, StyledLink, MenuItem, HeaderContainer } from './headerStyle';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { useLocation } from 'react-router-dom';
const Header = () => {
    const { user, signOut } = useAuth();
    const location = useLocation();
    const isAdmin = user && user.user_type === 'admin';
    const { addToast } = useToast();
    const checkPosition = useCallback((currentLocation) => {
        return currentLocation === location.pathname
    }, [location]);

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
                {user && <MenuItem menu={checkPosition('/registerVehicle')}><StyledLink to="/registerVehicle">{isAdmin ? 'Register Vehicle' : 'Rent Your Vehicle'}</StyledLink></MenuItem>}
                {user && <MenuItem menu={checkPosition('/bookingRequest')}><StyledLink to="/bookingRequest">Manage Requests</StyledLink></MenuItem>}
                {user && <MenuItem menu={checkPosition('/myRentals')}><StyledLink to="/myRentals">Your Rentals</StyledLink></MenuItem>}
                {user && <MenuItem menu={checkPosition('/vehicleHistory')}><StyledLink to="/vehicleHistory">Vehicle History</StyledLink></MenuItem>}
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