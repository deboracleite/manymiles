

import React, { useCallback, useEffect, useState } from 'react'
import { BiLike, BiDislike } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import Rating from 'react-rating-stars-component';
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { Container, Content, HeaderContent, BodyContent, Carousel, RentalInfo, ContainerRate, AnimatedCards, Card, CardContent, InfoContainer, Profile, DateRental, FeedBack } from "./detailsStyle"
import { useSpring, animated } from 'react-spring';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useToast } from '../../hooks/toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

const details = () => {

  const params = useParams();
  const id = params.id;
  const [vehicleDetails, setVehicleDetails] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [untilDate, setUntilDate] = useState("");
  const [priceWithoutTax, setPriceWithoutTax] = useState(0);
  const [priceWithTax, setPriceWithTax] = useState(0);
  const [images, setImages] = useState([])
  const [index, setIndex] = useState(0);
  const { addToast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [rates, setRates] = useState([]);
  const nextSlide = () => {
    setIndex((index + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const [indexRate, setIndexRate] = useState(0);

  const nextCard = () => {
    setIndexRate((prevIndex) => (prevIndex + 1) % rates.length);
  };

  useEffect(() => {
    const interval = setInterval(nextCard, 5000);

    return () => clearInterval(interval);
  }, [indexRate, rates]);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });

  const propsRate = useSpring({
    transform: `translateX(-${indexRate * 100}%)`,
  });

  useEffect(() => {
    api.get(`/rates/${id}`).then(({ data }) => setRates(data))
  }, []);

  useEffect(() => {
    api.get(`/fetchDetails/${id}`, { id })
      .then((res) => res.data)
      .then((data) => {
        setVehicleDetails(data);
        setImages(data.photoList)
      })
  }, [id])

  useEffect(() => {
    calculatePrice();
  }, [fromDate, untilDate]);


  const calculatePrice = () => {
    if (fromDate && untilDate) {
      const from = new Date(fromDate);
      const until = new Date(untilDate);
      const timeDifference = Math.abs(until - from);
      const days = Math.ceil(timeDifference / (1000 * 3600 * 24));
      const dayPrice = vehicleDetails.dayPrice;
      const weekPrice = vehicleDetails.weekPrice;
      const monthPrice = vehicleDetails.monthPrice;
      const taxRate = 0.13; // Tax rate for Ontario

      let totalPrice = 0;

      if (days >= 30) {
        totalPrice = monthPrice * (Math.floor(days / 30));
      } else if (days >= 7) {
        totalPrice = weekPrice * (Math.floor(days / 7));
        totalPrice += dayPrice * (days % 7);
      } else {
        totalPrice = dayPrice * days;
      }

      const priceWithoutTax = totalPrice;
      const priceWithTax = priceWithoutTax + (priceWithoutTax * taxRate);

      setPriceWithoutTax(priceWithoutTax);
      setPriceWithTax(priceWithTax);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      addToast({
        type: 'info',
        title: 'Please Sign in before booking',
      });
      navigate('/signIn');
      return;
    }
    try {
      const { data: { paymentId } } = await api.post(`/requestBooking/${vehicleDetails.id}`,
        {
          vehicle_id: vehicleDetails.id,
          owner_id: vehicleDetails.id,
          start_date: fromDate,
          end_date: untilDate,
          vehicle_details: vehicleDetails.description,
          priceWithoutTax,
          priceWithTax,
          status: 'pending'
        });

      addToast({
        type: 'success',
        title: 'Booking completed successfully',
        description: 'Your Booking was successful',
      });

      navigate(`/payment/${paymentId}`);
    } catch (err) {
      addToast({
        type: 'error',
        title: 'An error occurred when booking',
      });
    }

  }

  return (
    <Container>
      <Content>
        <HeaderContent>
          <h1>{vehicleDetails.brand} {vehicleDetails.model} {vehicleDetails.year}</h1>
          <p>{vehicleDetails.description}</p>
        </HeaderContent>
        <BodyContent>
          <RentalInfo>

            <div className='vehicleInformation'>
              <h3>Vehicle Information</h3>
              <div className='vehicleDetail'>
                <div className='vehicle_color'>
                  <ColorLensIcon />
                  <p > {vehicleDetails.color}</p>
                </div>
                <div className='vehicle_fuel'>
                  <LocalGasStationIcon />
                  <p>{vehicleDetails.fuelType}</p>
                </div>
              </div>
            </div>

            <div className='rentalInformation'>
              <h3>Rental Informations</h3>

              <div className='rentInformationDetails'>
                <div className='rentalPrices'>
                  <p>Daily: ${vehicleDetails.dayPrice}</p>
                  <p>|</p>
                  <p>Weekly: ${vehicleDetails.weekPrice}</p>
                  <p>|</p>
                  <p>Monthly: ${vehicleDetails.monthPrice}</p>
                </div>
              </div>

            </div>

            <div className='bookInformation'>
              <h3>Book Request</h3>
              <form className='requestBook'>
                <div className="date-input">
                  <div className="date-input-field">
                    <label>From: </label>
                    <div className="input-container">
                      <input type="date" placeholder="" onChange={(e) => { setFromDate(e.target.value); calculatePrice(); }} />
                    </div>
                  </div>
                  <div className="date-input-field">
                    <label>Until: </label>
                    <div className="input-container">
                      <input type="date" placeholder="+1" onChange={(e) => { setUntilDate(e.target.value); calculatePrice(); }} />
                    </div>
                  </div>
                </div>
                <div className="price-details">
                  <div>
                    <p>Price without tax: ${priceWithoutTax.toFixed(2)}</p>
                    <p>Price with tax (Ontario 13%): ${priceWithTax.toFixed(2)}</p>
                  </div>

                  <button type="submit" onClick={handleSubmit}>Request booking</button>
                </div>
              </form>
            </div>
          </RentalInfo>
          {images.length &&
            <Carousel>
              <animated.div style={props}>
                <img
                  src={images[index].url}
                  alt={`Imagem ${index + 1}`}
                />
              </animated.div>
              <div className='control'>
                <button disabled={index === 0} onClick={prevSlide}><FaArrowLeft size={24} /></button>
                <button disabled={index === images.length - 1} onClick={nextSlide}><FaArrowRight size={24} /></button>
              </div>
            </Carousel>}
        </BodyContent>
        {rates.length && <ContainerRate>
          <AnimatedCards style={propsRate}>
            {rates.map((rate) => (
              <Card key={rate.id}>
                <CardContent>
                  <InfoContainer>
                    <Profile>
                      <CgProfile size={24} />
                      <h3>{rate.userName}</h3>
                      {rate.enjoy ?
                        <BiLike color={'#00c853'} size={24} />
                        :
                        <BiDislike color={'#d50000'} size={24} />
                      }
                    </Profile>
                    <DateRental>
                      <p><span>From: {rate.from} </span></p>
                      <p><span>Until: {rate.until} </span></p>
                    </DateRental>
                    <Rating
                      count={5}
                      value={rate.rate}
                      size={24}
                      isHalf={false}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </InfoContainer>

                  <FeedBack>
                    <p>{rate.feedback}</p>
                  </FeedBack>


                </CardContent>

              </Card>
            ))}
          </AnimatedCards>
        </ContainerRate>}
      </Content>

    </Container>)
}

export default details