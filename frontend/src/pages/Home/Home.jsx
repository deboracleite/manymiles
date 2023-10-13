
import Header from "../../components/header/Header";
import JourneyPlanner from "../../components/journeyPlanner/JourneyPlanner";
import VehicleFeed from "../../components/vehicleFeed/VehicleFeed";
import { Container } from "./HomeStyle";

const Home = () =>{

    return(
        <Container>
            <Header/>
            <JourneyPlanner/>
            <VehicleFeed/>
        </Container>
       
    );

}

export default Home;