import styled from 'styled-components';

export const Container = styled.div`
  background: #d9d6d6;
  padding-top: 2%;
  width: 90%;
  height: 100vh;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  .journey-planner {
    background-color: #030303;
    padding: 20px;
    text-align: center;
    width: 88%;
    margin: 20px auto;
    border-radius: 40px;
    font-family: "Roboto", sans-serif;
    padding-bottom: 85px;

    position: relative; 
  }

  .journey-planner h2 {
    font-size: 53px;
    margin-bottom: 10px;
  }

  .journey-planner p {
    font-size: 16px;
  }

  .date-input {
    background-color: #FFFFFF;
    border-radius: 64px;
    padding: 24px 10px;
    display: flex;
    justify-content: space-between;
    width: 56%;
    margin: 0 auto;
    align-items: center;
    transform: translateY(-64%);

  }

  .date-input-field {
    flex: 1;
    padding: 10px;
    color: #030303;

  }

  .date-input-field label {
    color: #030303;
    font-size: 130%;
    text-align: left;
    padding-left: 19.5%;
    

  }

  .input-container {
    /* width: 24%; */

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 60px;
    margin-left: 6%;
    margin-top: 2%;
    label{
        padding-bottom: 2%;
    }
    input{
      width: 25%;
      border: none;
      border-radius: 10px;
      font-size: 136%;
    }

  }

  /* .date-input-field .datepicker,
  .date-input-field .timepicker {
    width: 40%;
    padding-left: 1%;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none; 
    font-family: "Roboto", sans-serif; 
  } */
  .search-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin-top: 2px;
    border-radius: 50%;
    background-color: #030303;
    margin-right: 4%;
}
.react-datepicker__input-container input {
  border: none;
  width: 83%;
  padding-top: 10px;
  padding-bottom: 10px;
}

.search-icon svg {
  font-size: 30px; /* Ajuste o tamanho do ícone conforme necessário */
}
`;
