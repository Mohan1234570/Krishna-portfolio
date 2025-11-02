import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowDown, FaDownload, FaUser } from 'react-icons/fa'
import { HiMail, HiPhone } from 'react-icons/hi'
import './Hero.css'

// Image source - Place your image in public/images/profile-photo.jpg
// For Vite, use absolute path starting with /
const profileImageSrc = '/images/profile-photo.jpg'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Try multiple image paths/extensions
  const imagePaths = [
    '/images/profile-photo.jpg',
    '/images/profile-photo.jpeg',
    '/images/profile-photo.png',
    '/images/profile-photo.webp',
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div
          className="cursor-follower"
          style={{
            transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`,
          }}
        />
      </div>

      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content-wrapper">
          <div className="hero-text-content">
            <motion.div variants={itemVariants} className="hero-greeting">
              <span className="greeting-text">Hello, I'm</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-name">
              <span className="name-first">Mohan Krishna</span>
              <span className="name-last">Gudumala</span>
            </motion.h1>

        <motion.div variants={itemVariants} className="hero-title">
          <span className="title-text">Software Engineer</span>
          <span className="title-separator">|</span>
          <span className="title-text">Full-Stack Developer</span>
        </motion.div>

        <motion.p variants={itemVariants} className="hero-description">
          Passionate Software Engineer specializing in building scalable, cloud-native
          applications. Experienced in Java, Spring Boot, React.js, and distributed systems
          architecture.
        </motion.p>

        <motion.div variants={itemVariants} className="hero-contact-info">
          <a href="mailto:mk4400320@gmail.com" className="contact-item">
            <HiMail className="contact-icon" />
            <span>mk4400320@gmail.com</span>
          </a>
          <a href="tel:+919182549398" className="contact-item">
            <HiPhone className="contact-icon" />
            <span>+91-9182-549-398</span>
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-buttons">
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
          >
            Get In Touch
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#about')}
          >
            <FaDownload className="btn-icon" />
            Learn More
          </motion.button>
        </motion.div>

          </div>

          <motion.div
            variants={itemVariants}
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="hero-image-container">
              {!imageError ? (
                <img
                  src={profileImageSrc}
                  alt="Mohan Krishna Gudumala"
                  className="hero-profile-image"
                  onError={() => {
                    console.error('❌ Image not found at:', profileImageSrc)
                    console.log('Full path should be: C:\\UI Workspace\\React js\\Krishna-portfolio\\public\\images\\profile-photo.jpg')
                    setImageError(true)
                  }}
                  onLoad={() => {
                    console.log('✅ Image loaded successfully!')
                    setImageLoaded(true)
                    setImageError(false)
                  }}
                />
              ) : (
                <div className="image-placeholder">
                  <FaUser className="placeholder-icon" />
                  <p className="placeholder-text">Image Not Found</p>
                  <p className="placeholder-hint">Add your image file:</p>
                  <p className="placeholder-hint" style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--primary-color)' }}>
                    public/images/profile-photo.jpg
                  </p>
                  <p className="placeholder-hint" style={{ fontSize: '0.7rem', marginTop: '0.3rem', color: 'var(--text-muted)' }}>
                    Full path: C:\UI Workspace\React js\Krishna-portfolio\public\images\profile-photo.jpg
                  </p>
                </div>
              )}
              <div className="image-gradient-overlay"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => scrollToSection('#about')}
        >
          <FaArrowDown className="scroll-icon" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
