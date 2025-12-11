import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle, HelpCircle, ArrowRight } from 'lucide-react';

interface QuizSectionProps {
  quiz: QuizQuestion;
}

const QuizSection: React.FC<QuizSectionProps> = ({ quiz }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset state when the quiz question changes (e.g. navigation to next lesson)
  useEffect(() => {
    setSelectedOption(null);
    setIsSubmitted(false);
  }, [quiz]);

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
    }
  };

  const isCorrect = selectedOption === quiz.correctAnswer;

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 p-24 bg-blue-500/5 blur-3xl rounded-full -mr-12 -mt-12 pointer-events-none"></div>

      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
          <HelpCircle size={20} />
        </div>
        <h2 className="text-xl font-bold text-slate-100">Knowledge Check</h2>
      </div>

      <h3 className="text-lg font-medium text-slate-200 mb-6 leading-relaxed">
        {quiz.question}
      </h3>

      <div className="space-y-3 mb-8">
        {quiz.options.map((option, index) => {
          let optionStyle = "border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-blue-500/50 text-slate-300";
          
          if (isSubmitted) {
            if (index === quiz.correctAnswer) {
              optionStyle = "border-green-500/50 bg-green-500/10 text-green-300";
            } else if (index === selectedOption && index !== quiz.correctAnswer) {
              optionStyle = "border-red-500/50 bg-red-500/10 text-red-300";
            } else {
              optionStyle = "border-slate-800 bg-slate-900/50 text-slate-500 opacity-50";
            }
          } else if (selectedOption === index) {
            optionStyle = "border-blue-500 bg-blue-500/10 text-blue-100 shadow-[0_0_15px_rgba(59,130,246,0.15)]";
          }

          return (
            <button
              key={index}
              onClick={() => !isSubmitted && setSelectedOption(index)}
              disabled={isSubmitted}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${optionStyle}`}
            >
              <span className="font-medium">{option}</span>
              {isSubmitted && index === quiz.correctAnswer && (
                <CheckCircle size={20} className="text-green-500" />
              )}
              {isSubmitted && index === selectedOption && index !== quiz.correctAnswer && (
                <XCircle size={20} className="text-red-500" />
              )}
            </button>
          );
        })}
      </div>

      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={selectedOption === null}
          className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${
            selectedOption !== null
              ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          Check Answer
          <ArrowRight size={16} />
        </button>
      ) : (
        <div className={`p-4 rounded-xl border ${isCorrect ? 'bg-green-500/10 border-green-500/20' : 'bg-red-500/10 border-red-500/20'} animate-in fade-in slide-in-from-bottom-2`}>
          <div className="flex items-start gap-3">
            {isCorrect ? (
              <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={20} />
            ) : (
              <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
            )}
            <div>
              <p className={`font-bold mb-1 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {quiz.explanation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizSection;