import { motion } from 'framer-motion';
import { Brain, ArrowRight, Sparkles } from 'lucide-react';

interface HomeViewProps {
  onStart: () => void;
}

export default function HomeView({ onStart }: HomeViewProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center px-6 py-12">     
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-md w-full text-center"
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
          是发疯还是佛系？摆烂还是内卷？
        </motion.p>

        {/* 特色标签 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {['发疯/佛系', '摆烂/内卷', '脆皮/铁人', '社恐/社牛'].map((tag) => (
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

        {/* 开始按钮 */}
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
      </motion.div>
    </div>
  );
}
