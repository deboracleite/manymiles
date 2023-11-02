import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "./journeyPlannerStyle";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import api from '../../services/api';
import { IconButton } from "@mui/material";

const JourneyPlanner = () => {
    const [fromDate, setFromDate] = useState(null);
    const [untilDate, setUntilDate] = useState(null);
    const [isFromDatePickerOpen, setFromDatePickerOpen] = useState(false);
    const [isUntilDatePickerOpen, setUntilDatePickerOpen] = useState(false);
    const [vehicles, setVehicles] = useState([]);
    

    const handleFromDatePickerChange = (date) => {
        setFromDate(date);
        setFromDatePickerOpen(false); 
    };

    const handleUntilDatePickerChange = (date) => {
        setUntilDate(date);
        setUntilDatePickerOpen(false);
    };

    const handleSubmit = async event => {
        
        await api.get(`/search`,{fromDate,untilDate});
    }
    
    
    return (
        <Container>
            <div className="journey-planner">
                <h2>Discover Your Journey</h2>
                <p>Your Premier Vehicle Rental and Sharing Platform</p>
            </div>
            <div className="date-input">
                <div className="date-input-field">
                    <label>From</label>
                    <div className="input-container">
                        <input type="date" placeholder="" onSelect={(e)=>setFromDate(e.target.value)}/>
                        <input type="time" placeholder="Select time" className="timepicker" />
                    </div>
                </div>
                <div className="date-input-field">
                    <label>Until</label>
                    <div className="input-container">
                        <input type="date" placeholder="+1" onSelect={(e)=>setUntilDate(e.target.value)}/>
                        <input type="time" placeholder="Select time" className="timepicker" />
                    </div>
                </div>
                <div className="search-icon" >
                <IconButton onClick={handleSubmit}>
                    <SearchIcon/>
                    </IconButton>
                </div>
                
            </div>
        </Container>
    );
}

export default JourneyPlanner;
