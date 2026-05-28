import { useState, useCallback, useMemo } from 'react';
import { questions, type Dimension } from '../data/questions';
import { results, type TestResult, type PersonalityCode } from '../data/results';

// 测试阶段类型
export type QuizPhase = 'home' | 'testing' | 'calculating' | 'result';

// 每个维度的得分统计
interface DimensionScore {
  total: number;      // 该维度总分
  count: number;      // 已答题数
}

// 维度百分比结果
export interface DimensionPercent {
  dimension: Dimension;
  name: string;
  leftLabel: string;
  rightLabel: string;
  leftPercent: number;   // 左侧百分比
  rightPercent: number;  // 右侧百分比
  totalScore: number;    // 原始总分
}

// Hook 返回的状态和方法接口
export interface UseQuizReturn {
  // 状态
  phase: QuizPhase;
  currentIndex: number;
  answers: Record<number, number>;
  result: TestResult | null;
  currentQuestion: typeof questions[0];
  progress: number;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  dimensionPercents: DimensionPercent[];

  // 方法
  startQuiz: () => void;
  answerQuestion: (score: number) => void;
  prevQuestion: () => void;
  resetQuiz: () => void;
}

// 维度代码映射（根据得分 >=24 或 <24 决定）
// F/Z: 发疯(F) >=24 | 佛系(Z) <24
// L/J: 摆烂(L) >=24 | 内卷(J) <24
// C/T: 脆皮(C) >=24 | 铁人(T) <24
// S/N: 社恐(S) >=24 | 社牛(N) <24
const DIMENSION_THRESHOLD = 24;

const getDimensionCode = (dimension: Dimension, score: number): string => {
  const isHigh = score >= DIMENSION_THRESHOLD;
  switch (dimension) {
    case 'FZ':
      return isHigh ? 'F' : 'Z';
    case 'LJ':
      return isHigh ? 'L' : 'J';
    case 'CT':
      return isHigh ? 'C' : 'T';
    case 'SN':
      return isHigh ? 'S' : 'N';
    default:
      return '';
  }
};

// 计算人格代码
const calculatePersonalityCode = (answers: Record<number, number>): PersonalityCode => {
  // 初始化四个维度的得分统计
  const dimensionScores: Record<Dimension, DimensionScore> = {
    FZ: { total: 0, count: 0 },
    LJ: { total: 0, count: 0 },
    CT: { total: 0, count: 0 },
    SN: { total: 0, count: 0 },
  };

  // 累加各维度得分
  Object.entries(answers).forEach(([questionId, score]) => {
    const question = questions.find(q => q.id === Number(questionId));
    if (question) {
      dimensionScores[question.dimension].total += score;
      dimensionScores[question.dimension].count += 1;
    }
  });

  // 生成4位人格代码（按 FZ -> LJ -> CT -> SN 的顺序）
  const code = [
    getDimensionCode('FZ', dimensionScores.FZ.total),
    getDimensionCode('LJ', dimensionScores.LJ.total),
    getDimensionCode('CT', dimensionScores.CT.total),
    getDimensionCode('SN', dimensionScores.SN.total),
  ].join('');

  return code as PersonalityCode;
};

// 查找测试结果
const findResult = (code: PersonalityCode): TestResult | null => {
  return results.find(r => r.code === code) || null;
};

