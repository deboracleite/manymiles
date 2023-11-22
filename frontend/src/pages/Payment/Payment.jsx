import { useState } from 'react';
import * as Yup from 'yup';
import api from '../../services/api';
import { Container, Content, VehicleInfo, IframePayment, VehicleRentalInfo, TotalRentalInfo, IframePaymentContent } from './PaymentStyle';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { useToast } from '../../hooks/toast';

const Payment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [cardHold, setCardHold] = useState('');
    const [expDate, setExpDate] = useState('');
    const [secCode, setSecCode] = useState('');
    const [cardDig1, setCardDig1] = useState('');
    const [cardDig2, setCardDig2] = useState('');
    const [cardDig3, setCardDig3] = useState('');
    const [cardDig4, setCardDig4] = useState('');
    const [payment, setPayment] = useState({});
    const { addToast } = useToast();


    const handleCardHold = (e) => setCardHold(e.target.value.toUpperCase().replace(/[^a-zA-Z\s]/g, ""));
    const handleDig1 = (e) => setCardDig1(e.target.value.replace(/[^0-9]/g, ""));
    const handleDig2 = (e) => setCardDig2(e.target.value.replace(/[^0-9]/g, ""));
    const handleDig3 = (e) => setCardDig3(e.target.value.replace(/[^0-9]/g, ""));
    const handleDig4 = (e) => setCardDig4(e.target.value.replace(/[^0-9]/g, ""));

    const handleSecCode = (e) => setSecCode(e.target.value.replace(/[^0-9]/g, ""));

    const handleExpDate = (e) => {
        var valor = e.target.value;

        var valorNumerico = valor.replace(/\D/g, '');

        if (valorNumerico.length >= 2) {

            setExpDate(valorNumerico.slice(0, 2) + '/' + valorNumerico.slice(2));
        } else {
            setExpDate(valorNumerico);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const schema = Yup.object().shape({
            cardNumber: Yup
                .string()
                .required('Card number is required')
                .matches(/^\d{16}$/, 'Card number must have 16 digits'),

            cardHolderName: Yup.string().required('Cardholder name is required'),

            expirationDate: Yup
                .string()
                .required('Expiration date is required')
                .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid format. Use MM/YY'),

            securityCode: Yup
                .string()
                .required('Security code is required')
                .matches(/^\d{3}$/, 'Security code must have 3 digits'),
        });

        schema
            .validate({
                cardHolderName: cardHold,
                expirationDate: expDate,
                securityCode: secCode,
                cardNumber: `${cardDig1}${cardDig2}${cardDig3}${cardDig4}`
            }).then((validatedData) => {
                api.put(`/payments/${id}`, {
                    ...validatedData,
                    lastFourDigits: cardDig4
                }).then(() => {
                    addToast({
                        type: 'success',
                        title: 'Payment confirmed successfully',
                    });

                    navigate('/payments');
                })
            }).catch((error) => {
                addToast({
                    type: 'error',
                    title: String(error.message),
                });
            });
    };

    useEffect(() => {
        api.get(`/payments/${id}`)
            .then(({ data }) => setPayment(data))
    }, [])

    const handleEdit = useCallback(() => {

    }, [])

    return (
        <Container>
            <FaArrowLeft size={35} color='black' onClick={() => navigate(-1)} style={{ marginTop: '60px', marginLeft: '20px' }} />
            <Content>
                <VehicleInfo>
                    <VehicleRentalInfo>
                        <h3>Rental Details</h3>
                        <div className='infoContent'>
                            <div className='datesStyle'>
                                <label>
                                    Dates
                                    <p>{payment.from}</p>
                                    <p>{payment.until}</p>
                                </label>
                            </div>
                            <div className='vehicleStyle'>
                                <label>
                                    Vehicle Details
                                    <p>Brand: {payment.brand}</p>
                                    <p>Model: {payment.model}</p>
                                    <p>Year: {payment.year}</p>
                                </label>
                            </div>
                        </div>
                        <button onClick={handleEdit}> Edit</button>
                    </VehicleRentalInfo>
                    <TotalRentalInfo>
                        <h3>Total (Tax):</h3>
                        <h1>{payment.price}</h1>
                    </TotalRentalInfo>
                </VehicleInfo>
                <IframePayment onSubmit={handleSubmit}>
                    <IframePaymentContent>
                        <div className='titlePayment'>
                            <h2>Payment</h2>
                        </div>

                        <label className='cardFieldBlock'>
                            Card Holder
                            <input placeholder='Enter name on Card' className='inputHolder' type="text" value={cardHold} onChange={handleCardHold} />
                        </label>

                        <label className='cardFieldBlock'>
                            Card Number

                            <div className='cardNumberBlock'>
                                <input placeholder='0000' className='cardNumber' type="text" maxLength="4" value={cardDig1} onChange={handleDig1} />
                                <input placeholder='0000' className='cardNumber' type="text" maxLength="4" value={cardDig2} onChange={handleDig2} />
                                <input placeholder='0000' className='cardNumber' type="text" maxLength="4" value={cardDig3} onChange={handleDig3} />
                                <input placeholder='0000' className='cardNumber' type="text" maxLength="4" value={cardDig4} onChange={handleDig4} />
                            </div>
                        </label>

                        <div className='cvvBlock'>
                            <label className='cardFieldBlock'>
                                Expiration

                                <input placeholder='MM/YY' className='cardNumber' type="text" value={expDate} onChange={handleExpDate} maxLength="5" />
                            </label>
                            <label className='cardFieldBlock'>
                                CVV
                                <input placeholder='000' className='cardNumber' type="text" value={secCode} onChange={handleSecCode} maxLength="3" />
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