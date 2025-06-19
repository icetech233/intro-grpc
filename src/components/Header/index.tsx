/**
 * 页面头部导航组件
 * 提供简洁的导航功能，采用天空之城风格的自然配色
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Book, Home, Compass, Star } from 'lucide-react';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: '首页', icon: Home },
    { id: 'features', label: '特性', icon: Star },
    { id: 'quickstart', label: '快速入门', icon: Book },
    { id: 'practices', label: '最佳实践', icon: Compass },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 bg-stone-50/90 backdrop-blur-md shadow-lg rounded-b-3xl border-b border-stone-200/50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-sky-400/80 to-emerald-400/80 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-slate-600 to-emerald-600 bg-clip-text text-transparent">
              gRPC 学习之旅
            </h1>
          </motion.div>

          <div className="flex space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-stone-100/80 to-emerald-100/80 hover:from-stone-200/80 hover:to-emerald-200/80 text-slate-700 font-medium transition-all duration-300 shadow-sm"
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden md:inline">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;