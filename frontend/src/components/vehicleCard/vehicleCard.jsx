import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./vehicleCardStyle";
//import VehicleDetails from "../vehicleDetails/vehicleDetails";

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
                <div className="itemPrice">
                    <h6>Hourly Rate: <script>console.log(vehicle.hour_price)</script>{vehicle.hourPrice}</h6>
                </div>
                <div className="moreDetails">
                    <Link to={`/details/${vehicle.id}`}>More Details</Link>
                </div>

                
                
            </div>
        </Container>
    );

}

export default VehicleCard;