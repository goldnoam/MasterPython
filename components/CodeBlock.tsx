import React, { useState } from 'react';
import { Copy, Check, Play, Terminal } from 'lucide-react';
import { simulateCodeOutput } from '../services/geminiService';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = async () => {
    setIsRunning(true);
    setOutput(null);
    try {
        const result = await simulateCodeOutput(code);
        setOutput(result);
    } catch (e) {
        setOutput("Error running simulation.");
    } finally {
        setIsRunning(false);
    }
  };

  return (
    <div className="my-6 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
        <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        </div>
        <div className="flex gap-2">
            <button 
                onClick={handleRun}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-colors"
                disabled={isRunning}
            >
                {isRunning ? (
                    <span className="animate-pulse">Running...</span>
                ) : (
                    <>
                        <Play size={14} />
                        Run Simulation
                    </>
                )}
            </button>
            <button 
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                {copied ? 'Copied' : 'Copy'}
            </button>
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed text-blue-100">
            <code>{code}</code>
        </pre>
      </div>
      
      {output && (
          <div className="border-t border-slate-800 bg-black/50 p-4">
              <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs uppercase tracking-wider font-semibold">
                  <Terminal size={12} />
                  <span>Output Simulation</span>
              </div>
              <pre className="font-mono text-sm text-green-400 whitespace-pre-wrap">{output}</pre>
          </div>
      )}
    </div>
  );
};

export default CodeBlock;
