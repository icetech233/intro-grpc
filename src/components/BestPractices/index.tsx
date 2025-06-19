/**
 * 最佳实践展示组件
 * 提供实用的 gRPC 开发建议和技巧，采用天空之城风格配色
 */
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Bug, 
  Database, 
  Monitor, 
  Users,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import HoverCard from '../HoverCard';

const BestPractices: React.FC = () => {
  const practices = [
    {
      category: '安全性',
      icon: Shield,
      color: 'from-rose-400/80 to-pink-500/80',
      tips: [
        {
          title: '使用 TLS 加密',
          description: '在生产环境中始终启用 TLS 加密传输',
          details: 'TLS 可以防止数据在传输过程中被窃听或篡改，确保通信安全',
          type: 'good'
        },
        {
          title: '实现认证机制',
          description: '使用 JWT 或其他认证方式验证客户端身份',
          details: '通过拦截器实现统一的身份认证，确保只有合法用户可以访问服务',
          type: 'good'
        }
      ]
    },
    {
      category: '性能优化',
      icon: Zap,
      color: 'from-amber-400/80 to-orange-500/80',
      tips: [
        {
          title: '合理使用流式 RPC',
          description: '对于大量数据传输，优先考虑流式 RPC',
          details: '流式 RPC 可以减少内存占用，提高传输效率，特别适合大文件传输',
          type: 'good'
        },
        {
          title: '避免阻塞调用',
          description: '在高并发场景下使用异步调用模式',
          details: '异步调用可以避免线程阻塞，提高系统的并发处理能力',
          type: 'warning'
        }
      ]
    },
    {
      category: '错误处理',
      icon: Bug,
      color: 'from-violet-400/80 to-indigo-500/80',
      tips: [
        {
          title: '使用标准错误码',
          description: '遵循 gRPC 状态码规范，提供清晰的错误信息',
          details: 'gRPC 定义了标准的状态码，如 NOT_FOUND、INVALID_ARGUMENT 等',
          type: 'good'
        },
        {
          title: '实现重试机制',
          description: '对于临时性错误，实现智能重试策略',
          details: '指数退避重试可以在网络抖动时提高请求成功率',
          type: 'good'
        }
      ]
    },
    {
      category: '数据设计',
      icon: Database,
      color: 'from-emerald-400/80 to-teal-500/80',
      tips: [
        {
          title: '合理设计消息结构',
          description: '避免过于复杂的嵌套结构，保持消息简洁',
          details: '简洁的消息结构有利于序列化性能，也便于维护和理解',
          type: 'good'
        },
        {
          title: '版本兼容性',
          description: '设计 API 时考虑向后兼容性',
          details: '使用字段编号而不是字段名，新增字段使用 optional，避免删除字段',
          type: 'warning'
        }
      ]
    },
    {
      category: '监控运维',
      icon: Monitor,
      color: 'from-sky-400/80 to-cyan-500/80',
      tips: [
        {
          title: '集成链路追踪',
          description: '使用 OpenTelemetry 等工具实现分布式追踪',
          details: '链路追踪可以帮助排查分布式系统中的性能问题和错误',
          type: 'good'
        },
        {
          title: '健康检查',
          description: '实现服务健康检查接口',
          details: 'gRPC 提供了标准的健康检查协议，便于负载均衡器监控服务状态',
          type: 'good'
        }
      ]
    },
    {
      category: '团队协作',
      icon: Users,
      color: 'from-pink-400/80 to-rose-500/80',
      tips: [
        {
          title: 'API 文档维护',
          description: '保持 .proto 文件的注释完整和更新',
          details: '良好的 API 文档可以减少团队沟通成本，提高开发效率',
          type: 'good'
        },
        {
          title: '代码生成自动化',
          description: '将代码生成集成到 CI/CD 流程中',
          details: '自动化代码生成可以确保客户端和服务端代码的一致性',
          type: 'good'
        }
      ]
    }
  ];

  return (
    <section id="practices" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-600 to-emerald-600 bg-clip-text text-transparent">
              最佳实践指南
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            遵循这些最佳实践，让你的 gRPC 应用更加稳定、高效和易维护
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-stone-50/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-stone-200/30"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${practice.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <practice.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl text-slate-700">
                  {practice.category}
                </h3>
              </div>

              <div className="space-y-4">
                {practice.tips.map((tip, tipIndex) => (
                  <motion.div
                    key={tipIndex}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-2xl border-l-4 ${
                      tip.type === 'good' 
                        ? 'bg-emerald-50/80 border-emerald-400/80' 
                        : 'bg-amber-50/80 border-amber-400/80'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {tip.type === 'good' ? (
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-700 mb-1">
                          <HoverCard
                            trigger={<span className="cursor-help">{tip.title}</span>}
                            content={tip.details}
                          />
                        </h4>
                        <p className="text-sm text-slate-600">
                          {tip.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestPractices;