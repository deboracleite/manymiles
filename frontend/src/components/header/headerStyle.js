import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
    padding: 15px;
    position: relative;
    background-color: #030303;
    height: 70px;
    align-items: center;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
`;

export const LeftMenu = styled.div`
  float: left;
  display: flex;
  align-items: center;
`;

export const RightMenu = styled.div`
  float: right;
  display: flex;
  align-items: center;
`

export const CenterLogo = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;


// export const CenteredContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     position: relative;
// `;

// export const MenuList = styled.ul`
//    list-style: none;
//     padding: 0;
//     margin: 0;
//     display: flex;
//     justify-content: space-between;
//     position: absolute;
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//     align-items: center;
// `;

export const MenuItem = styled.a`
    flex: 0 0 auto;
  
    ${(props) => props.menu && css`
    
      border-bottom: 1px solid #fff;
      padding-bottom: 4px;
    `}
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 10px;
`;