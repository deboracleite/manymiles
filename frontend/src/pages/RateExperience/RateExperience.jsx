import { useState } from 'react';
import Rating from 'react-rating-stars-component';
import { Container, Content, Title, CardInfo, RateForm } from './RateExperienceStyle';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

const RateExperience = () => {
    const [enjoyOption, setEnjoyOption] = useState(null);
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');
    const { rentalRequestId } = useParams();
    const [rentInfo, setRentInfo] = useState(null);
    const { addToast } = useToast();
    const navigate = useNavigate();
    const handleEnjoyOption = (event) => {
        setEnjoyOption(event.target.value);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await api.post('/rates', {
                enjoy: enjoyOption === 'yes',
                rate: rating,
                feedback: feedback,
                vehicle_id: rentInfo.vehicleId,
                rental_request_id: rentInfo.rentalRequestId
            });

            addToast({
                type: 'success',
                title: 'Rate done successfully',
            });

            navigate('/');
        } catch (error) {
            addToast({
                type: 'error',
                title: String(error.message),
            });
        }



    };

    useEffect(() => {
        api.get(`/requestBooking/${rentalRequestId}`).then(({ data }) => setRentInfo(data));
    }, [])

    return (
        <Container>
            <Content>

                <Title>
                    <h1>Rate Experience</h1>
                </Title>

                {rentInfo && <CardInfo>
                    <div>
                        <h3>Rental Dates</h3>
                        <p>From: {rentInfo.from}</p>
                        <p>Until: {rentInfo.until}</p>
                    </div>
                    <div>
                        <h3>Vehicle Details</h3>
                        <p>Brand: {rentInfo.brand}</p>
                        <p>Model: {rentInfo.model}</p>
                        <p>Year: {rentInfo.year}</p>
                    </div>
                </CardInfo>}

                <RateForm onSubmit={handleSubmit}>
                    <div className='enjoyQuestion'>
                        <h3>Did you enjoy your rental experience?</h3>

                        <div >
                            <label>
                                <input
                                    type="radio"
                                    name="opcao"
                                    value="yes"
                                    checked={enjoyOption === "yes"}
                                    onChange={handleEnjoyOption}
                                />
                                Yes
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="opcao"
                                    value="no"
                                    checked={enjoyOption === "no"}
                                    onChange={handleEnjoyOption}
                                />
                                No
                            </label>
                        </div>
                    </div>

                    <div className='rateQuestion'>
                        <h3>How many starts would you rate your experience?</h3>

                        <Rating
                            count={5}
                            onChange={handleRatingChange}
                            value={rating}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>


                    <div className='feedbackQuestion'>
                        <h3>Would you like to share any comments or feedback about the service?</h3>

                        <textarea value={feedback} onChange={handleFeedbackChange} />
                    </div>

                    <div className='submitStyle'>
                        <button type="submit">Submit Rating</button>
                    </div>

                </RateForm>
            </Content>

        </Container>
    )
}

export default RateExperience;