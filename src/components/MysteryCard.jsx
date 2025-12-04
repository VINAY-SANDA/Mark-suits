import React from 'react';
import { motion } from 'motion/react';
import { FaLock } from 'react-icons/fa';

const MysteryCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 hover:border-[#FFFF00]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,0,0.15)]"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="p-6 rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(255,255,0,0.2)] transition-shadow duration-300"
        >
          <FaLock className="text-4xl text-gray-400 group-hover:text-[#FFFF00] transition-colors duration-300" />
        </motion.div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-[#FFFF00] transition-colors duration-300">
            Coming Soon
          </h3>
          <p className="text-gray-400 max-w-xs mx-auto text-sm leading-relaxed">
            My Recent works are still in progress
          </p>
        </div>

        {/* Loading/Pulse Effect */}
        <div className="flex gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="w-2 h-2 rounded-full bg-[#FFFF00]"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MysteryCard;
