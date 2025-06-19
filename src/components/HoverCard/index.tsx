/**
 * 悬停提示卡片组件
 * 用于解释专业术语，提供友好的学习体验
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HoverCardProps {
  trigger: React.ReactNode;
  content: string;
  title?: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ trigger, content, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="cursor-help"
      >
        {trigger}
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-64 p-4 bg-white rounded-2xl shadow-xl border border-gray-200 -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full"
          >
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
            </div>
            
            {title && (
              <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
            )}
            <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HoverCard;
