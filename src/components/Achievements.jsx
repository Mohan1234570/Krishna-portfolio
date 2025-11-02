import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaCertificate, FaAward, FaMedal } from 'react-icons/fa'
import './Achievements.css'

const Achievements = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const achievements = [
    {
      title: 'First Prize - Technical Quiz',
      date: 'May 2019',
      icon: <FaTrophy />,
      description: 'Secured first position in technical quiz competition',
      gradient: 'gradient-1',
    },
    {
      title: "Runner's Up - Technical Hackathon",
      date: 'August 2021',
      icon: <FaMedal />,
      description: 'Achieved runner-up position in technical hackathon',
      gradient: 'gradient-2',
    },
  ]

  const certifications = [
    {
      title: 'Java Full-Stack Development Professional Certificate',
      icon: <FaCertificate />,
      description:
        'Completed an in-depth program covering Java, Spring Boot, RESTful APIs, React.js, and full-stack application development.',
      gradient: 'gradient-1',
    },
    {
      title: 'Advanced Graph Algorithms and Data Structures',
      icon: <FaAward />,
      description:
        'Gained expertise in graph algorithms, shortest path, network flows, and optimization techniques with practical implementations.',
      gradient: 'gradient-3',
    },
  ]

  return (
    <section id="achievements" className="achievements section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Achievements & Certifications
        </motion.h2>

        <div className="achievements-content">
          <div className="achievements-section">
            <motion.h3
              className="section-subtitle"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Achievements
            </motion.h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className={`achievement-card ${achievement.gradient}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <span className="achievement-date">{achievement.date}</span>
                  <p className="achievement-description">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="certifications-section">
            <motion.h3
              className="section-subtitle"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Certifications
            </motion.h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className={`certification-card ${cert.gradient}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="certification-icon">{cert.icon}</div>
                  <h4 className="certification-title">{cert.title}</h4>
                  <p className="certification-description">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
