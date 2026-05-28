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
  { score: 4, label: '比较像', emoji: '😅' },
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
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col">
      {/* 顶部导航栏 */}
      <div className="sticky top-0 z-10 bg-white/70 backdrop-blur-md border-b border-gray-100 px-4 py-3">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          {/* 返回首页按钮 */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onGoHome}
            className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <Home className="w-5 h-5 text-gray-600" />
          </motion.button>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-gray-500">
                第 {currentIndex + 1} / {totalQuestions} 题
              </span>
              <span className="text-xs font-medium text-indigo-600">
                {Math.round(progress)}%
              </span>
            </div>
            {/* 进度条 */}
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-linear-to-r from-indigo-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 题目内容 */}
      <div className="flex-1 flex flex-col justify-center px-6 py-8 max-w-lg mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* 题目文本 */}
            <h2 className="text-xl font-semibold text-gray-800 leading-relaxed">
              {question.content}
            </h2>

            {/* 选项按钮 */}
            <div className="space-y-3">
              {scoreLabels.map((item, index) => (
                <motion.button
                  key={item.score}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedScore(item.score)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border shadow-sm transition-all group ${
                    selectedScore === item.score
                      ? 'bg-indigo-50 border-indigo-300 shadow-md'
                      : 'bg-white border-gray-100 hover:shadow-md hover:border-indigo-200'
                  }`}
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-semibold transition-colors ${
                          selectedScore === item.score
                            ? 'text-indigo-700'
                            : 'text-gray-700 group-hover:text-indigo-700'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      selectedScore === item.score
                        ? 'bg-indigo-500'
                        : 'bg-gray-100 group-hover:bg-indigo-100'
                    }`}
                  >
                    <span
                      className={`text-xs font-bold transition-colors ${
                        selectedScore === item.score
                          ? 'text-white'
                          : 'text-gray-500 group-hover:text-indigo-600'
                      }`}
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
      <div className="sticky bottom-0 z-10 bg-white/70 backdrop-blur-md border-t border-gray-100 px-4 py-4">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          {/* 上一题按钮 */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onPrev}
            disabled={isFirstQuestion}
            className={`flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm transition-all ${
              isFirstQuestion
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 border border-gray-200 hover:shadow-md'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            上一题
          </motion.button>

          {/* 确定按钮 */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleConfirm}
            disabled={selectedScore === null}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-sm transition-all ${
              selectedScore !== null
                ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200 hover:shadow-xl'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Check className="w-4 h-4" />
            确定
          </motion.button>
        </div>
      </div>
    </div>
  );
}
