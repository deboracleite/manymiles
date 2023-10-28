import styled from "styled-components";

export const Container = styled.div`
  background: #d9d6d6;
  padding-top: 2%;
  width: 90%;
  height: 100vh;

.vehicleList{
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 24px;
    list-style: none;
    padding: 0px ;
    margin: 0 auto;
    justify-items: center;
}

.vehicleItem{
    display: inline-grid;
}

`;