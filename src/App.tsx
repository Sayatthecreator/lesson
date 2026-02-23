/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  RotateCcw, 
  Trophy, 
  Car, 
  Home, 
  Utensils, 
  Type as TypeIcon,
  AlertCircle
} from 'lucide-react';
import { exercises, Exercise, Question } from './data';

const ExerciseIcon = ({ id }: { id: string }) => {
  if (id.includes('vocab')) return <BookOpen className="w-5 h-5" />;
  if (id.includes('transport') || id.includes('odd')) return <Car className="w-5 h-5" />;
  if (id.includes('housing')) return <Home className="w-5 h-5" />;
  if (id.includes('food')) return <Utensils className="w-5 h-5" />;
  return <TypeIcon className="w-5 h-5" />;
};

export default function App() {
  const [activeExerciseId, setActiveExerciseId] = useState(exercises[0].id);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const activeExercise = exercises.find(e => e.id === activeExerciseId)!;

  const handleAnswerChange = (questionId: string, value: string | string[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    let currentScore = 0;
    activeExercise.questions.forEach(q => {
      const userAnswer = answers[q.id];
      if (Array.isArray(q.correctAnswer)) {
        // For multiple blanks in one question
        if (Array.isArray(userAnswer)) {
          const allCorrect = q.correctAnswer.every((ans, idx) => 
            userAnswer[idx]?.toLowerCase().trim() === ans.toLowerCase().trim()
          );
          if (allCorrect) currentScore++;
        }
      } else {
        if (typeof userAnswer === 'string' && userAnswer.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim()) {
          currentScore++;
        }
      }
    });
    setScore(currentScore);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  useEffect(() => {
    resetQuiz();
  }, [activeExerciseId]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#1A1A1A] font-sans flex">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-black/5 flex flex-col h-screen sticky top-0">
        <div className="p-8 border-bottom border-black/5">
          <h1 className="text-2xl font-medium tracking-tight flex items-center gap-2">
            <Trophy className="text-emerald-500" />
            Self-Test App
          </h1>
          <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider font-mono">English Practice 3b</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {exercises.map((ex) => (
            <button
              key={ex.id}
              onClick={() => setActiveExerciseId(ex.id)}
              className={`w-full text-left p-3 rounded-xl transition-all flex items-center gap-3 group ${
                activeExerciseId === ex.id 
                  ? 'bg-emerald-50 text-emerald-700 shadow-sm' 
                  : 'hover:bg-gray-50 text-gray-600'
              }`}
            >
              <div className={`p-2 rounded-lg ${activeExerciseId === ex.id ? 'bg-emerald-100' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                <ExerciseIcon id={ex.id} />
              </div>
              <span className="text-sm font-medium leading-tight">{ex.title}</span>
              {activeExerciseId === ex.id && <ChevronRight className="ml-auto w-4 h-4" />}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 max-w-4xl mx-auto">
        <motion.div
          key={activeExerciseId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <header className="mb-12">
            <h2 className="text-4xl font-medium tracking-tight mb-4">{activeExercise.title}</h2>
            <p className="text-lg text-gray-500 italic font-serif">{activeExercise.description}</p>
          </header>

          <div className="space-y-8">
            {activeExercise.questions.map((q, idx) => (
              <div key={q.id} className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono text-gray-400 mt-1">0{idx + 1}</span>
                  <div className="flex-1">
                    <p className="text-lg mb-6 leading-relaxed">{q.text}</p>
                    
                    {q.type === 'multiple-choice' || q.type === 'odd-one-out' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {q.options?.map((opt) => (
                          <button
                            key={opt}
                            disabled={showResults}
                            onClick={() => handleAnswerChange(q.id, opt)}
                            className={`p-4 rounded-xl border text-left transition-all ${
                              answers[q.id] === opt
                                ? 'bg-emerald-500 text-white border-emerald-500'
                                : 'bg-white border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/30'
                            } ${
                              showResults && opt === q.correctAnswer
                                ? 'ring-2 ring-emerald-500 ring-offset-2'
                                : ''
                            } ${
                              showResults && answers[q.id] === opt && opt !== q.correctAnswer
                                ? 'bg-red-500 border-red-500'
                                : ''
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {Array.isArray(q.correctAnswer) ? (
                          <div className="flex flex-wrap gap-4">
                            {q.correctAnswer.map((_, i) => (
                              <input
                                key={i}
                                type="text"
                                placeholder={`Blank ${i + 1}`}
                                disabled={showResults}
                                value={(answers[q.id] as string[])?.[i] || ''}
                                onChange={(e) => {
                                  const newArr = [...((answers[q.id] as string[]) || [])];
                                  newArr[i] = e.target.value;
                                  handleAnswerChange(q.id, newArr);
                                }}
                                className={`p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none w-48 ${
                                  showResults 
                                    ? (answers[q.id] as string[])?.[i]?.toLowerCase().trim() === (q.correctAnswer as string[])[i].toLowerCase().trim()
                                      ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                                      : 'bg-red-50 border-red-200 text-red-700'
                                    : ''
                                }`}
                              />
                            ))}
                          </div>
                        ) : (
                          <input
                            type="text"
                            placeholder="Type your answer..."
                            disabled={showResults}
                            value={(answers[q.id] as string) || ''}
                            onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                            className={`w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none ${
                              showResults 
                                ? (answers[q.id] as string)?.toLowerCase().trim() === (q.correctAnswer as string).toLowerCase().trim()
                                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                                  : 'bg-red-50 border-red-200 text-red-700'
                                : ''
                            }`}
                          />
                        )}
                        {showResults && (
                          <div className="flex items-center gap-2 text-sm mt-2">
                            {((Array.isArray(q.correctAnswer) && (answers[q.id] as string[])?.every((v, i) => v?.toLowerCase().trim() === q.correctAnswer[i].toLowerCase().trim())) ||
                             (!Array.isArray(q.correctAnswer) && (answers[q.id] as string)?.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim())) ? (
                              <span className="text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Correct</span>
                            ) : (
                              <span className="text-red-600 flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" /> 
                                Correct answer: <span className="font-medium">{Array.isArray(q.correctAnswer) ? q.correctAnswer.join(', ') : q.correctAnswer}</span>
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <footer className="mt-12 flex items-center justify-between pb-24">
            {!showResults ? (
              <button
                onClick={calculateScore}
                className="bg-[#1A1A1A] text-white px-8 py-4 rounded-xl font-medium hover:bg-black transition-all shadow-lg shadow-black/10 flex items-center gap-2"
              >
                Check Answers
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex items-center gap-6">
                <div className="bg-white px-8 py-4 rounded-2xl border border-black/5 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl">
                    {score}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-mono">Your Score</p>
                    <p className="text-lg font-medium">out of {activeExercise.questions.length}</p>
                  </div>
                </div>
                <button
                  onClick={resetQuiz}
                  className="bg-white border border-gray-200 text-gray-600 px-8 py-4 rounded-xl font-medium hover:bg-gray-50 transition-all flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Try Again
                </button>
              </div>
            )}
          </footer>
        </motion.div>
      </main>
    </div>
  );
}
