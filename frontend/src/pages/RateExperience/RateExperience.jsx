import { useState } from 'react';
import Rating from 'react-rating-stars-component';
import { Container, Content, Title, CardInfo, RateForm } from './RateExperienceStyle';
import { useEffect } from 'react';
import { useCallback } from 'react';

const RateExperience = () => {
    const [enjoyOption, setEnjoyOption] = useState(null);
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');

    const [bookingList, setBookingList] = useState([
        {
            id: 1,
            title: 'Hyundai Santa fe 2023' ,
            from: 'Fri, Nov 3, 2023',
            until: 'Fri, Nov 3, 2023',
            price: 100
        },

        {
            id: 2,
            title: 'Hyundai Santa fe 2023' ,
            from: 'Fri, Nov 3, 2023',
            until: 'Fri, Nov 3, 2023',
            price: 100
        }
    ]);

    const handleEnjoyOption = (event) => {
        setEnjoyOption(event.target.value);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        
        console.log("Opção selecionada:", event.target.value);
      }, []);
    
    useEffect(() => {

    }, [])

    return (
        <Container>
            <Content>

                <Title>
                    <h1>Rate Experience</h1>
                </Title>
                
                <CardInfo>
                    <div>
                        <h3>Rental Dates</h3>
                        <p>From: Fri, Nov 3, 2023</p>
                        <p>Until: Fri, Nov 3, 2023</p>
                    </div>
                    <div>
                        <h3>Vehicle Details</h3>
                        <p>Brand: Honda</p>
                        <p>Model: Civic</p>
                        <p>Year: 2023</p>
                    </div>
                </CardInfo>

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