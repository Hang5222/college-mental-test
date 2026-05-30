import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardList, ArrowRight, Clock, Trash2, ChevronRight, ChevronLeft, History, FileText } from 'lucide-react';
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
    <div className="min-h-screen bg-amber-50 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 27px, #000 27px, #000 28px)',
      }} />

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {!showHistory ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center min-h-screen px-6 py-12"
            >
              <div className="max-w-md w-full text-center">
                {/* 顶部印章装饰 */}
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="mb-6 inline-flex items-center justify-center"
                >
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-4 border-red-500/80 flex items-center justify-center rotate-[-8deg]">
                      <div className="w-20 h-20 rounded-full border-2 border-red-500/60 flex items-center justify-center">
                        <ClipboardList className="w-10 h-10 text-red-500" />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-red-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                      体检
                    </div>
                  </div>
                </motion.div>

                {/* 标题 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-2"
                >
                  <div className="inline-block border-b-2 border-red-500/60 pb-1 mb-1">
                    <span className="text-xs font-mono text-red-500 tracking-widest">NO.2026-001</span>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="text-3xl font-black text-gray-900 mb-1 leading-tight"
                  style={{ fontFamily: 'serif' }}
                >
                  当代大学生
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-red-600 mb-4"
                  style={{ fontFamily: 'serif' }}
                >
                  精神状态体检报告
                </motion.h1>

                {/* 副标题 */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-500 mb-6 text-sm leading-relaxed"
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
                  className="flex flex-wrap justify-center gap-2 mb-8"
                >
                  {['发疯/佛系', '玄学/唯物', '脆皮/铁人', '社恐/社牛'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded text-xs font-medium bg-white text-gray-600 border border-gray-200 shadow-sm"
                      style={{ fontFamily: 'monospace' }}
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
                  className="bg-white rounded-lg p-4 mb-8 border border-gray-200 relative"
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-red-400 to-red-500" />
                  <div className="flex items-center justify-center gap-1 mb-2 text-red-500">
                    <FileText className="w-4 h-4" />
                    <span className="text-xs font-bold tracking-wider">注意事项</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'monospace' }}>
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
                  className="group w-full py-4 px-8 bg-red-500 text-white rounded-lg font-bold text-lg shadow-md hover:shadow-lg hover:bg-red-600 transition-all flex items-center justify-center gap-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10">开始测试</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </motion.button>

                {/* 底部信息 */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-4 text-xs text-gray-400"
                  style={{ fontFamily: 'monospace' }}
                >
                  预计用时 2-3 分钟 · 共 32 题
                </motion.p>

                {/* 查看历史记录入口 */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  onClick={() => setShowHistory(true)}
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:shadow-md transition-all"
                  style={{ fontFamily: 'monospace' }}
                >
                  <History className="w-4 h-4 text-red-500" />
                  查看历史记录
                  {history.length > 0 && (
                    <span className="ml-0.5 px-1.5 py-0.5 rounded bg-red-100 text-red-600 text-xs font-bold">
                      {history.length}
                    </span>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="history"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="min-h-screen pt-28 px-6 pb-16"
            >
              {/* 历史记录头部 */}
              <div className="fixed top-0 left-0 right-0 z-10 px-6 py-3 bg-amber-50/95 backdrop-blur-sm flex items-center gap-3 border-b border-gray-200">
                <button
                  onClick={() => setShowHistory(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <h2 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'serif' }}>历史记录</h2>
                {history.length > 0 && (
                  <button
                    onClick={onClearHistory}
                    className="ml-auto flex items-center gap-1 text-xs text-gray-400 hover:text-red-500 transition-colors px-2 py-1 rounded-lg hover:bg-gray-100"
                    style={{ fontFamily: 'monospace' }}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    清空
                  </button>
                )}
              </div>

              <div className="max-w-md mx-auto">
                {history.length === 0 ? (
                  <div className="text-center py-16">
                    <Clock className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                    <p className="text-sm text-gray-400" style={{ fontFamily: 'monospace' }}>还没有测试记录</p>
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
                        className="w-full flex items-center gap-3 p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all text-left"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-800 truncate" style={{ fontFamily: 'serif' }}>
                            {findResultName(record.code)}
                          </div>
                          <div className="text-xs text-gray-400 mt-1 flex items-center gap-1.5" style={{ fontFamily: 'monospace' }}>
                            <span className="text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded text-[10px]">
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
              </div>

              <p className="fixed bottom-4 left-0 right-0 text-center text-sm text-gray-500" style={{ fontFamily: 'monospace' }}>
                只能查找同一设备同一浏览器的本地记录
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
