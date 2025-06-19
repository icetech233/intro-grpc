/**
 * gRPC 特性展示组件
 * 以卡片形式展示 gRPC 的核心特性，采用天空之城风格的自然配色
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Shield, Code, Users, Layers } from 'lucide-react';
import HoverCard from '../HoverCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: '高性能通信',
      description: '基于 HTTP/2 协议，支持多路复用、流控制和服务器推送',
      details: 'HTTP/2 允许在单个连接上同时发送多个请求，大大提高了网络利用率',
      color: 'from-amber-400/80 to-orange-500/80'
    },
    {
      icon: Globe,
      title: '跨语言支持',
      description: '支持 Go、TypeScript、C#、Python、C++ 等多种语言',
      details: 'Protocol Buffers 作为接口定义语言，可以生成多种语言的客户端和服务端代码',
      color: 'from-sky-400/80 to-slate-500/80'
    },
    {
      icon: Shield,
      title: '类型安全',
      description: '强类型定义，编译时检查，减少运行时错误',
      details: '通过 .proto 文件定义服务接口，编译器会检查类型匹配，避免常见错误',
      color: 'from-emerald-400/80 to-teal-500/80'
    },
    {
      icon: Code,
      title: '代码生成',
      description: '自动生成客户端和服务端代码，减少样板代码',
      details: 'protoc 编译器可以根据 .proto 文件自动生成各种语言的代码',
      color: 'from-rose-400/80 to-pink-500/80'
    },
    {
      icon: Users,
      title: '流式处理',
      description: '支持客户端流、服务端流和双向流',
      details: '可以实现实时数据传输，如聊天应用、实时监控等场景',
      color: 'from-indigo-400/80 to-sky-500/80'
    },
    {
      icon: Layers,
      title: '拦截器支持',
      description: '灵活的中间件机制，便于添加认证、日志等功能',
      details: '拦截器可以在请求处理前后执行自定义逻辑，如身份验证、请求日志等',
      color: 'from-violet-400/80 to-emerald-500/80'
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-600 to-emerald-600 bg-clip-text text-transparent">
              gRPC 的核心特性
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            深入了解 gRPC 为现代应用程序带来的强大功能
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-stone-50/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-stone-200/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-700 mb-3">
                <HoverCard
                  trigger={<span className="cursor-help">{feature.title}</span>}
                  content={feature.details}
                />
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;