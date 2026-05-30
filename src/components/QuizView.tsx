import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ChevronLeft, Check } from 'lucide-react';
import type { Question } from '../data/questions';

interface QuizViewProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  progress: number;
  isFirstQuestion: boolean;
  onAnswer: (score: number) => void;
  onPrev: () => void;
  onGoHome: () => void;
}

const scoreLabels = [
  { score: 1, label: '完全不像', emoji: '😌' },
  { score: 2, label: '不太像', emoji: '🤔' },
  { score: 3, label: '一般', emoji: '😐' },
  { score: 4, label: '比较像', emoji: '😧' },
  { score: 5, label: '完全是我', emoji: '😭' },
];

export default function QuizView({
  question,
  currentIndex,
  totalQuestions,
  progress,
  isFirstQuestion,
  onAnswer,
  onPrev,
  onGoHome,
}: QuizViewProps) {
  const [selectedScore, setSelectedScore] = useState<number | null>(null);

  const handleConfirm = () => {
    if (selectedScore !== null) {
      onAnswer(selectedScore);
      setSelectedScore(null);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col relative overflow-hidden">
      {/* 背景横线 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 27px, #000 27px, #000 28px)',
      }} />

      {/* 顶部导航栏 */}
      <div className="sticky top-0 z-10 bg-amber-50/90 backdrop-blur-md border-b border-gray-200 px-4 py-3 relative">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onGoHome}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Home className="w-5 h-5 text-gray-600" />
          </motion.button>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-gray-500" style={{ fontFamily: 'monospace' }}>
                第 {currentIndex + 1} / {totalQuestions} 题
              </span>
              <span className="text-xs font-bold text-red-600" style={{ fontFamily: 'monospace' }}>
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-red-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 题目内容 */}
      <div className="flex-1 flex flex-col justify-center px-6 py-8 max-w-lg mx-auto w-full relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* 题号标签 */}
            <div className="inline-flex items-center gap-2">
              <span className="px-2.5 py-1 bg-red-500 text-white text-xs font-bold rounded" style={{ fontFamily: 'monospace' }}>
                Q{currentIndex + 1}
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* 题目文本 */}
            <h2 className="text-xl font-bold text-gray-900 leading-relaxed" style={{ fontFamily: 'serif' }}>
              {question.content}
            </h2>

            {/* 选项按钮 */}
            <div className="space-y-2.5">
              {scoreLabels.map((item, index) => (
                <motion.button
                  key={item.score}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ scale: 1.01, x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedScore(item.score)}
                  className={`w-full flex items-center gap-3 p-3.5 rounded-lg border transition-all group ${
                    selectedScore === item.score
                      ? 'bg-red-50 border-red-400 shadow-md'
                      : 'bg-white border-gray-200 hover:shadow-md hover:border-red-200'
                  }`}
                >
                  <span className="text-xl">{item.emoji}</span>
                  <div className="flex-1 text-left">
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        selectedScore === item.score
                          ? 'text-red-700'
                          : 'text-gray-700 group-hover:text-red-700'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      selectedScore === item.score
                        ? 'bg-red-500'
                        : 'bg-gray-100 group-hover:bg-red-100'
                    }`}
                  >
                    <span
                      className={`text-xs font-bold transition-colors ${
                        selectedScore === item.score
                          ? 'text-white'
                          : 'text-gray-500 group-hover:text-red-600'
                      }`}
                      style={{ fontFamily: 'monospace' }}
                    >
                      {item.score}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 底部操作栏 */}
      <div className="sticky bottom-0 z-10 bg-amber-50/90 backdrop-blur-md border-t border-gray-200 px-4 py-4">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onPrev}
            disabled={isFirstQuestion}
            className={`flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all ${
              isFirstQuestion
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 border border-gray-200 hover:shadow-md'
            }`}
            style={{ fontFamily: 'monospace' }}
          >
            <ChevronLeft className="w-4 h-4" />
            上一题
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleConfirm}
            disabled={selectedScore === null}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm transition-all ${
              selectedScore !== null
                ? 'bg-red-500 text-white shadow-md hover:bg-red-600'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            style={{ fontFamily: 'monospace' }}
          >
            <Check className="w-4 h-4" />
            确定
          </motion.button>
        </div>
      </div>
    </div>
  );
}
