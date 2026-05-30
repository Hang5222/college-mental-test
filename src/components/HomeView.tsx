import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, ArrowRight, Sparkles, Clock, Trash2, ChevronRight, ChevronLeft, History } from 'lucide-react';
import { results } from '../data/results';
import type { HistoryRecord } from '../utils/history';

interface HomeViewProps {
  onStart: () => void;
  history: HistoryRecord[];
  onViewHistory: (record: HistoryRecord) => void;
  onClearHistory: () => void;
}

function formatTime(timestamp: number): string {
  const date = new Date(timestamp);
  return `${date.getMonth() + 1}月${date.getDate()}日 ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

function findResultName(code: string): string {
  const r = results.find(item => item.code === code);
  return r?.name || code;
}

export default function HomeView({ onStart, history, onViewHistory, onClearHistory }: HomeViewProps) {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-md w-full"
      >
        <AnimatePresence mode="wait">
          {!showHistory ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {/* 顶部装饰 */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-linear-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-200"
              >
                <Brain className="w-10 h-10 text-white" />
              </motion.div>

              {/* 标题 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-gray-900 mb-3 leading-tight"
              >
                当代大学生
                <br />
                <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  精神状态体检报告
                </span>
              </motion.h1>

              {/* 副标题 */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-500 mb-8 text-sm leading-relaxed"
              >
                32道灵魂拷问，测出你的大学精神人格
                <br />
                是发疯还是佛系？玄学还是唯物？
              </motion.p>

              {/* 特色标签 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-2 mb-10"
              >
                {['发疯/佛系', '玄学/唯物', '脆皮/铁人', '社恐/社牛'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/80 text-gray-600 border border-gray-100 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* 免责声明 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 mb-8 border border-white/50"
              >
                <div className="flex items-center justify-center gap-1 mb-2 text-amber-500">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-semibold">幽默声明</span>
                  <Sparkles className="w-4 h-4" />
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  本测试仅供娱乐，结果不代表任何医学或心理学诊断。
                  <br />
                  如有不适，请多睡觉、少看手机、多和朋友聊天。
                </p>
              </motion.div>

              {/* 开始测试按钮 */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onStart}
                className="group w-full py-4 px-8 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 transition-shadow flex items-center justify-center gap-2"
              >
                开始测试
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* 底部信息 */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6 text-xs text-gray-400"
              >
                预计用时 2-3 分钟 · 共 32 题
              </motion.p>

              {/* 查看历史记录入口 */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                onClick={() => setShowHistory(true)}
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-100 text-sm font-medium text-gray-600 hover:bg-white hover:shadow-md transition-all"
              >
                <History className="w-4 h-4 text-indigo-500" />
                查看历史记录
                {history.length > 0 && (
                  <span className="ml-0.5 px-1.5 py-0.5 rounded-md bg-indigo-100 text-indigo-600 text-xs font-bold">
                    {history.length}
                  </span>
                )}
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="history"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="pt-14"
            >
              {/* 历史记录头部 */}
              <div className="fixed top-0 left-0 right-0 z-10 px-6 py-3 bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50/95 backdrop-blur-sm flex items-center gap-3 border-b border-gray-100/50">
                <button
                  onClick={() => setShowHistory(false)}
                  className="p-2 rounded-xl hover:bg-white/80 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <h2 className="text-lg font-bold text-gray-800">历史记录</h2>
                {history.length > 0 && (
                  <button
                    onClick={onClearHistory}
                    className="ml-auto flex items-center gap-1 text-xs text-gray-400 hover:text-red-500 transition-colors px-2 py-1 rounded-lg hover:bg-white/60"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    清空
                  </button>
                )}
              </div>

              {history.length === 0 ? (
                <div className="text-center py-16">
                  <Clock className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-400">还没有测试记录</p>
                  <p className="text-xs text-gray-300 mt-1">完成一次测试后，结果会出现在这里</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {history.map((record, index) => (
                    <motion.button
                      key={record.timestamp}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => onViewHistory(record)}
                      className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md hover:bg-white transition-all text-left"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-800 truncate">
                          {findResultName(record.code)}
                        </div>
                        <div className="text-xs text-gray-400 mt-1 flex items-center gap-1.5">
                          <span className="font-mono text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded text-[10px]">
                            {record.code}
                          </span>
                          <span>·</span>
                          <span>{formatTime(record.timestamp)}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-300 shrink-0" />
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
