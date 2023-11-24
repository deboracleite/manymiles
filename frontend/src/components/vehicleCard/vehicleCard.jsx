import { Link } from "react-router-dom";
import { Container } from "./vehicleCardStyle";
//import VehicleDetails from "../vehicleDetails/vehicleDetails";

const VehicleCard = ({ vehicle }) => {
    return (
        <Container>
            <div className="blockItem">
                <div>
                    <img src={vehicle.photoList[0].url} className="ImgItem" alt="ImgItem" />
                </div>
                <div className="itemTitle">
                    <Link to={`/details/${vehicle.id}`}>{vehicle.model}</Link>
                </div>
                <div className="itemPrice">
                    <h6>Daily Rate: {vehicle.dayPrice}</h6>
                </div>
                <div className="moreDetails">
                    {/* <Link to={`/details/${vehicle.id}`}>More Details</Link> */}
                </div>
            </div>
        </Container>
    );

}

export default VehicleCard;