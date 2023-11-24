import styled from "styled-components";


export const Container = styled.div`
    width: 90%;
    min-height: 92vh;
    background: #d9d6d6;
    display: flex;
    align-items: start;
    justify-content: center;
    margin: 0 auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

// export const Content = styled.div`
//     width: 100%;
//     height: 92vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     align-content: center;
// `;

export const Content = styled.div`
display: flex;
width: 100%;
background: #d9d6d6;
padding-top: 2%;
/* height: 100vh; */

.import-image {
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 166px;
}

h2 {
    font-size: 200%;
    margin-bottom: 20px;
    color: #030303;
    margin-top: 5%;
  }
.line {
  width: 68%;
  height: 1px;
  background-color: #030303;
  margin-top: 10px;
  margin-bottom: 5%;
}

.vehicle-form{
    width: 50%;
}

.VehicleType-input{
    margin-bottom: 2%;
    select{
        width: 22%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        height: 50px;
        font-size: 100%;
    }
}

.input-group{
width: 23%;

}
label {
      display: block;
      text-align: left;
      margin-bottom: 5px;
      color: #030303;
      font-size: 100%;
    }
.input-container {
    margin-bottom: 15px;
    display: flex;
    justify-content: flex-start;
    input {
        width: 95%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        height: 50px;
        font-size: 100%;
    }
  }

  .title-group{
    margin-bottom: 2%;
  }
  .title-group {
    font-size: 100%;
    margin-bottom: 5px;
    color: #030303;
    padding-bottom: 2%;
  }

.information-price {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 3%;
}

.price-container{
  margin-right: 16px;
}

.price-option{
    display: flex;
}

input[type="checkbox"] {
    width: 10%;
    padding: 8px;
    margin-top: 4px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-right: 4%;
  
}

.price-container input[type="text"] {
  width: 44%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 100%;
}

.avaliability-inputs{
    width: 24%;
    label{
        padding-bottom: 2%;
    }
    input{
    width: 90%;
}
}

.Description-inputs{
    label{
        padding-bottom: 2%;
    }
    textarea {
        width: 70%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        font-size: 100%;
        height: 150px; 
    }

}

.Availability-toggle {
    display: flex;
    align-items: center;
    margin-top: 3%;
    margin-bottom: 2%;

    label{
        margin-right: 2%;
    }

    input[type="checkbox"] {
        display: none; 
    }

    .toggle {
        width: 40px;
        height: 20px;
        background-color: #ccc;
        border-radius: 25px;
        position: relative;
        cursor: pointer;
        transition: background-color 0.3s ease;
        
        &::after {
            content: "";
            width: 18px;
            height: 18px;
            background-color: #fff;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            transform: translate(2px, -50%);
            left: 2px;
            transition: transform 0.3s ease, background-color 0.3s ease;
        }
    }

    input[type="checkbox"]:checked + .toggle {
        background-color: #030303;
        
        &::after {
            transform: translate(20px, -50%);
        }
    }
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
    margin-top: 5%;
    margin-bottom: 2%;
    
  }


.white-square {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    height: 24%;
    border-radius: 25px;
}

.dashed-square {
    border: 2px dashed #c0c7ca;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 69%;
    border-radius: 25px;
    justify-content: space-evenly;
    p {
        font-size: 147%;
        color: #030303;
    }

    button {
        background-color: #030303;
        color: #fff;
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
        width: 60%;
        
    }
}



`
