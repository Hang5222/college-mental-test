import { motion } from 'framer-motion';
import { RotateCcw, Share2, Quote, Lightbulb, Activity, FileText } from 'lucide-react';
import type { TestResult } from '../data/results';
import type { DimensionPercent } from '../hooks/useQuiz';

function getResultImageUrl(index: number): string {
  return new URL(`../assets/image/${index}.jpg`, import.meta.url).href;
}

interface ResultViewProps {
  result: TestResult;
  dimensionPercents: DimensionPercent[];
  onReset: () => void;
}

export default function ResultView({ result, dimensionPercents, onReset }: ResultViewProps) {
  const handleShare = async () => {
    const shareText = `我在「当代大学生精神状态体检报告」中被诊断为「${result.name}」！\n\n语录：${result.quote}\n\n快来测测你的精神状态人格吧！`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: '当代大学生精神状态体检报告',
          text: shareText,
        });
      } catch {
        // 用户取消分享
      }
    } else {
      await navigator.clipboard.writeText(shareText);
      alert('结果已复制到剪贴板！');
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 px-4 py-8 relative overflow-hidden">
      {/* 背景横线 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 27px, #000 27px, #000 28px)',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto relative z-10"
      >
        {/* 报告标题 */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-6 pt-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm border border-gray-200">
            <FileText className="w-4 h-4 text-red-500" />
            <span className="text-sm font-bold text-gray-800" style={{ fontFamily: 'serif' }}>
              当代大学生精神状态体检报告
            </span>
          </div>
        </motion.div>

        {/* 报告单主体 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 border border-gray-200 relative">
          {/* 顶部红色装饰条 */}
          <div className="h-2 bg-red-500" />

          {/* 红色印章 */}
          <div className="absolute top-4 right-4 opacity-20 rotate-[-12deg] pointer-events-none">
            <div className="w-16 h-16 rounded-full border-4 border-red-500 flex items-center justify-center">
              <span className="text-red-500 text-lg font-black" style={{ fontFamily: 'serif' }}>
                已诊
              </span>
            </div>
          </div>

          <div className="p-6 text-center">
            {/* 结果表情包 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mb-4 w-48 h-48 rounded-lg overflow-hidden shadow-md border-2 border-gray-200"
            >
              <img
                src={getResultImageUrl(result.imageIndex)}
                alt={result.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 人格代码 */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="inline-block text-xs font-medium text-gray-400 tracking-wider mb-2"
              style={{ fontFamily: 'monospace' }}
            >
              {result.code}
            </motion.span>

            {/* 诊断名称 */}
            <h1 className="text-2xl font-black text-gray-900 mb-2" style={{ fontFamily: 'serif' }}>
              {result.name}
            </h1>

            {/* 语录 */}
            <div className="relative bg-amber-50 rounded-lg p-4 mt-4 border border-amber-100">
              <Quote className="absolute top-2 left-2 w-5 h-5 text-amber-300" />
              <p className="text-gray-600 text-sm italic pl-4 leading-relaxed" style={{ fontFamily: 'serif' }}>
                "{result.quote}"
              </p>
            </div>
          </div>
        </div>

        {/* 状态分析 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200"
        >
          <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2" style={{ fontFamily: 'serif' }}>
            <Activity className="w-4 h-4 text-red-500" />
            状态分析
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'monospace' }}>
            {result.analysis}
          </p>
        </motion.div>

        {/* 生存建议 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-amber-50 rounded-lg shadow-md p-6 mb-8 border border-amber-200"
        >
          <h3 className="text-sm font-bold text-amber-800 mb-3 flex items-center gap-2" style={{ fontFamily: 'serif' }}>
            <Lightbulb className="w-4 h-4 text-amber-600" />
            生存建议
          </h3>
          <p className="text-sm text-amber-700 leading-relaxed" style={{ fontFamily: 'monospace' }}>
            {result.advice}
          </p>
        </motion.div>

        {/* 维度分析 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200"
        >
          <h3 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2" style={{ fontFamily: 'serif' }}>
            <Activity className="w-4 h-4 text-red-500" />
            四维分析
          </h3>
          <div className="space-y-5">
            {dimensionPercents.map((dim, index) => (
              <motion.div
                key={dim.dimension}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-gray-500" style={{ fontFamily: 'monospace' }}>{dim.leftLabel}</span>
                  <span className="text-xs font-bold text-gray-700" style={{ fontFamily: 'serif' }}>{dim.name}</span>
                  <span className="text-xs font-medium text-gray-500" style={{ fontFamily: 'monospace' }}>{dim.rightLabel}</span>
                </div>
                {/* 双向进度条 */}
                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${dim.leftPercent}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-red-500"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${dim.rightPercent}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-amber-500"
                    />
                  </div>
                  {/* 中心线 */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/50 -translate-x-1/2" />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-red-600 font-medium" style={{ fontFamily: 'monospace' }}>{dim.leftPercent}%</span>
                  <span className="text-xs text-amber-600 font-medium" style={{ fontFamily: 'monospace' }}>{dim.rightPercent}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 操作按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onReset}
            className="flex-1 py-3.5 px-6 bg-white text-gray-700 rounded-lg font-semibold text-sm shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center justify-center gap-2"
            style={{ fontFamily: 'monospace' }}
          >
            <RotateCcw className="w-4 h-4" />
            重新测试
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleShare}
            className="flex-1 py-3.5 px-6 bg-red-500 text-white rounded-lg font-semibold text-sm shadow-md hover:bg-red-600 transition-all flex items-center justify-center gap-2"
            style={{ fontFamily: 'monospace' }}
          >
            <Share2 className="w-4 h-4" />
            分享结果
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
