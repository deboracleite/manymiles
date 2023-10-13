import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    .main{
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: #d9d6d6;
      width: 90%;
    }
`;

export const LeftSide = styled.div`
  flex: 1;
  text-align: center;
  max-height: 93vh; /* Defina a altura máxima desejada */
  overflow: hidden; 
  img {
    max-width: 100%;
    width: auto;
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
  h2 {
    font-size: 290%;
    margin-bottom: 20px;
    color: #030303;
    padding-bottom: 5%;
  }
  .input-container-side {
    margin-bottom: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 735px;
    label {
      display: block;
      text-align: left;
      margin-bottom: 5px;
      color: #030303;
      font-size: 100%;
    }
    input {
        width: 182px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        height: 50px;
        font-size: 100%;
    }
  }
  .name-inputs{
    width: 30%;
  }
  .input-container {
    margin-bottom: 15px;
    label {
      display: block;
      text-align: left;
      margin-bottom: 5px;
      color: #030303;
      font-size: 100%;
    }
    input {
        width: 400px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        height: 50px;
        font-size: 100%;
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
  }
  button {
    width: 20%;
    background-color: #030303;
    color: #fff;
    padding: 16px;
    margin-top: 18px;
    border: none;
    border-radius: 25px;
    font-size: 100%;
    cursor: pointer;
    
  }
  p {
    margin-top: 10px;
    color: #030303;
    padding-top: 5%;
    font-size: 90%;
  }
`;
