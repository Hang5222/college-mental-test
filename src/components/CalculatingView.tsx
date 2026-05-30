import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingTexts = [
  '正在扫描你的精神状态...',
  '分析你的表情包收藏夹...',
  '计算你的熬夜时长...',
  '检测你的Deadline完成率...',
  '读取你的社交能量条...',
  '评估你的脆皮程度...',
  '统计你的咆哮体使用频率...',
  '正在连接地府服务器...',
  '你的脑内剧场正在放映中...',
  '测量你的咖啡依赖指数...',
];

interface CalculatingViewProps {
  resultImageIndex: number;
}

export default function CalculatingView({ resultImageIndex }: CalculatingViewProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // 预加载结果图片
  useEffect(() => {
    const img = new Image();
    img.src = new URL(`../assets/image/${resultImageIndex}.webp`, import.meta.url).href;
  }, [resultImageIndex]);

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* 背景横线 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 27px, #000 27px, #000 28px)',
      }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-sm relative z-10"
      >
        {/* 印章动画 */}
        <motion.div
          className="mb-8 inline-flex"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-4 border-red-500/80 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-red-500/60 flex items-center justify-center">
                <motion.span
                  className="text-red-500 text-2xl font-black"
                  style={{ fontFamily: 'serif' }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  诊
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 标题 */}
        <h2 className="text-xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'serif' }}>
          正在生成体检报告
        </h2>

        {/* 轮播文案 */}
        <div className="h-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTextIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-gray-500"
              style={{ fontFamily: 'monospace' }}
            >
              {loadingTexts[currentTextIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* 进度点 */}
        <div className="flex justify-center gap-1.5 mt-6">
          {loadingTexts.slice(0, 5).map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-red-300"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
