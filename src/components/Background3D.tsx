import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth) * 100;
      const yPos = (clientY / innerHeight) * 100;
      
      const shapes = containerRef.current.querySelectorAll('.floating-shape');
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        (shape as HTMLElement).style.transform = 
          `translate(${xPos * speed * 0.1}px, ${yPos * speed * 0.1}px) rotateX(${yPos * 0.1}deg) rotateY(${xPos * 0.1}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const shapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 10 + 20,
  }));

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, #00C8FF 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, #00ffcc 0%, transparent 50%)',
            'radial-gradient(circle at 40% 80%, #00C8FF 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, #00C8FF 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating geometric shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="floating-shape absolute"
          style={{
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg backdrop-blur-sm border border-blue-500/20 transform-gpu perspective-1000" />
        </motion.div>
      ))}

      {/* Particle effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background3D;