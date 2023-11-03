import styled from "styled-components";

export const Container = styled.div`

.blockItem{
    display: flex;
    flex-flow: column;

    width: 292px;
    place-content: center;
    border-radius: 14%;
    -webkit-box-align: center;
    align-items: center;
    height: 290px;
    background: #F4F3EF;
    -webkit-box-pack: center;
}
.ImgItem{
    width: 194px;
    height: 150px;
    border-radius: 22%;
}

.itemTitle{
    background-color: #030303;
    padding: 16px;
    border: none;
    border-radius: 25px;
    font-size: 100%;
    cursor: pointer;
    margin-top: 5%;
    margin-bottom: 2%;
    width: 72%;
    text-align: center;

    a{
        text-decoration: none;
        width: 20%;
        color: #fff;
    }
}
.itemPrice{
    color: #030303;
}

.date-info p{
        margin-bottom: 10px;
    
}
`