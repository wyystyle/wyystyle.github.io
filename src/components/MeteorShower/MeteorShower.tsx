import React, { useEffect, useRef } from 'react';

const MeteorShower: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布大小为屏幕宽高
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 设置背景颜色为黑色
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 定义泡泡类
    class Bubble {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      color: string;
      canvas: HTMLCanvasElement;

      constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 10 + 5;
        this.speedX = Math.random() * 5 - 2; // 随机水平速度
        this.speedY = Math.random() * 5 - 2; // 随机垂直速度
        this.color = this.getRandomColor();
      }

      getRandomColor(): string {
        const r = Math.floor(Math.random() * 156) + 100; // 确保红色通道值在100到255之间
        const g = Math.floor(Math.random() * 156) + 100; // 确保绿色通道值在100到255之间
        const b = Math.floor(Math.random() * 156) + 100; // 确保蓝色通道值在100到255之间
        const a = Math.random() * 0.5 + 0.5; // 透明度在0.5到1之间
        return `rgba(${r}, ${g}, ${b}, ${a})`;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // 添加渐变效果
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // 边界检测
        if (this.x - this.radius < 0 || this.x + this.radius > this.canvas.width) {
          this.speedX = -this.speedX;
        }
        if (this.y - this.radius < 0 || this.y + this.radius > this.canvas.height) {
          this.speedY = -this.speedY;
        }
      }
    }

    // 创建泡泡数组
    const bubbles: Bubble[] = [];
    for (let i = 0; i < 50; i++) {
      bubbles.push(new Bubble(canvas));
    }

    // 动画循环
    let animationFrameId: number;
    function animate() {
      if (!canvas || !ctx) return; // 检查 canvas 和 ctx 是否为 null

      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((bubble) => {
        bubble.draw(ctx);
        bubble.update();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // 清理动画循环
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas style={{ width: '100%', height: '100%' ,position: 'fixed' , zIndex: '-1' , pointerEvents: 'none' , background: 'transparent'  }} ref={canvasRef} />;
};

export default MeteorShower;