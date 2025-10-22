"use client";

import { motion } from "framer-motion";
import { memo } from "react";

export const BackgroundShapes: React.FC = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-1/4 w-80 h-80 bg-red-700/5 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-red-800/5 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 15,
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-500/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

BackgroundShapes.displayName = 'BackgroundShapes';
