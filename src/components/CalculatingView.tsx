import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

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

export default function CalculatingView() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-sm"
      >
        {/* 旋转图标 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="mb-8 inline-flex"
        >
          <Loader2 className="w-12 h-12 text-indigo-500" />
        </motion.div>

        {/* 标题 */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">
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
              className="w-2 h-2 rounded-full bg-indigo-300"
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
