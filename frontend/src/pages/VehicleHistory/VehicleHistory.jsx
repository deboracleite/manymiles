import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Container, Content, GraphBar, MetricsContent, InfoBlock, SummaryInfo, ListRentals, TitlePage, Card } from './VehicleHistotyStyle';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
const VehicleHistory = () => {
    const [rentalList, setRentalList] = useState([{
        id: 1,
        title: 'Hyundai Santa Fe 2023',
        from: 'Wed, Nov 22, 2023',
        until: 'Thu, Nov 23, 2023',
        price: '$113.00'
    },
    {
        id: 2,
        title: 'Hyundai Santa Fe 2023',
        from: 'Wed, Nov 22, 2023',
        until: 'Thu, Nov 23, 2023',
        price: '$113.00'
    },
    {
        id: 3,
        title: 'Hyundai Santa Fe 2023',
        from: 'Wed, Nov 22, 2023',
        until: 'Thu, Nov 23, 2023',
        price: '$113.00'
    },
    {
        id: 4,
        title: 'Hyundai Santa Fe 2023',
        from: 'Wed, Nov 22, 2023',
        until: 'Thu, Nov 23, 2023',
        price: '$113.00'
    }



    ])


    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Summary',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Total Profits',
                data: labels.map(() => Math.random()),
                backgroundColor: '#000',
            },
            {
                label: 'Total Rent',
                data: labels.map(() => Math.random()),
                backgroundColor: '#d9d6d6',
            },
        ],
    };

    const navigate = useNavigate();
    const [insights, setInsights] = useState([]);

    useEffect(() => {
        // api.get(`/payments`)
        //     .then(({ data }) => setPaymentList(data))
    }, [])



    return (
        <Container>
            <Content>
                <TitlePage>Vehicle History</TitlePage>
                <MetricsContent>
                    <SummaryInfo>
                        <InfoBlock>
                            <span>
                                <h2>$1.000,00</h2>
                                <h3>Total Profit ($)</h3>
                            </span>

                            <span>
                                <h2>40</h2>
                                <h3>Total Rentals (Number of rentals)</h3>
                            </span>
                        </InfoBlock>
                        <InfoBlock>
                            <span>
                                <h2>Hyundai Santa Fe 2023</h2>
                                <h3>Most Rented Vehicle (Vehicle Name)</h3>
                            </span>

                            <span>
                                <h2>June</h2>
                                <h3>Most rented month (Month Name)</h3>
                            </span>
                        </InfoBlock>
                    </SummaryInfo>
                    <GraphBar options={options} data={data} />
                </MetricsContent>
                <h1 style={{ marginTop: '50px', color: '#000' }}>Rental List</h1>
                <ListRentals>
                    {rentalList.length ? rentalList.map(rental => {
                        return (
                            <Card key={rental.id}>
                                <div className='infoCar'>
                                    <h3>{rental.title}</h3>
                                    <p>From: {rental.from}</p>
                                    <p>Until: {rental.until}</p>
                                </div>

                                <div className='totalPrice'>
                                    <p>Total {rental.price}</p>
                                </div>
                            </Card>
                        )
                    }) :
                        <></>
                    }
                </ListRentals>
            </Content>

        </Container>
    )
}

export default VehicleHistory;