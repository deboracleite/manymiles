import { useState, useEffect, useCallback } from 'react';
import { Container, Content, List, Title, Card } from './BookingRequestStyle';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import EmptyList from '../../assets/images/empty.png';
const BookingRequest = () => {
    const [bookingList, setBookingList] = useState([]);
    const { addToast } = useToast();

    const updateList = (bookingId, bookingList) => {
        const newBookingList = bookingList.filter(book => book.id !== bookingId);
        setBookingList(newBookingList);
    }

    const handleDecision = async (bookingId, decision, bookingList) => {
        try {
            await api.put(`/requestBooking/${bookingId}`, { decision });
            addToast({
                type: 'success',
                title: 'Successfully registered decision',
                description: 'Your rental decision has been successfully registered',
            });
            updateList(bookingId, bookingList);
        } catch (err) {
            console.log(err)
            addToast({
                type: 'error',
                title: 'Failure to record your decision',
            });
        }
    }


    useEffect(() => {

        api.get(`/requestBooking`)
            .then(({ data }) => {
                setBookingList(data)
            })

    }, [])
    return (
        <Container>
            <Content>
                {!bookingList.length ?
                    <img className='empty' src={EmptyList} alt="" />
                    :
                    <>

                        <Title>
                            <h1>Review Booking</h1>
                        </Title>

                        <List>


                            {bookingList.map(booking => {
                                return (
                                    <Card key={booking.id}>
                                        <div className='infoCar'>
                                            <h3>{booking.title}</h3>
                                            <p>From: {booking.from}</p>
                                            <p>Until: {booking.until}</p>
                                        </div>

                                        <div className='totalPrice'>
                                            <p>Total {booking.price}</p>
                                        </div>

                                        <div className='actionBlock'>
                                            <button className='approveButton' onClick={() => handleDecision(booking.id, 'approve', bookingList)}>
                                                Approve
                                            </button>

                                            <button className='declineButton' onClick={() => handleDecision(booking.id, 'decline', bookingList)}>
                                                Decline
                                            </button>
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

export default BookingRequest;