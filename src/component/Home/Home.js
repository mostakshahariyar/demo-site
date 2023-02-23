import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
        return (
                <div style={{ display: 'block', width: "100%", padding: 30 }}>
                        <Carousel>
                                <Carousel.Item interval={3000}>
                                        <img
                                                className="d-block w-100"
                                                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                                                alt="Image One"
                                        />
                                        <Carousel.Caption className='animate__animated animate__bounce'>
                                                <div>
                                                        <h3>Label for first slide</h3>
                                                        <p>Sample Text for Image One</p>
                                                </div>
                                        </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                        <img
                                                className="d-block w-100"
                                                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                                                alt="Image Two"
                                        />
                                        <Carousel.Caption>
                                                <h3>Label for second slide</h3>
                                                <p>Sample Text for Image Two</p>
                                        </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                        <img
                                                className="d-block w-100"
                                                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                                                alt="Image Two"
                                        />
                                        <Carousel.Caption>
                                                <h3>Label for second slide</h3>
                                                <p>Sample Text for Image Two</p>
                                        </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                        <img
                                                className="d-block w-100"
                                                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                                                alt="Image Two"
                                        />
                                        <Carousel.Caption>
                                                <h3>Label for second slide</h3>
                                                <p>Sample Text for Image Two</p>
                                        </Carousel.Caption>
                                </Carousel.Item>
                        </Carousel>
                </div>
        );
};

export default Home;