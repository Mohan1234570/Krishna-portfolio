import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const education = [
    {
      degree: 'Bachelor of Technology in Mechanical Engineering',
      institution: 'Siddhartha Institute of Engineering & Technology',
      location: 'Hyderabad, Telangana, India',
      graduationDate: 'July 2022',
      focusAreas: [
        'Engineering Design',
        'Applied Mathematics',
        'Computational Methods',
      ],
      transition:
        'Developed strong software engineering skills through real-world projects, specializing in Java, Spring Boot, and Cloud Computing, aligned with modern software development practices.',
    },
  ]

  return (
    <section id="education" className="education section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="education-icon">
                <FaGraduationCap />
              </div>

              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>

                <div className="education-meta">
                  <span className="education-date">
                    <FaCalendar className="meta-icon" />
                    {edu.graduationDate}
                  </span>
                  <span className="education-location">
                    <FaMapMarkerAlt className="meta-icon" />
                    {edu.location}
                  </span>
                </div>

                <div className="education-focus">
                  <h5 className="focus-title">Key Focus Areas:</h5>
                  <div className="focus-areas">
                    {edu.focusAreas.map((area, aIndex) => (
                      <motion.span
                        key={aIndex}
                        className="focus-badge"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + aIndex * 0.1 + 0.3,
                        }}
                      >
                        {area}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="education-transition">
                  <p className="transition-text">
                    <strong>Technical Transition:</strong> {edu.transition}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
