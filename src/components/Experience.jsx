import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Stryv.ai',
      location: 'Hyderabad, Telangana, India',
      period: 'Aug 2024 - Present',
      isCurrent: true,
      achievements: [
        {
          project: 'Blue Hub Admin Services (Enterprise Platform)',
          items: [
            'Architected, developed, and deployed a secure, cloud-native enterprise management platform for user onboarding, company creation, and Bluebook listings',
            'Improved operational efficiency by 40% through process automation and data-driven workflows',
            'Automated analytics pipelines using AWS and Azure DevOps for real-time business insights',
            'Collaborated cross-functionally to design an optics-alignment system leveraging reinforcement learning and IoT for intelligent automation and predictive maintenance',
          ],
        },
        {
          project: 'Bluebook Online Services (B2C Platform)',
          items: [
            'Developed distributed, event-driven systems for seamless B2C operations and real-time engagement',
            'Designed telemetry pipelines on Azure with Python and DOMO, cutting fault detection time by 45%',
            'Integrated secure Stripe payments, weather intelligence, and CI/CD-enabled microservices for scalable delivery',
          ],
        },
        {
          project: 'Key Contributions (General)',
          items: [
            'Developed robust REST APIs using Spring Boot and PostgreSQL with modular, fault-tolerant architecture',
            'Implemented JWT + MFA authentication to enhance application security and compliance',
            'Automated CI/CD deployments using Docker and Azure pipelines for reliable cloud delivery',
          ],
        },
      ],
    },
    {
      title: 'Backend Developer Intern',
      company: 'Stryv.ai',
      location: 'Hyderabad, Telangana, India',
      period: 'Jun 2024 - Aug 2024',
      isCurrent: false,
      achievements: [
        {
          project: 'Internship Experience',
          items: [
            'Worked on backend development tasks using Java and Spring Boot',
            'Gained hands-on experience with cloud platforms and microservices architecture',
            'Contributed to API development and database design',
          ],
        },
      ],
    },
  ]

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <FaBriefcase />
                </div>
                <div className="experience-info">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <div className="experience-meta">
                    <span className="experience-period">
                      <FaCalendar className="meta-icon" />
                      {exp.period}
                    </span>
                    <span className="experience-location">
                      <FaMapMarkerAlt className="meta-icon" />
                      {exp.location}
                    </span>
                  </div>
                  {exp.isCurrent && (
                    <span className="current-badge">Current Position</span>
                  )}
                </div>
              </div>

              <div className="experience-details">
                {exp.achievements.map((achievement, aIndex) => (
                  <motion.div
                    key={aIndex}
                    className="achievement-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: (index * 0.2) + (aIndex * 0.1) + 0.3 }}
                  >
                    <h5 className="achievement-project">{achievement.project}</h5>
                    <ul className="achievement-list">
                      {achievement.items.map((item, iIndex) => (
                        <motion.li
                          key={iIndex}
                          className="achievement-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: (index * 0.2) + (aIndex * 0.1) + (iIndex * 0.05) + 0.4,
                          }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
