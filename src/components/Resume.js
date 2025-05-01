import React from 'react';
import { Container, Row, Col, Card, ListGroup, Image, OverlayTrigger, Tooltip } from 'react-bootstrap'; // Added OverlayTrigger, Tooltip
import resumeData from '../data/resumeData.json';
// Import specific icons from react-icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaUsersCog // Placeholder for Agile/Other
} from 'react-icons/fa';
import { SiExpress, SiJquery, SiMongodb } from 'react-icons/si'; // Icons from Simple Icons set

// Map skill names (lowercase) to icons and colors
const skillIcons = {
  'javascript (es6+)': { icon: <FaJsSquare color="#F7DF1E" />, name: 'JavaScript (ES6+)' },
  'html5': { icon: <FaHtml5 color="#E34F26" />, name: 'HTML5' },
  'css3': { icon: <FaCss3Alt color="#1572B6" />, name: 'CSS3' },
  'python': { icon: <FaPython color="#3776AB" />, name: 'Python' },
  'react': { icon: <FaReact color="#61DAFB" />, name: 'React' },
  'node.js': { icon: <FaNodeJs color="#339933" />, name: 'Node.js' },
  'express': { icon: <SiExpress color="#000000" />, name: 'Express' },
  'bootstrap': { icon: <FaBootstrap color="#7952B3" />, name: 'Bootstrap' },
  'jquery': { icon: <SiJquery color="#0769AD" />, name: 'jQuery' },
  'git': { icon: <FaGitAlt color="#F05032" />, name: 'Git' },
  'docker': { icon: <FaDocker color="#2496ED" />, name: 'Docker' },
  'mongodb': { icon: <SiMongodb color="#47A248" />, name: 'MongoDB' },
  'sql': { icon: <FaDatabase color="#4479A1" />, name: 'SQL' }, // Generic database icon for SQL
  'agile methodologies': { icon: <FaUsersCog color="#F38A2E" />, name: 'Agile Methodologies' },
  'restful apis': { icon: <FaDatabase color="#007ACC" />, name: 'RESTful APIs' }, // Reusing icon, adjust as needed
  'ui/ux principles': { icon: <FaUsersCog color="#FF6F61" />, name: 'UI/UX Principles' }, // Reusing icon, adjust as needed
};

function Resume() {
  const { personalInfo, experience, education, skills } = resumeData;

  // Updated helper function to render skills with icons AND names
  const renderSkills = (title, skillList) => (
    <div className="mb-4">
      <h5>{title}</h5>
      <Row xs={2} sm={3} md={4} lg={5} className="g-3"> {/* Responsive grid for skills */}
        {skillList.map((skill, index) => {
          const skillKey = skill.toLowerCase();
          const skillInfo = skillIcons[skillKey];
          const IconComponent = skillInfo ? skillInfo.icon : null;
          const skillName = skillInfo ? skillInfo.name : skill; // Use mapped name or original

          // Skip rendering if no icon mapping exists (optional, adjust as needed)
          if (!IconComponent) return null;

          return (
            <Col key={index} className="text-center">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id={`tooltip-${skillKey}`}>{skillName}</Tooltip>}
              >
                <div className="skill-item p-2">
                  <span className="display-5 mb-1"> {/* Adjusted size and margin */}
                    {React.cloneElement(IconComponent, { size: '1em' })}
                  </span>
                  <p className="mb-0 small">{skillName}</p> {/* Smaller text for name */}
                </div>
              </OverlayTrigger>
            </Col>
          );
        })}
      </Row>
    </div>
  );

  return (
    <section id="resume" className="content-section">
      <Container>
        <Row>
          {/* Personal Info/Summary Column */}
          <Col md={4} className="mb-4">
            <Card className="text-center">
              {/* Add Profile Image */}
              {personalInfo.profileImageUrl && (
                <Image 
                  src={personalInfo.profileImageUrl} 
                  roundedCircle 
                  fluid 
                  className="mx-auto mt-3 mb-3" 
                  style={{ maxWidth: '150px', border: '3px solid #dee2e6' }} 
                  alt={personalInfo.name}
                />
              )}
              <Card.Body>
                <Card.Title>{personalInfo.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{personalInfo.title}</Card.Subtitle>
                <Card.Text>{personalInfo.summary}</Card.Text>
                <hr />
                <p><strong>Email:</strong> {personalInfo.email}</p>
                <p><strong>Location:</strong> {personalInfo.location}</p>
                {/* Add links for LinkedIn/GitHub if they exist */}
                {personalInfo.linkedin && <Card.Link href={personalInfo.linkedin} target="_blank">LinkedIn</Card.Link>}
                {personalInfo.github && <Card.Link href={personalInfo.github} target="_blank">GitHub</Card.Link>}
              </Card.Body>
            </Card>
          </Col>

          {/* Experience & Education Column */}
          <Col md={8}>
            {/* Experience Section */}
            <h2 className="mb-4">Experience</h2>
            {experience.map((exp) => (
              <Card key={exp.id} className="mb-3">
                <Card.Body>
                  <Card.Title>{exp.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {exp.company} | {exp.years}
                  </Card.Subtitle>
                  <Card.Text>{exp.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}

            {/* Education Section */}
            <h2 className="mt-5 mb-4">Education</h2>
            {education.map((edu) => (
              <Card key={edu.id} className="mb-3">
                <Card.Body>
                  <Card.Title>{edu.institution}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {edu.degree} | {edu.years}
                  </Card.Subtitle>
                  <Card.Text>{edu.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}

            {/* Skills Section - Updated display */}
            <h2 className="mt-5 mb-4 text-center">Skills</h2> {/* Center title */}
            <Card>
              <Card.Body>
                {renderSkills("Programming Languages", skills.programmingLanguages)}
                <hr /> {/* Add separators */}
                {renderSkills("Frameworks & Libraries", skills.frameworksLibraries)}
                <hr />
                {renderSkills("Tools & Databases", skills.toolsDatabases)}
                <hr />
                {renderSkills("Other", skills.other)}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Resume;