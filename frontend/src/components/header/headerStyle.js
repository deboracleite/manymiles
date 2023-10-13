import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
nav{
    padding-left: 10px;
    padding-right: 10px;
}
.menu-list {
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    text-decoration: none;
    background-color: #030303;
    height: 70px;
    align-items: center;
    
  }

.menu-list li {
    margin: 0 10px;

}

.menu-list li.right {
    margin-left: auto;
    margin-right: 2%;
}

#name-logo {
  font-size: 29px;
}

.centered {
  flex: 1; 
  text-align: center; 
}

.menu-list a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}



`;