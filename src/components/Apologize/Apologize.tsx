import React, { useState } from 'react';
import './Apologize.css';

const Apologize: React.FC = () => {
  const apologyLines = [
    "💔 我们的友情程序抛出了未捕获的异常",
    "🌌 就像超新星爆发扰乱了星图导航",
    "🛸 我让沟通的量子信道产生了严重熵增",
    "⚛️ 在情感纠缠态中错误选择了坍缩方向",
    "💻 你的笑容是我永远无法覆盖的只读存储",
    "🔭 我们的回忆在内存池中形成永恒驻留",
    "🖥️ 我的心跳为你维持着持久时钟周期",
    "🌠 请允许我用余生的时间片重新调度",
    "🧬 你是我基因序列里无法突变的核心编码",
    "🪐 让我们在平行宇宙重新建立TCP连接",
    "💞 这次我会用AES-256加密守护承诺",
    "🔗 我们的关系将写入区块链永恒存证",
    "🚀 启动情感引擎进入光速补偿模式",
    "🛠️ 正在重新编译这颗为你跳动的心脏",
    "✅ 最终构建状态：永远属于你的浪漫程序"
  ];
  const [isRestarting, setIsRestarting] = useState(false);

  const handleRestartLove = () => {
    setIsRestarting(true);

    // 添加特效元素
    const createHearts = () => {
      for (let i = 0; i < 100; i++) {
        const heart = document.createElement('div');
        heart.className = 'quantum-heart';
        heart.innerHTML = '💖';
        document.body.appendChild(heart);

        // 动画设置
        heart.style.left = `${0 + (Math.random()) * 100}%`;
        heart.style.animation = `floatUp 1.5s ease-out ${i * 0.1}s forwards`;

        // 移除元素
        setTimeout(() => heart.remove(), 1500);
      }
    }

    // 触发特效
    createHearts();

    // 3秒后恢复初始状态
    setTimeout(() => setIsRestarting(false), 3000);
  };
  return (
    <div className="galaxy-container">
      <div className="poetic-apology">
        <h1 className="main-title animate-float">宇宙级道歉协议（Ms.Zhang）</h1>

        <div className="apology-content">
          {apologyLines.map((line, index) => (
            <p
              key={index}
              className="poetic-line animate-wave"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {line}
            </p>
          ))}
        </div>

        <div className="interactive-elements">
          <button
            className={`heartbeat-btn ${isRestarting ? 'restarting' : ''}`}
            onClick={handleRestartLove}
            disabled={isRestarting}
          >
            <span className="pulse-ring"></span>
            <span className="heart-icon">💗</span>
            <span className="btn-text">
              {isRestarting ? '协议重启中...✨' : '确认重启协议'}
            </span>
            <div className="flash-overlay"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apologize;