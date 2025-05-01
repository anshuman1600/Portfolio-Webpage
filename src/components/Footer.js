import React from 'react';
import { Container } from 'react-bootstrap';
// Optionally import social icons
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    // Use CSS variables for colors
    <footer 
      className="mt-5 p-4 text-center" 
      style={{ backgroundColor: 'var(--dark-color)', color: 'var(--light-color)' }}
    >
      <Container>
        {/* Optional: Add social links 
        <div className="mb-3">
          <a href="#" className="text-light me-3"><FaGithub size="1.5em" /></a>
          <a href="#" className="text-light me-3"><FaLinkedin size="1.5em" /></a>
          <a href="#" className="text-light"><FaTwitter size="1.5em" /></a>
        </div>
        */} 
        <p className="mb-0">&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer; 