export const useQuiz = (): UseQuizReturn => {
  // 当前测试阶段
  const [phase, setPhase] = useState<QuizPhase>('home');
  // 当前题目索引（0-31）
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // 用户答题记录：题目ID -> 得分（1-5）
  const [answers, setAnswers] = useState<Record<number, number>>({});
  // 最终测试结果
  const [result, setResult] = useState<TestResult | null>(null);

  // 当前题目
  const currentQuestion = useMemo(() => {
    return questions[currentIndex];
  }, [currentIndex]);

  // 进度百分比
  const progress = useMemo(() => {
    return ((currentIndex + 1) / questions.length) * 100;
  }, [currentIndex]);

  // 是否是第一题
  const isFirstQuestion = useMemo(() => {
    return currentIndex === 0;
  }, [currentIndex]);

  // 是否是最后一题
  const isLastQuestion = useMemo(() => {
    return currentIndex === questions.length - 1;
  }, [currentIndex]);

  // 开始测试：重置所有状态
  const startQuiz = useCallback(() => {
    setPhase('testing');
    setCurrentIndex(0);
    setAnswers({});
    setResult(null);
  }, []);

  // 回答当前题目
  const answerQuestion = useCallback((score: number) => {
    // 记录当前题目的得分
    const newAnswers = { ...answers, [currentQuestion.id]: score };
    setAnswers(newAnswers);

    if (isLastQuestion) {
      // 最后一题：进入计算状态
      setPhase('calculating');

      // 2秒后计算结果并跳转到结果页
      setTimeout(() => {
        const personalityCode = calculatePersonalityCode(newAnswers);
        const testResult = findResult(personalityCode);
        setResult(testResult);
        setPhase('result');
      }, 2000);
    } else {
      // 不是最后一题：进入下一题
      setCurrentIndex(prev => prev + 1);
    }
  }, [answers, currentQuestion.id, isLastQuestion]);

  // 返回上一题
  const prevQuestion = useCallback(() => {
    if (!isFirstQuestion) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [isFirstQuestion]);

  // 重新测试
  const resetQuiz = useCallback(() => {
    setPhase('home');
    setCurrentIndex(0);
    setAnswers({});
    setResult(null);
  }, []);

  // 计算各维度百分比（用于结果页展示）
  const dimensionPercents = useMemo((): DimensionPercent[] => {
    const dimensionScores: Record<Dimension, DimensionScore> = {
      FZ: { total: 0, count: 0 },
      LJ: { total: 0, count: 0 },
      CT: { total: 0, count: 0 },
      SN: { total: 0, count: 0 },
    };

    Object.entries(answers).forEach(([questionId, score]) => {
      const question = questions.find(q => q.id === Number(questionId));
      if (question) {
        dimensionScores[question.dimension].total += score;
        dimensionScores[question.dimension].count += 1;
      }
    });

    const dimensionInfoMap: Record<Dimension, { name: string; leftLabel: string; rightLabel: string }> = {
      FZ: { name: '发疯/佛系', leftLabel: '发疯', rightLabel: '佛系' },
      LJ: { name: '摆烂/内卷', leftLabel: '摆烂', rightLabel: '内卷' },
      CT: { name: '脆皮/铁人', leftLabel: '脆皮', rightLabel: '铁人' },
      SN: { name: '社恐/社牛', leftLabel: '社恐', rightLabel: '社牛' },
    };

    const maxScore = 40; // 每维度8题，每题最高5分
    const minScore = 8;  // 每维度8题，每题最低1分

    return (Object.keys(dimensionScores) as Dimension[]).map(dim => {
      const info = dimensionInfoMap[dim];
      const score = dimensionScores[dim].total;
      // 将分数映射到 0-100%（minScore 对应 0%，maxScore 对应 100%）
      const normalizedScore = Math.max(0, Math.min(100, ((score - minScore) / (maxScore - minScore)) * 100));
      return {
        dimension: dim,
        name: info.name,
        leftLabel: info.leftLabel,
        rightLabel: info.rightLabel,
        leftPercent: Math.round(normalizedScore),
        rightPercent: Math.round(100 - normalizedScore),
        totalScore: score,
      };
    });
  }, [answers]);

  return {
    // 状态
    phase,
    currentIndex,
    answers,
    result,
    currentQuestion,
    progress,
    isFirstQuestion,
    isLastQuestion,
    dimensionPercents,

    // 方法
    startQuiz,
    answerQuestion,
    prevQuestion,
    resetQuiz,
  };
};
