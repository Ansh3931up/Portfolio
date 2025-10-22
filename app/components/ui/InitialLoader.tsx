"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InitialLoaderProps {
  onComplete: () => void;
}

export const InitialLoader: React.FC<InitialLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");

  useEffect(() => {
    const loadingSteps = [
      { text: "Loading assets...", duration: 800 },
      { text: "Preparing portfolio...", duration: 600 },
      { text: "Almost ready...", duration: 400 },
      { text: "Welcome!", duration: 200 }
    ];

    let currentStep = 0;
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += 2;
      setProgress(Math.min(currentProgress, 100));

      if (currentStep < loadingSteps.length && currentProgress >= (currentStep + 1) * 25) {
        setLoadingText(loadingSteps[currentStep].text);
        currentStep++;
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#252422] to-black"
      >
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#eb5e28] to-[#ca4713] rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-2xl font-bold text-white">AK</span>
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl font-bold text-white mb-4"
          >
            Ansh Kumar
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[#eb5e28] text-lg mb-8"
          >
            {loadingText}
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-64 h-2 bg-[#403d39] rounded-full overflow-hidden mx-auto"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#eb5e28] to-[#ca4713] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-gray-400 text-sm mt-4"
          >
            {progress}%
          </motion.p>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#eb5e28]/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
