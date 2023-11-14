import React, {useEffect, useState} from "react";
import VehicleCard from "../vehicleCard/vehicleCard";
import { Container } from "./vehicleFeedStyle";
import api from "../../services/api";
import { useAuth } from '../../hooks/auth';
const VehicleFeed = () =>{
    const { owner } = useAuth();
    const [vehicleList, setVehicleList] = useState([]);
    console.log(owner.id);
    useEffect(() => {
        const fetchData = async () => {
            await api.get(`/fetchAllVehicle/${owner.id}`)
            .then(({data}) => {
                
                setVehicleList(data);
            })
          }
          fetchData()
    }, [owner.id])
    return(
        <Container>
            <h1>Vehicle Added By You</h1>
            <ul className='vehicleList'>
            {vehicleList && vehicleList.length > 0 ? (
                vehicleList.map(vehicle => (<VehicleCard key={vehicle._id} className="vehicleItem" vehicle={vehicle}
                />))) : (
        <p>No vehicles found</p>
      )}
            </ul>
            
        </Container>
    );
}

export default VehicleFeed;