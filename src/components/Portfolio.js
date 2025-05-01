import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import portfolioData from '../data/portfolioData.json';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function Portfolio() {
  return (
    <section id="portfolio" className="content-section">
      <Container>
        <h2 className="text-center mb-5">Portfolio</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {portfolioData.map((project) => (
            <Col key={project.id}>
              <Card className="h-100 shadow-sm project-card">
                <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-3">
                    <strong>Tech Stack:</strong>
                    <div className="mt-2">
                      {project.techStack.map((tech, index) => (
                        <Badge pill bg="info" className="me-1" key={index}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto d-flex justify-content-start">
                    {project.demoLink && (
                      <Button variant="primary" href={project.demoLink} target="_blank" className="me-2">
                        <FaExternalLinkAlt className="me-1" /> Demo
                      </Button>
                    )}
                    {project.repoLink && (
                      <Button variant="secondary" href={project.repoLink} target="_blank">
                        <FaGithub className="me-1" /> Code
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio; 