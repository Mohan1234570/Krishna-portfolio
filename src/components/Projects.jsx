import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaCalendar } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects = [
    {
      title: 'Blogging Platform Backend with Authentication & ABAC Security',
      period: 'Recent Project',
      description:
        'A Spring Boot backend API providing user authentication, password reset with OTP, and blog post management. Implements JWT authentication, role-based access control, and ABAC (Attribute-Based Access Control) for fine-grained permissions. Features secure password reset with OTP via email, comprehensive blog post CRUD operations with ABAC protection, and search functionality.',
      technologies: [
        'Java 17+',
        'Spring Boot',
        'Spring Security',
        'JWT',
        'Hibernate / JPA',
        'Maven',
        'MySQL / PostgreSQL',
        'Lombok',
      ],
      highlights: [
        'JWT authentication & authorization',
        'ABAC for fine-grained permissions',
        'OTP-based password reset',
        'Secure blog post management',
      ],
      gradient: 'gradient-1',
      githubUrl: 'https://github.com/Mohan1234570/-Job-search-Application',
      liveDemoUrl: null,
    },
    {
      title: 'Chat Book Application',
      period: 'Jun 2025 - Present',
      description:
        'Designing and developing a full-stack, AI-driven social chat platform supporting 1K+ concurrent users. Built scalable RESTful APIs and WebSocket communication channels for real-time, low-latency messaging. Integrated Large Language Models (LLMs) and Azure Cognitive Services for personalized, context-aware chat responses.',
      technologies: [
        'Java',
        'Spring Boot',
        'React.js',
        'AI',
        'LLMs',
        'WebSockets',
        'Azure Cognitive Services',
      ],
      highlights: [
        'Real-time messaging with WebSockets',
        'AI-powered context-aware responses',
        'Supports 1K+ concurrent users',
      ],
      gradient: 'gradient-2',
      githubUrl: 'https://github.com/Mohan1234570/Chatbook-Frontend-App',
      liveDemoUrl: null,
    },
    {
      title: 'Robust Payment Retry Mechanism',
      period: 'Jan 2024 - May 2024',
      description:
        'Developed a fault-tolerant, event-driven payment retry system for high-volume transactions achieving 99.9% reliability. Implemented asynchronous message queues and exponential backoff algorithms. Strengthened data integrity with secure token-based authentication and encrypted database transactions.',
      technologies: [
        'Java',
        'Spring Boot',
        'MySQL',
        'AWS',
        'Distributed Systems',
        'API Security',
      ],
      highlights: [
        '99.9% reliability for payment transactions',
        'Event-driven architecture',
        'Secure token-based authentication',
      ],
      gradient: 'gradient-3',
      githubUrl: 'https://github.com/Mohan1234570/Robust_Payment_RetryMechanism',
      liveDemoUrl: null,
    },
    {
      title: 'Integrity Eligibility System',
      period: 'Jan 2023 - Jun 2023',
      description:
        'Engineered a cloud-native eligibility management system for 50K+ Rhode Island citizens to access SNAP and CCAP benefits. Architected modular microservices with secure API integrations following SSDLC. Enhanced case-processing efficiency by 35% through process automation and optimized data pipelines.',
      technologies: [
        'Java',
        'Spring Boot',
        'REST APIs',
        'Microservices',
        'Azure Cloud',
        'SSDLC',
      ],
      highlights: [
        'Serves 50K+ users',
        '35% efficiency improvement',
        'Cloud-native microservices architecture',
      ],
      gradient: 'gradient-3',
      githubUrl: 'https://github.com/Mohan1234570/Integrity_Eligibility_System_APP_Admin_API',
      liveDemoUrl: null,
    },
  ]

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${project.gradient}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="project-header">
                <div className="project-icon">
                  <FaCalendar />
                </div>
                <span className="project-period">{project.period}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                {project.highlights.map((highlight, hIndex) => (
                  <span key={hIndex} className="highlight-badge">
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="project-technologies">
                <h4 className="tech-label">Technologies:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, tIndex) => (
                    <span key={tIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="link-icon" />
                  View Code
                </motion.a>
                {project.liveDemoUrl && (
                  <motion.a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="link-icon" />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
