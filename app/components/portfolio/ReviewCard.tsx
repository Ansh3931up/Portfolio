"use client";

import React from "react";
import { motion } from "framer-motion";

interface ReviewCardProps {
  name: string;
  body: string;
  img: string;
  description?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ name, body, img, description }) => {
  return (
    <motion.div
      className="relative w-[300px] sm:w-[350px] h-[200px] sm:h-[220px] mx-2 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative w-full h-full bg-gradient-to-br from-[#eb5e28]/10 to-[#252422]/20 backdrop-blur-sm rounded-xl border border-[#eb5e28]/20 overflow-hidden group">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-4 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#eb5e28] transition-colors">
              {name}
            </h3>
            <p className="text-sm text-gray-200 line-clamp-2">
              {body}
            </p>
            {description && (
              <p className="text-xs text-gray-300 mt-2 line-clamp-3">
                {description}
              </p>
            )}
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1 mt-2">
            {name.toLowerCase().includes('react') && (
              <span className="px-2 py-1 bg-[#eb5e28]/20 text-[#eb5e28] text-xs rounded-full border border-[#eb5e28]/30">
                React
              </span>
            )}
            {name.toLowerCase().includes('node') && (
              <span className="px-2 py-1 bg-[#eb5e28]/20 text-[#eb5e28] text-xs rounded-full border border-[#eb5e28]/30">
                Node.js
              </span>
            )}
            {name.toLowerCase().includes('typescript') && (
              <span className="px-2 py-1 bg-[#eb5e28]/20 text-[#eb5e28] text-xs rounded-full border border-[#eb5e28]/30">
                TypeScript
              </span>
            )}
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#eb5e28]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
};
