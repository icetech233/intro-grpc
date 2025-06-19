/**
 * 英雄区域组件
 * 温暖的欢迎介绍，体现天空之城风格的自然感
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';
import HoverCard from '../HoverCard';

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6"
            >
              <Sparkles className="w-8 h-8 text-amber-400/80" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-600 via-emerald-500 to-sky-500 bg-clip-text text-transparent">
                探索 gRPC 的奇妙世界
              </span>
            </h1>
          </div>
          
          <div className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            让我们一起踏上这场温暖的学习之旅，从零开始掌握 
            <HoverCard
              trigger={<span className="text-emerald-600 font-semibold cursor-help border-b-2 border-dotted border-emerald-300">gRPC</span>}
              content="gRPC 是 Google 开发的现代化、高性能的远程过程调用框架，可以在任何环境中运行"
            />
            这个现代化的通信框架
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={scrollToFeatures}
              className="bg-gradient-to-r from-sky-500/90 to-emerald-500/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>开始探索</span>
              <ArrowDown className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-stone-50/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-stone-200/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400/80 to-sky-600/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">🚀</span>
                </div>
                <h3 className="font-semibold text-slate-700 mb-2">高性能</h3>
                <p className="text-sm text-slate-600">基于 HTTP/2 协议，支持双向流式传输</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/80 to-emerald-600/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">🌍</span>
                </div>
                <h3 className="font-semibold text-slate-700 mb-2">跨语言</h3>
                <p className="text-sm text-slate-600">支持多种编程语言，无缝集成</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400/80 to-orange-500/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">⚡</span>
                </div>
                <h3 className="font-semibold text-slate-700 mb-2">类型安全</h3>
                <p className="text-sm text-slate-600">强类型定义，编译时检查错误</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;