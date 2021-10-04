import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeData from '../HomeData/HomeData';
import './Home.css'

const Home = () => {
    const [survices, setServices] = useState([]);

    useEffect(() => {
        fetch('./dance.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div className="home-container">
            <img src="https://static.dw.com/image/40597355_403.jpg" alt="" />
            <h1>Dance Club - <span className="dance-head">Danching Guru</span></h1>
            <p>Dance, the movement of the body in a rhythmic way, usually to music and within a given space, for the purpose of expressing an idea or emotion, releasing energy, or simply taking delight in the movement itself.

            Dance is a powerful impulse, but the art of dance is that impulse channeled by skillful performers into something that becomes intensely expressive and that may delight spectators who feel no wish to dance themselves. These two concepts of the art of dance—dance as a powerful impulse and dance as a skillfully choreographed art practiced largely by a professional few—are the two most important connecting ideas running through any consideration of the subject. In dance, the connection between the two concepts is stronger than in some other arts, and neither can exist without the other.</p>
            <div>
            <Row xs={1} md={2} className="g-4">
                {
                    survices.slice(0, 4).map(survice => <HomeData key={survice.key} survice={survice}></HomeData>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Home;