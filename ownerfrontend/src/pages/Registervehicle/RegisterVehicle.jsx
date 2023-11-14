import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Container } from "./RegisterVehicleStyle";
import Header from "../../components/header/Header";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import api from "../../services/api";

import { useAuth } from '../../hooks/auth';

const RegisterVehicle = () =>{

    const { owner } = useAuth();
    const ownerId=owner.id;
    const [vehicleType, setVehicleType] = useState('car');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [yearCar, setYearCar] = useState('');
    const [plateNumber, setPlateNumber] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [rentalHour, setRentalHour] = useState('');
    const [rentalDay, setRentalDay] = useState('');
    const [rentalWeek, setRentalWeek] = useState('');
    const [rentalMonth, setRentalMonth] = useState('');
    const [availability, setAvailability] = useState('');
    const [description, setDescription] = useState('');
    const [checkedOptions, setCheckedOptions] = useState({
        hour: false,
        day: false,
        week: false,
        month: false,
      });
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleVehicleTypeChange = (e) => {
        setVehicleType(e.target.value);
    };

    const handleAvailabilityToggle = (e) => {
        setAvailability(e.target.checked);
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);
      };


    const handleCheckboxChange = (e) => {
        const checkboxName = e.target.name;
        const isChecked = e.target.checked;
        setCheckedOptions({
          ...checkedOptions,
          [checkboxName]: isChecked,
        });
      };

    const handleSubmit = async event => {
        
        event.preventDefault();
        const formData = new FormData();
        selectedFiles.forEach(file => {
            formData.append("files", file);
        });
        formData.append("brand", brand);
        formData.append("model", model);
        formData.append("year", yearCar);
        formData.append("plateNumber", plateNumber);
        formData.append("color", vehicleColor);
        formData.append("fuelType", fuelType);
        formData.append("description", description);
        formData.append("type", vehicleType);
        rentalHour && formData.append("hourPrice", rentalHour);
        rentalDay && formData.append("dayPrice", rentalDay);
        rentalWeek && formData.append("weekPrice", rentalWeek);
        rentalMonth && formData.append("monthPrice", rentalMonth);
        formData.append('ownerId', ownerId);
        await api.post(`/vehicles/${ownerId}`, formData);
        navigate('/');
    }


    return(<>
        <Header />
        <Container>
            <div className="import-image">
                <div className="white-square">
                    <div className="dashed-square">
                        <label htmlFor="file-upload" className="upload">
                        <FileUploadIcon />
                        </label>
                        <input
                            type="file"
                            id="file-upload"
                            multiple
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
             </div>
            <div className="vehicle-form">
                <form onSubmit={handleSubmit}>
                    <h2>Vehicle Information</h2>
                    <div className="line"></div>
                    <div className="VehicleType-input">
                        <label>Vehicle Type:</label>
                        <select onChange={handleVehicleTypeChange} value={vehicleType}>
                            <option value="car">Car</option>
                            <option value="motorcycle">Motorcycle</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <div className="input-group">
                            <label>Brand</label>
                            <input type="text" placeholder="Brand" value= {brand} onChange={(e) => setBrand(e.target.value)} required/>
                        </div>
                        <div className="input-group">
                            <label>Model</label>
                            <input type="text" placeholder="Model" value= {model} onChange={(e) => setModel(e.target.value)} required/>
                        </div>
                        <div className="input-group">
                            <label>Year</label>
                            <input type="text" placeholder="Year" value= {yearCar} onChange={(e) => setYearCar(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="input-group">
                            <label>License Plate Number</label>
                            <input type="text" placeholder="License Plate Number" value= {plateNumber} onChange={(e) => setPlateNumber(e.target.value)} required/>
                        </div>
                        <div className="input-group">
                            <label>Vehicle color</label>
                            <input type="text" placeholder="Vehicle color" value= {vehicleColor} onChange={(e) => setVehicleColor(e.target.value)} required/>
                        </div>
                        <div className="input-group">
                            <label>Fuel type</label>
                            <input type="text" placeholder="Fuel type" value= {fuelType} onChange={(e) => setFuelType(e.target.value)} required/>
                        </div>
                    </div>
                    <h2>Rental Details</h2>
                    <div className="line"></div>
                    <p className="title-group">Rental rate</p>

                    <div className="information-price">
                        <div className="price-container">
                            <label>Hour</label>
                            <div className="price-option">
                                <input type="checkbox" name="hour" onChange={handleCheckboxChange} checked={checkedOptions.hour}/>
                                <input type="text" placeholder="$" value= {rentalHour} onChange={(e) => setRentalHour(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="price-container">
                            <label>Day</label>
                            <div className="price-option">
                                <input type="checkbox" name="day" onChange={handleCheckboxChange} checked={checkedOptions.day}/>
                                <input type="text" placeholder="$" value= {rentalDay} onChange={(e) => setRentalDay(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="price-container">
                            <label>Week</label>
                            <div className="price-option">
                                <input type="checkbox" name="week" onChange={handleCheckboxChange} checked={checkedOptions.week}/>
                                <input type="text" placeholder="$" value= {rentalWeek} onChange={(e) => setRentalWeek(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="price-container">
                            <label>Month</label>
                            <div className="price-option">
                                <input type="checkbox" name="month" onChange={handleCheckboxChange} checked={checkedOptions.month}/>
                                <input type="text" placeholder="$" value= {rentalMonth} onChange={(e) => setRentalMonth(e.target.value)} required/>
                            </div>
                        </div>
                    </div>
                    {/* <p className="title-group">Avaliability dates and times for rental:</p>
                    <div className="input-container" >
                            <div className="avaliability-inputs">
                                <label>Date</label>
                                <input type="date" placeholder="+1" />
                            </div>
                            <div className="avaliability-inputs">
                                <label>Time</label>
                                <input type="time" placeholder="DD-MM-YYY" />
                            </div>
                    </div> */}
                    <div className="Availability-toggle">
                        <label>Availability:</label>
                        <input type="checkbox" id="availability-toggle" onChange={handleAvailabilityToggle} checked={availability}/>
                        <label htmlFor="availability-toggle" className="toggle"></label>
                    </div>
                    <div className="Description-inputs">
                        <label>Vehicle Description:</label>
                        <textarea placeholder="Description" value= {description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                    </div>
                    <button>Save</button>
                </form>
            </div>
            
        </Container>
    </>);

}

export default RegisterVehicle;