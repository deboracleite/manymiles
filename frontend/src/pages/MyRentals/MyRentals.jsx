import { useState, useEffect } from 'react';
import { Container, Content, List, Title, Card } from './MyRentalsStyle';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import EmptyList from '../../assets/images/empty.png';
const MyRentals = () => {
    const navigate = useNavigate();
    const [paymentList, setPaymentList] = useState([]);

    const checkStatus = (status) => status === 'pending';

    useEffect(() => {
        api.get(`/payments`)
            .then(({ data }) => setPaymentList(data))
    }, [])

    return (
        <Container>
            <Content>
                {!paymentList.length ?
                    <img className='empty' src={EmptyList} alt="" />
                    :
                    <>
                        <Title>
                            <h1>MyRentals</h1>
                        </Title>

                        <List>
                            {paymentList.map(payment => {
                                console.log(payment)
                                return (
                                    <Card key={payment.id}>
                                        <div className='infoCar'>
                                            <h3>{payment.booking.title}</h3>
                                            <p>From: {payment.booking.from}</p>
                                            <p>Until: {payment.booking.until}</p>
                                        </div>

                                        <div className='totalPrice'>
                                            <p>Total {payment.booking.price}</p>
                                        </div>
                                        <div className='actionBlock'>
                                            <button className={checkStatus(payment.status) ? 'pendingButton' : 'paidButton'} onClick={() => navigate(`/payment/${payment.id}`)}>
                                                {checkStatus(payment.status) ? 'Pending' : 'Paid'}
                                            </button>

                                            {!checkStatus(payment.status) && <button className={'pendingButton'} onClick={() => navigate(`/rateExperience/${payment.booking.rentalRequestId}`)}>
                                                Rate
                                            </button>}
                                        </div>
                                    </Card>
                                )
                            })
                            }
                        </List>
                    </>
                }
            </Content>

        </Container>
    )
}

export default MyRentals;