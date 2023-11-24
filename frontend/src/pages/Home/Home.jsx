
import { useState, useEffect, useCallback } from 'react';
import VehicleCard from "../../components/vehicleCard/vehicleCard";
import { Container, ContainerVehicle, ContainerJourney } from "./HomeStyle";
import { VscSearch } from 'react-icons/vsc';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

const Home = () => {
    const { addToast } = useToast();
    const [fromDate, setFromDate] = useState(null);
    const [untilDate, setUntilDate] = useState(null);
    const [vehicleList, setVehicleList] = useState([]);

    const getCurrentDate = () => {
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`
    }

    const validateDateRange = () => {
        return !(!fromDate || !untilDate || (new Date(fromDate) > new Date(untilDate)) || new Date(fromDate) < new Date())
    }

    const handleSearch = useCallback(() => {

        if (!validateDateRange()) {
            addToast({
                type: 'info',
                title: 'Invalid date search',
                description: 'Please enter a valid date range!',
            });
            return;
        }


        api.get('vehicles', {
            params: {
                fromDate,
                untilDate
            }
        }).then(({ data }) => setVehicleList(data ?? []));
    }, [fromDate, untilDate])

    useEffect(() => {
        api.get('vehicles').then(({ data }) => setVehicleList(data ?? []));
    }, []);

    return (
        <Container>
            <ContainerJourney>
                <div className="journey-planner">
                    <h2>Discover Your Journey</h2>
                    <p>Your Premier Vehicle Rental and Sharing Platform</p>
                </div>
                <div className="date-input">
                    <div className="date-input-field">
                        <label>From</label>
                        <div className="input-container">
                            <input type="date" placeholder="" onChange={(e) => setFromDate(e.target.value)} />
                            {/* <input type="time" placeholder="Select time" className="timepicker" onChange={(e)=>setFromTime(e.target.value)} /> */}
                        </div>
                    </div>
                    <div className="date-input-field">
                        <label>Until</label>
                        <div className="input-container">
                            <input type="date" placeholder="+1" onChange={(e) => setUntilDate(e.target.value)} />
                            {/* <input type="time" placeholder="Select time" className="timepicker" onChange={(e)=>setUntilTime(e.target.value)}/> */}
                        </div>
                    </div>
                    <div className="search-icon" onClick={handleSearch}>
                        <VscSearch size={24} />
                    </div>

                </div>
            </ContainerJourney>
            <ContainerVehicle>
                <ul className='vehicleList'>
                    {vehicleList.length ? vehicleList.map(vehicle => (
                        <VehicleCard key={vehicle.id} className="vehicleItem" vehicle={vehicle} />
                    )) : <></>}
                </ul>

            </ContainerVehicle>
        </Container>

    );

}

export default Home;