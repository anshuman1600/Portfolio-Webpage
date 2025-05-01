import React from 'react';
import { Container, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-scroll'; // Import Link for smooth scroll button
import { Fade } from "react-awesome-reveal"; // Import Fade for animation

// Define background images for the carousel
const carouselImages = [
  'https://www.datocms-assets.com/48294/1671537942-mern-stack-1-mern-stack.png?auto=format',
  'https://www.infomazeelite.com/wp-content/uploads/2022/12/MERN-Stack-Development.png',
  'https://www.aalpha.net/wp-content/uploads/2021/09/benefits-of-mern-stack.png' // Added variety
];

function Home() {

  const carouselItemStyle = {
    minHeight: '90vh', // Match previous hero height
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const captionStyle = {
    // Position caption more centrally if needed, adjust as necessary
    // top: '50%', 
    // transform: 'translateY(-50%)',
    // bottom: 'auto' 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add slight background to text for readability
    borderRadius: '5px',
    padding: '20px'
  };

  return (
    <Carousel id="home" fade interval={4000} pause={false} controls={false} indicators={false}> {/* Added Carousel props */}
      {carouselImages.map((imageUrl, index) => (
        <Carousel.Item 
          key={index} 
          style={{ 
            ...carouselItemStyle, 
            backgroundImage: `url('${imageUrl}')` 
          }}
        >
          {/* Content now inside Carousel.Caption */}
          <Container className="h-100 d-flex align-items-center justify-content-center text-center text-white">
            <Carousel.Caption style={captionStyle}>
                <Fade direction="down" triggerOnce>
                  <h1>Welcome to My Portfolio!</h1>
                </Fade>
                <Fade direction="up" delay={500} triggerOnce>
                  <p 
                    className="lead mb-4" 
                    style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}
                  >
                    Showcasing my skills and projects.
                  </p>
                  <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
                    <Button variant="primary" size="lg">View My Work</Button>
                  </Link>
                </Fade>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Home; 