/**
 * 页面底部组件
 * 提供额外的学习资源和链接，采用天空之城风格的自然配色
 */
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Book, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const resources = [
    {
      title: '官方文档',
      description: 'gRPC 官方文档和教程',
      icon: Book,
      url: 'https://grpc.io/docs/',
      color: 'from-sky-400/80 to-sky-600/80'
    },
    {
      title: 'GitHub 仓库',
      description: '查看源码和示例项目',
      icon: Github,
      url: 'https://github.com/grpc/grpc-go',
      color: 'from-slate-400/80 to-slate-600/80'
    },
    {
      title: '社区讨论',
      description: '加入 gRPC 社区讨论',
      icon: MessageCircle,
      url: 'https://groups.google.com/g/grpc-io',
      color: 'from-emerald-400/80 to-emerald-600/80'
    }
  ];

  return (
    <footer className="py-16 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            继续你的 gRPC 学习之旅
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            探索更多资源，加入社区，与全世界的开发者一起交流学习
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <motion.a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="block p-6 bg-stone-50/10 backdrop-blur-sm rounded-2xl hover:bg-stone-50/20 transition-all duration-300 group border border-stone-200/20"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg flex items-center space-x-2">
                    <span>{resource.title}</span>
                    <ExternalLink className="w-4 h-4 opacity-60" />
                  </h3>
                </div>
              </div>
              <p className="text-slate-300 text-sm">
                {resource.description}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-stone-200/20"
        >
          <p className="text-slate-400 text-sm">
            Made with ❤️ for gRPC learners everywhere
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;