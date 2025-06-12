import React from 'react';
import { motion } from 'framer-motion';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
          {number}
        </div>
        <div className="text-blue-600">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default StepCard; 