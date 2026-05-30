import { motion } from 'framer-motion';
import { RotateCcw, Share2, Quote, Lightbulb, Activity } from 'lucide-react';
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
      // 复制到剪贴板
      await navigator.clipboard.writeText(shareText);
      alert('结果已复制到剪贴板！');
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto"
      >
        {/* 报告标题 */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-6 pt-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100">
            <Activity className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-bold text-gray-800">当代大学生精神状态体检报告</span>
          </div>
        </motion.div>

        {/* 报告单头部 */}
        <div className="bg-white rounded-3xl shadow-lg shadow-gray-100 overflow-hidden mb-6">
          {/* 顶部装饰条 */}
          <div className="h-3 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500" />

          <div className="p-6 text-center">
            {/* 结果表情包 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mb-4 w-48 h-48 rounded-2xl overflow-hidden shadow-md border border-gray-100"
            >
              <img
                src={getResultImageUrl(result.imageIndex)}
                alt={result.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 人格代码（纯文本） */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="inline-block text-xs font-medium text-gray-400 tracking-wider mb-2"
            >
              {result.code}
            </motion.span>

            {/* 诊断名称 */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {result.name}
            </h1>

            {/* 语录 */}
            <div className="relative bg-gray-50 rounded-2xl p-4 mt-4">
              <Quote className="absolute top-2 left-2 w-5 h-5 text-gray-300" />
              <p className="text-gray-600 text-sm italic pl-4 leading-relaxed">
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
          className="bg-white rounded-3xl shadow-lg shadow-gray-100 p-6 mb-6"
        >
          <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <Activity className="w-4 h-4 text-indigo-500" />
            状态分析
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {result.analysis}
          </p>
        </motion.div>

        {/* 生存建议 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-linear-to-br from-amber-50 to-orange-50 rounded-3xl shadow-lg shadow-gray-100 p-6 mb-8 border border-amber-100"
        >
          <h3 className="text-sm font-semibold text-amber-800 mb-3 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            生存建议
          </h3>
          <p className="text-sm text-amber-700 leading-relaxed">
            {result.advice}
          </p>
        </motion.div>        

        {/* 维度分析 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-lg shadow-gray-100 p-6 mb-6"
        >
          <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <Activity className="w-4 h-4 text-indigo-500" />
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
                  <span className="text-xs font-medium text-gray-500">{dim.leftLabel}</span>
                  <span className="text-xs font-semibold text-gray-700">{dim.name}</span>
                  <span className="text-xs font-medium text-gray-500">{dim.rightLabel}</span>
                </div>
                {/* 双向进度条 */}
                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${dim.leftPercent}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-linear-to-r from-indigo-500 to-indigo-400"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${dim.rightPercent}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-linear-to-l from-purple-500 to-purple-400"
                    />
                  </div>
                  {/* 中心线 */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/50 -translate-x-1/2" />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-indigo-600 font-medium">{dim.leftPercent}%</span>
                  <span className="text-xs text-purple-600 font-medium">{dim.rightPercent}%</span>
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
            className="flex-1 py-3.5 px-6 bg-white text-gray-700 rounded-2xl font-semibold text-sm shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            重新测试
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleShare}
            className="flex-1 py-3.5 px-6 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold text-sm shadow-lg shadow-indigo-200 hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            分享结果
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
