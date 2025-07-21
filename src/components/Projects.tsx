import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Weather Forecast App',
      description: 'A comprehensive weather application built with React.js that provides real-time weather data, 5-day forecasts, and location-based weather information using the OpenWeather API.',
      technologies: ['React.js', 'OpenWeather API', 'CSS3', 'JavaScript'],
      features: [
        'Real-time weather data',
        '5-day weather forecast',
        'Location-based search',
        'Responsive design',
        'Weather icons and animations'
      ],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=500',
      demoLink: 'https://sajawalnazir.netlify.app/',
      githubLink: 'https://github.com/jawal7886/Weather-App',
      date: '2024',
      status: 'Completed'
    },
    {
      title: 'Interactive Quiz App',
      description: 'An engaging quiz application with multiple categories, timer functionality, and local storage for score tracking. Features smooth animations and user-friendly interface.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
      features: [
        'Multiple quiz categories',
        'Timer functionality',
        'Score tracking',
        'Local storage integration',
        'Progress indicators'
      ],
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=500',
      demoLink: '',
      githubLink: 'https://github.com/jawal7886/Quiz-App',
      date: '2023',
      status: 'Completed'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website showcasing my projects and skills, built with React and Bootstrap. Features smooth scrolling, contact form, and modern design principles.',
      technologies: ['React.js', 'Bootstrap', 'CSS3', 'JavaScript'],
      features: [
        'Responsive design',
        'Smooth scrolling navigation',
        'Contact form',
        'Project showcase',
        'Skills visualization'
      ],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      demoLink: '#',
      githubLink: '#',
      date: '2024',
      status: 'Completed'
    },
    {
      title: 'Expense Tracker App',
      description: 'A responsive portfolio website showcasing my projects and skills, built with React and Bootstrap. Features smooth scrolling, contact form, and modern design principles.',
      technologies: ['React.js', 'Bootstrap', 'CSS3', 'JavaScript'],
      features: [
        'Responsive design',
        'Smooth scrolling navigation',
        'Contact form',
        'Project showcase',
        'Skills visualization'
      ],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      demoLink: '',
      githubLink: 'https://github.com/jawal7886/Expense_Tracker_App',
      date: '2024',
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Project Image */}
                <motion.div
                  className={`relative overflow-hidden rounded-xl ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </motion.div>

                {/* Project Content */}
                <div className={`space-y-6 ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}>
                  <div>
                    <div className="flex items-center space-x-4 mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {project.date}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="flex items-center mb-3">
                      <Tag size={16} className="text-blue-400 mr-2" />
                      <span className="text-blue-400 font-semibold">Technologies Used</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    {project.demoLink && (
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    
                    <motion.a
                      href={project.githubLink}
                      className="flex items-center space-x-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      <span>Source Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/jawal7886?tab=repositories"
            className="inline-flex items-center space-x-2 px-8 py-4 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;