import React from 'react';
import './ServiceData.css'
import { Card, Col } from 'react-bootstrap';

const ServicesData = (props) => {
    const {name, course_fee, duration, img, discription} = props.survice
    return (
        <Col className="serviceData-container">
            <Card style={{height: "700px", width: "600px"}}>
                <div className="cart-img">
                <Card.Img style={{width: "500px"}} variant="top" src={img} />
                </div>
                <Card.Body>
                <Card.Title>Dance Name: {name}</Card.Title>
                <Card.Text>
                    {discription}
                </Card.Text>
                <Card.Title>Course Fee: {course_fee}</Card.Title>
                <Card.Title>Course Duration: {duration}</Card.Title>
                </Card.Body>
                </Card>
        </Col>
    );
};

export default ServicesData;