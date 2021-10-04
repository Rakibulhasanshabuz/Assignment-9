import React from 'react';
import './Importance.css'

const Importance = () => {
    return (
        <div className="importance-container">
            <h1>Dance Club - <span className="dance-head">Danching Guru</span></h1>
            <h3 className="imp-head">Dance has a more Importance</h3>
            <h4 className="imp-head">Let's learn to Dance</h4>
            <div className="first-vlog">
                <h2>The aesthetics of dance</h2>
                <h3>Basic motives: self-expression and physical release</h3>
                <p>One of the most basic motives of dance is the expression and communication of emotion. People—and even certain animals—often dance as a way of releasing powerful feelings, such as sudden accesses of high spirits, joy, impatience, or anger. These motive forces can be seen not only in the spontaneous skipping, stamping, and jumping movements often performed in moments of intense emotion, but also in the more formalized movements of “set” dances, such as tribal war dances or festive folk dances. Here the dance helps to generate emotions as well as release them.

                People also dance for the pleasure of experiencing the body and the surrounding environment in new and special ways. Dance often involves movement being taken to an extreme, with, for example, the arms being flung or stretched out, the head lifted back, and the body arched or twisted. Also, it often involves a special effort or stylization, such as high kicks, leaps, or measured walks. Dance movements tend to be organized into a spatial or rhythmic pattern, tracing lines or circles on the ground, following a certain order of steps, or conforming to a pattern of regular accents or stresses.

                All of these characteristics may produce a state of mind and body that is very different from that of everyday experience. The dance requires unaccustomed patterns of muscular exertion and relaxation as well as an unusually intense or sustained expenditure of energy. The dancer may become intensely aware of the force of gravity and of a state of equilibrium or disequilibrium that normal activities do not generate. At the same time, the dance creates a very different perception of time and space for the dancer: time is marked by the rhythmic ordering of movement and by the duration of the dance, and space is organized around the paths along which the dancer travels or around the shapes made by the body.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1WIA6Yvj8Yg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <br />
                <small>Dance can, in fact, create a completely self-contained world for dancers, in which they are capable of physical effort, prowess, and endurance far beyond their normal powers. Sufi dervishes, as an extreme example, can whirl ecstatically for long stretches of time without appearing tired or giddy, and certain Indonesian dancers can strike daggers against their naked chests without causing apparent pain or injury.</small>
                <br />
                <img width="50%" src="https://cdn.britannica.com/48/82648-050-45E8E193/music-Merce-Cunningham-Dance-Company-Radiohead-Split.jpg" alt="" />
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <div>
                    <h2>Dance Studio</h2>
                    <p>There are so many reasons why dance is important to the health and development of our young people. ... Dance burns calories, strengthens muscles, improves balance, increases flexibility, and gives the heart a good workout. Dance has also been proven to increase cognitive development.</p>
                    <button className="start-button">Get Start</button>
                    </div>
                </div>
                <div className="col">
                    <img src="https://img.freepik.com/free-vector/hand-drawn-people-dancing-background_23-2148116971.jpg?size=626&ext=jpg" alt="" />
                </div>
            </div>
            <div className="third-vlog">
                <h1>Problems in defining dance</h1>
                <p>Self-expression and physical release may thus be seen as the two basic motives for dance. Dance itself, however, takes a wide variety of forms, from simple spontaneous activity to formalized art or from a social gathering where everyone participates to a theatrical event with dancers performing before an audience.</p>
                <img width="50%" src="https://cdn.britannica.com/45/5345-050-CA2AB863/Rock-painting-dance-performance-Tassili-n-Ajjer-Alg-hunters.jpg" 
                alt="" />
                <h3>Defining according to function</h3>
                <p>Within this broad spectrum of forms, dance fulfills a number of very different functions, including the religious, the military, and the social. Nearly all cultures have had, or still possess, dances that play an important part in religious ritual. There are dances in which the performers and even the spectators work themselves into a trance in order to transcend their ordinary selves and receive the powers of the gods or, as in the case of Indian temple dancers, in which the performers enact the stories of the gods as a way of worshiping them. In some early Christian communities, processions or formal dance patterns formed part of the prayer service.</p>
                <p>It is possible to view modern military marches and drilling procedures as descendants of the tribal war and hunting dances that have also been integral to many cultures. War dances, often using weapons and fighting movements, were used throughout history as a way of training soldiers and preparing them emotionally and spiritually for battle. Many hunting tribes performed dances in which the hunters dressed in animal skins and imitated the movements of their prey, thus acquiring the skills of the animal in question and, through sympathetic magic, gaining power over it.</p>
            </div>

        </div>
    );
};

export default Importance;