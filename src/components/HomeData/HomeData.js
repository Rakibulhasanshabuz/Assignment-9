import React from 'react';
import { Card, Col } from 'react-bootstrap';

const HomeData = (props) => {
    const {name, course_fee, duration, img, discription} = props.survice
    return (
        <Col>
            <Card style={{height: "820px"}}>
                <Card.Img variant="top" src={img} />
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

export default HomeData;