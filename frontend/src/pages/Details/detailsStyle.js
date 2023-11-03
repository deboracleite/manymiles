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
        height: fit-content;
        img{
            width: 330px;
            height: 280px;
        }
    }

    .informationVehicle{
        width: 50%;
        color: #030303;
    }
    .vehicleDetail{
        display: flex;
    }
    .vehicle_color, .vehicle_fuel{
        width: 15%;
        display: flex;
        p{
            color: #030303;
            font-size: 18px;
            margin-left: 2px;
        }
    }
    .vehicle_description{
        margin-bottom: 2%;
        margin-top: 2%;
    }
    .date-input{
        display: flex;
        width: 100%;
        margin-bottom: 20px;
    }
    .date-input-field{
        display: flex;
        width: 230px;
        align-items: center;
        label{
            margin-right: 15px;
        }
        input{
            width: 150px;
            border-radius: 5px;
            font-size: 100%;
            height: 35px;
            padding-left: 12px;
        }
    }
    .rentIformation{
        display: flex;
        margin-bottom: 20px;
        p{
            margin-right: 20px;
        }
    }
    .vehicle_brand{
        padding-bottom: 2%;
    }
    button{ 
        width: 22%;
        background-color: #030303;
        color: #fff;
        padding: 16px;
        margin-top: 18px;
        border: none;
        border-radius: 25px;
        font-size: 100%;
        cursor: pointer;
    }
    .line {
        width: 148px;
        height: 1px;
        background-color: #030303;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .price-details{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 701px;
        margin-bottom: 20px;
    }
`

