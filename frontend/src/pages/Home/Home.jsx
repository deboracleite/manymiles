
import Header from "../../components/header/Header";
import JourneyPlanner from "../../components/journeyPlanner/JourneyPlanner";
import { Container } from "./HomeStyle";

const Home = () =>{

    return(
        <Container>
            <Header/>
            <JourneyPlanner/>
        </Container>
       
    );

}

export default Home;