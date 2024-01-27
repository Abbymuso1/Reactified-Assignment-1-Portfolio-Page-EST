import React, { useState, useEffect } from 'react'

import "./jokes.css";

const Jokes = () => {
    const [joke, setJoke] = useState('');

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            if (!response.ok) {
                throw new Error('Failed to fetch joke');
            }
            const data = await response.json();
            setJoke(data.value);
        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    const handleGetJoke = () => {
        fetchJoke();
    };

    return (
        <section className="jokes section">
            <h2 className="section__title">Funny <span>Jokes</span></h2>

            <div className="container">
                <h2>Chuck Norris Jokes</h2>
                <p className='home__description'>{joke}</p>
                <button className="button" onClick={handleGetJoke}>Get Another Joke</button>
            </div>
        </section>
    );
};

export default Jokes