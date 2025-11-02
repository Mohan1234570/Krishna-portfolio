import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaDocker,
  FaAws,
  FaNode,
  FaGitAlt,
} from 'react-icons/fa'
import { SiSpringboot, SiPostgresql, SiMysql, SiMicrosoftazure } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', icon: <FaJava />, level: 95 },
        { name: 'Python', icon: <FaPython />, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 90 },
        { name: 'SQL', icon: <SiPostgresql />, level: 88 },
        { name: 'C++', icon: <FaJs />, level: 80 },
        { name: 'Bash', icon: <FaJs />, level: 75 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Spring Boot', icon: <SiSpringboot />, level: 95 },
        { name: 'React.js', icon: <FaReact />, level: 90 },
        { name: 'Node.js', icon: <FaNode />, level: 85 },
        { name: 'FastAPI', icon: <FaPython />, level: 80 },
        { name: 'Material-UI', icon: <FaReact />, level: 85 },
        { name: 'TensorFlow', icon: <FaPython />, level: 75 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', icon: <FaAws />, level: 90 },
        { name: 'Azure', icon: <SiMicrosoftazure />, level: 88 },
        { name: 'Docker', icon: <FaDocker />, level: 85 },
        { name: 'GitHub Actions', icon: <FaGitAlt />, level: 87 },
        { name: 'CI/CD', icon: <FaDocker />, level: 90 },
        { name: 'IaC', icon: <FaAws />, level: 80 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 90 },
        { name: 'MySQL', icon: <SiMysql />, level: 88 },
        { name: 'Database Design', icon: <SiPostgresql />, level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="additional-title">Core Engineering Skills</h3>
          <div className="additional-tags">
            {[
              'Data Structures & Algorithms',
              'System Design',
              'Scalable Distributed Systems',
              'Performance Optimization',
              'AI-Powered Feature Integration',
              'Cross-Functional Collaboration',
              'Agile Development Practices',
              'API Security',
              'Authentication & Authorization',
              'Microservices Architecture',
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="additional-tag"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
