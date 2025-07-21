import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      type: 'work',
      title: 'Software Developer Intern',
      company: 'Avantcore Technologies',
      location: 'Remote',
      period: '2024 - Present',
      description: 'Gained hands-on experience in full-stack web development, working on real-world projects using React.js, PHP, and Laravel. Collaborated with senior developers to implement new features and optimize existing applications.',
      achievements: [
        'Developed responsive web applications using React.js and modern CSS frameworks',
        'Worked with Laravel and PHP for backend development',
        'Participated in code reviews and learned best practices',
        'Collaborated with design team to implement pixel-perfect UI components'
      ],
      technologies: ['React.js', 'Laravel', 'PHP', 'MySQL', 'Git'],
      icon: Briefcase
    }
  ];

  const education = [
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      company: 'Government College University Faisalabad (GCUF)',
      location: 'Faisalabad, Pakistan',
      period: '2020 - 2024',
      description: 'Comprehensive study of computer science fundamentals including programming, algorithms, data structures, software engineering, and database management systems.',
      achievements: [
        'CGPA: 3.5/4.0',
        'Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering',
        'Participated in programming competitions and hackathons',
        'Completed final year project on web application development'
      ],
      technologies: ['HTML', 'CSS', 'Python', 'JavaScript', 'SQL'],
      icon: GraduationCap
    }
  ];

  const timelineItems = [...experiences, ...education].sort((a, b) => {
    const yearA = parseInt(a.period.split(' - ')[0]);
    const yearB = parseInt(b.period.split(' - ')[0]);
    return yearB - yearA;
  });

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8 pl-20 md:pl-0' : 'md:pl-8 pl-20 md:pr-0'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          item.type === 'work' 
                            ? 'bg-blue-500/20 text-blue-400' 
                            : 'bg-green-500/20 text-green-400'
                        }`}>
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {item.title}
                          </h3>
                          <p className="text-blue-400 font-semibold">
                            {item.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {item.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {item.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <Award size={16} className="mr-2 text-yellow-400" />
                        Key {item.type === 'work' ? 'Achievements' : 'Highlights'}:
                      </h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.type === 'work'
                                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                : 'bg-green-500/20 text-green-400 border border-green-500/30'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Connect</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;