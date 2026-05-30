import { AnimatePresence, motion } from 'framer-motion';
import { useQuiz } from './hooks/useQuiz';
import HomeView from './components/HomeView';
import QuizView from './components/QuizView';
import CalculatingView from './components/CalculatingView';
import ResultView from './components/ResultView';

function App() {
  const {
    phase,
    currentQuestion,
    currentIndex,
    progress,
    isFirstQuestion,
    result,
    dimensionPercents,
    history,
    resultImageIndex,
    startQuiz,
    answerQuestion,
    prevQuestion,
    resetQuiz,
    viewHistoryResult,
    clearHistory,
  } = useQuiz();

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {phase === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HomeView
              onStart={startQuiz}
              history={history}
              onViewHistory={viewHistoryResult}
              onClearHistory={clearHistory}
            />
          </motion.div>
        )}

        {phase === 'testing' && (
          <motion.div
            key="testing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <QuizView
              question={currentQuestion}
              currentIndex={currentIndex}
              totalQuestions={32}
              progress={progress}
              isFirstQuestion={isFirstQuestion}
              onAnswer={answerQuestion}
              onPrev={prevQuestion}
              onGoHome={resetQuiz}
            />
          </motion.div>
        )}

        {phase === 'calculating' && (
          <motion.div
            key="calculating"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CalculatingView resultImageIndex={resultImageIndex ?? 1} />
          </motion.div>
        )}

        {phase === 'result' && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ResultView
              result={result}
              dimensionPercents={dimensionPercents}
              onReset={resetQuiz}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
