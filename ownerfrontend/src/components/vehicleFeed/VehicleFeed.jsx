import React, {useEffect, useState} from "react";
import VehicleCard from "../vehicleCard/vehicleCard";
import { Container } from "./vehicleFeedStyle";
import api from "../../services/api";

const VehicleFeed = () =>{

    const [vehicleList, setVehicleList] = useState([]);

    useEffect(() => {
        api.get('/vehicles').then(({data}) => {
            
            setVehicleList(data);
        })
    }, [])

    return(
        <Container>
            <ul className='vehicleList'>
                {vehicleList.map(vehicle => (<VehicleCard key={vehicle.id} className="vehicleItem" vehicle={vehicle}
                />))}
            </ul>
            
        </Container>
    );
}

export default VehicleFeed;