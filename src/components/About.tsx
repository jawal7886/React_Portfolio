import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, GraduationCap as Graduation, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: 'Years of Experience', value: '2+', icon: Code },
    { label: 'Projects Completed', value: '15+', icon: Award },
    { label: 'Technologies Learned', value: '10+', icon: Graduation },
    { label: 'Coffee Cups', value: '1000+', icon: Heart },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer dedicated to creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Hello! I'm Sajawal Nazir
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate software developer with a Bachelor's degree in Computer Science 
                from Government College University Faisalabad (GCUF). With a CGPA of 3.5, I graduated 
                in 2024 and have been actively working on various web development projects.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in programming started during my university years, and I've since 
                developed expertise in modern web technologies including React.js, Next.js, and 
                full-stack development. I gained practical experience through my internship at 
                Avantcore Technologies, where I worked on real-world projects and collaborated 
                with experienced developers.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about creating user-friendly applications that solve real problems. 
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or learning about the latest trends in web development.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Clean Code'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="px-4 py-2 bg-gray-800/50 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all group"
              >
                <div className="text-center">
                  <div className="inline-flex p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg mb-4 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;