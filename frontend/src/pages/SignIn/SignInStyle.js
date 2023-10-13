import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
`;

export const LeftSide = styled.div`
  flex: 1;
  text-align: center;
  img {
    max-width: 100%;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  text-align: left;
`;

export const SignInForm = styled.div`
  max-width: 81%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  h2 {
    font-size: 370%;
    margin-bottom: 20px;
    color: #030303;
    padding-bottom: 5%;
  }
  .input-container {
    margin-bottom: 15px;
    label {
      display: block;
      text-align: left;
      margin-bottom: 5px;
      color: #030303;
      font-size: 130%;
    }
    input {
        width: 57%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        height: 50px;
        font-size: 130%;
    }
  }
  a.link-forgot{
    display: block;
    text-align: left;
    padding-bottom: 5%;
  }
  a {
    text-decoration: none;
    color: #030303;
    font-size: 120%;
  }
  button {
    width: 20%;
    background-color: #030303;
    color: #fff;
    padding: 16px;
    margin-top: 18px;
    border: none;
    border-radius: 25px;
    font-size: 130%;
    cursor: pointer;
    
  }
  p {
    margin-top: 10px;
    color: #030303;
    padding-top: 5%;
    font-size: 120%;
  }
`;
