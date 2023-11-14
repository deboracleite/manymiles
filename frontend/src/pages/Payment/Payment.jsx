import { useState } from 'react';
import Rating from 'react-rating-stars-component';
import { Container, Content, VehicleInfo, IframePayment, VehicleRentalInfo, TotalRentalInfo, IframePaymentContent } from './PaymentStyle';
import { useEffect } from 'react';
import { useCallback } from 'react';

const Payment = () => {
    const [enjoyOption, setEnjoyOption] = useState(null);
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');


    const [bookingList, setBookingList] = useState([
        {
            id: 1,
            title: 'Hyundai Santa fe 2023',
            from: 'Fri, Nov 3, 2023',
            until: 'Fri, Nov 3, 2023',
            price: 100
        },

        {
            id: 2,
            title: 'Hyundai Santa fe 2023',
            from: 'Fri, Nov 3, 2023',
            until: 'Fri, Nov 3, 2023',
            price: 100
        }
    ]);


    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        // Faça algo com a opção selecionada
        console.log("Opção selecionada:", event.target);
    }, []);

    useEffect(() => {

    }, [])

    const handleEdit = useCallback(() => {

    }, [])

    return (
        <Container>
            <Content>
                <VehicleInfo>
                    <VehicleRentalInfo>
                        <h3>Rental Details</h3>
                        <div className='infoContent'>
                            <div className='datesStyle'>
                                <label>
                                    Dates
                                    <p>Fri, Nov 3, 2023</p>
                                    <p>Fri, Nov 3, 2023</p>
                                </label>
                            </div>
                            <div className='vehicleStyle'>
                                <label>
                                    Vehicle Details
                                    <p>Brand: Honda</p>
                                    <p>Model: Civic</p>
                                    <p>Year: 2023</p>
                                </label>
                            </div>
                        </div>
                        <button onClick={handleEdit}> Edit</button>
                    </VehicleRentalInfo>
                    <TotalRentalInfo>
                        <h3>Total (Tax):</h3>
                        <h1> $ 100.00 </h1>
                    </TotalRentalInfo>
                </VehicleInfo>
                <IframePayment onSubmit={handleSubmit}>
                    <IframePaymentContent>
                        <div className='titlePayment'>
                            <h2>Payment</h2>
                        </div>

                        <label className='cardFieldBlock'>
                            Card Holder
                            <input placeholder='Enter name on Card' className='inputHolder' type="text" />
                        </label>

                        <label className='cardFieldBlock'>
                            Card Number

                            <div className='cardNumberBlock'>
                                <input placeholder='0000' className='cardNumber' type="text" />
                                <input placeholder='0000' className='cardNumber' type="text" />
                                <input placeholder='0000' className='cardNumber' type="text" />
                                <input placeholder='0000' className='cardNumber' type="text" />
                            </div>
                        </label>

                        <div className='cvvBlock'>
                            <label className='cardFieldBlock'>
                                Expiration

                                <input placeholder='YYYY-MM' className='cardNumber' type="text" />
                            </label>
                            <label className='cardFieldBlock'>
                                CVV
                                <input placeholder='000' className='cardNumber' type="text" />
                            </label>
                        </div>
                        <div className='submitStyle'>
                            <button type="submit">Reserve Now</button>
                        </div>
                    </IframePaymentContent>
                </IframePayment>
            </Content>

        </Container>
    )
}

export default Payment;