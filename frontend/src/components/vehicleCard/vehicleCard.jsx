import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./vehicleCardStyle";

const VehicleCard = ({vehicle}) =>{

    console.log(vehicle);

    return(
        <Container>
            <div className="blockItem">
                <div>
                <img src={vehicle.photoList[0].url} className="ImgItem" alt="ImgItem"/>
                </div>
                <div className="itemTitle">
                    <Link to="/">{vehicle.model}</Link>
                </div>
            </div>
        </Container>
    );

}

export default VehicleCard;