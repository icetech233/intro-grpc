/**
 * 快速入门指南组件
 * 提供步骤化的 gRPC 学习路径，采用天空之城风格配色
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Play, Code2, FileText, Rocket } from 'lucide-react';
import HoverCard from '../HoverCard';

const QuickStart: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: '安装工具',
      icon: Play,
      description: '安装 Protocol Buffers 编译器和 Go 插件',
      code: `# 安装 protoc 编译器
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

# 验证安装
protoc --version`,
      explanation: 'protoc 是 Protocol Buffers 的编译器，用于生成各种语言的代码'
    },
    {
      title: '定义服务',
      icon: FileText,
      description: '创建 .proto 文件定义服务接口',
      code: `syntax = "proto3";

package hello;
option go_package = "./hello";

// 定义服务
service Greeter {
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

// 请求消息
message HelloRequest {
  string name = 1;
}

// 响应消息
message HelloReply {
  string message = 1;
}`,
      explanation: '.proto 文件使用 Protocol Buffers 语法定义服务接口和消息格式'
    },
    {
      title: '生成代码',
      icon: Code2,
      description: '使用 protoc 编译器生成 Go 代码',
      code: `# 生成 Go 代码
protoc --go_out=. --go_opt=paths=source_relative \\
       --go-grpc_out=. --go-grpc_opt=paths=source_relative \\
       hello.proto

# 生成的文件
# hello.pb.go        - 消息类型定义
# hello_grpc.pb.go   - 服务接口定义`,
      explanation: 'protoc 会根据 .proto 文件生成对应语言的代码，包括消息类型和服务接口'
    },
    {
      title: '实现服务',
      icon: Rocket,
      description: '编写服务端代码实现定义的服务',
      code: `package main

import (
    "context"
    "log"
    "net"
    
    "google.golang.org/grpc"
    pb "./hello"
)

type server struct {
    pb.UnimplementedGreeterServer
}

func (s *server) SayHello(ctx context.Context, req *pb.HelloRequest) (*pb.HelloReply, error) {
    return &pb.HelloReply{
        Message: "Hello " + req.GetName(),
    }, nil
}

func main() {
    lis, err := net.Listen("tcp", ":50051")
    if err != nil {
        log.Fatalf("failed to listen: %v", err)
    }
    
    s := grpc.NewServer()
    pb.RegisterGreeterServer(s, &server{})
    
    log.Println("Server listening on :50051")
    if err := s.Serve(lis); err != nil {
        log.Fatalf("failed to serve: %v", err)
    }
}`,
      explanation: '实现 .proto 文件中定义的服务接口，并启动 gRPC 服务器'
    }
  ];

  return (
    <section id="quickstart" className="py-20 px-6 bg-gradient-to-br from-sky-50/50 to-emerald-50/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
              快速入门指南
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            跟随这些简单步骤，快速搭建你的第一个 gRPC 服务
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 步骤导航 */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-gradient-to-r from-sky-500/90 to-emerald-500/90 text-white shadow-xl'
                    : 'bg-stone-50/80 backdrop-blur-sm text-slate-700 hover:bg-stone-100/80'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    activeStep === index ? 'bg-white/20' : 'bg-gradient-to-br from-sky-400/80 to-emerald-400/80'
                  }`}>
                    <step.icon className={`w-6 h-6 ${
                      activeStep === index ? 'text-white' : 'text-white'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-sm">步骤 {index + 1}</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-lg">
                      <HoverCard
                        trigger={<span>{step.title}</span>}
                        content={step.explanation}
                      />
                    </h3>
                    <p className={`text-sm mt-1 ${
                      activeStep === index ? 'text-white/80' : 'text-slate-600'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 代码展示 */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-800 rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  </div>
                  <span className="text-slate-300 text-sm">
                    {steps[activeStep].title}
                  </span>
                </div>
                <pre className="text-emerald-300 text-sm overflow-x-auto">
                  <code>{steps[activeStep].code}</code>
                </pre>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;