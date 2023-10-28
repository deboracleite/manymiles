
import Header from "../../components/header/Header";
import VehicleCard from "../../components/vehicleCard/vehicleCard";
import VehicleFeed from "../../components/vehicleFeed/VehicleFeed";
import { Container } from "./HomeStyle";

const Home = () =>{

    return(
        <Container>
            <Header/>
            {/* <JourneyPlanner/> */}
            <VehicleFeed/>
        </Container>
       
    );

}

export default Home;