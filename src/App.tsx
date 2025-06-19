/**
 * gRPC 学习 Landing Page 主组件
 * 整合所有子模块，提供完整的学习页面体验
 */
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import QuickStart from './components/QuickStart'
import BestPractices from './components/BestPractices'
import Footer from './components/Footer'
// import './App.css'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-emerald-50 to-stone-100">
      <Header />
      <Hero />
      <Features />
      <QuickStart />
      <BestPractices />
      <Footer />
    </div>
  );
};

export default App