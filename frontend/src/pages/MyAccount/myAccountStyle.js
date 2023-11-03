import  styled from "styled-components";

export const Container = styled.div` 
    width: 100%;
    background: #d9d6d6;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
    height: 100vh;

    .form-details {
        width: 36%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    button{ 
        width: 20%;
        background-color: #030303;
        color: #fff;
        padding: 16px;
        margin-top: 18px;
        border: none;
        border-radius: 25px;
        font-size: 100%;
        cursor: pointer;
        margin-left: 10px;
    }

    .group-button{
        width: 36%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    h2{
        margin-bottom: 20px;
        font-size: 40px;
    }

label {
  display: flex;
  align-items: center; 
  margin-bottom: 6px;
  font-size: 18px;
  height: 42px;
}

label input, label span {
  margin-left: 10px;
  border: 1px solid #bcb4b4;
  border-radius: 10px;
  height: 37px;
  flex: 1; 
  box-sizing: border-box;
}

label input {
  padding-left: 10px;
  font-size: 18px;
}

label span {
  padding-left: 10px;
  display: flex;
  align-items: center; 
  width: 199px;
}

    .line {
        width: 100%;
        height: 1px;
        background-color: #030303;
        margin-top: 10px;
        margin-bottom: 5%;
    }
`;