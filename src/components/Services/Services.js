import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServicesData from '../ServicesData/ServicesData';

const Services = () => {
    const [survices, setServices] = useState([]);

    useEffect(() => {
        fetch('./dance.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h1>Dance Club - <span className="dance-head">Danching Guru</span></h1>
            <div>
            <Row xs={1} md={3} className="g-4">
                {
                    survices.map(survice => <ServicesData survice={survice} key={survice.key}></ServicesData>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Services;