import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaCloud, FaCog, FaRocket } from 'react-icons/fa'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const features = [
    {
      icon: <FaCode />,
      title: 'Full-Stack Development',
      description: 'Expert in Java, Spring Boot, React.js, and modern web technologies',
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Architecture',
      description: 'Experience with AWS, Azure, and cloud-native application design',
    },
    {
      icon: <FaCog />,
      title: 'System Design',
      description: 'Designing scalable, distributed systems with microservices architecture',
    },
    {
      icon: <FaRocket />,
      title: 'Performance Optimization',
      description: 'Delivering high-performance solutions with 99.9% reliability',
    },
  ]

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-description">
              I'm a passionate Software Engineer with a strong foundation in full-stack
              development and cloud architecture. Currently working as a Software Engineer at
              <strong> Stryv.ai</strong>, where I've architected and deployed enterprise-grade
              platforms that improved operational efficiency by 40%.
            </p>
            <p className="about-description">
              My expertise spans across Java, Spring Boot, React.js, microservices architecture,
              and cloud technologies. I specialize in building scalable, secure, and
              high-performance applications that drive business value. With experience in both
              enterprise (B2B) and consumer-facing (B2C) platforms, I bring a versatile skill
              set to every project.
            </p>
            <p className="about-description">
              I'm particularly passionate about leveraging AI and machine learning to create
              intelligent, context-aware applications. My recent work includes integrating
              Large Language Models (LLMs) and Azure Cognitive Services into a real-time chat
              platform supporting 1K+ concurrent users.
            </p>
          </motion.div>

          <motion.div
            className="about-features"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
