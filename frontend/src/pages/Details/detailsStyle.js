import  styled from "styled-components";

export const Container  = styled.div`
    display: flex;
    width: 98%;
    background: #d9d6d6;
    padding-top: 2%;
    margin-left: 10px;
    margin-right: 10px;

    .body{
        display: flex;
        width: 100%;
        justify-content: center;
    }

    .img_container{
        width: 50%;
        display: flex;
        justify-content: center;
    }

    .informationVehicle{
        width: 50%;
        color: #030303;
    }
    .rentIformation{
        display: flex;
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
}
`

