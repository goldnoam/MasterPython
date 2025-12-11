import React, { useState, useEffect } from 'react';
import { Copy, Check, Play, Terminal, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { parse } from 'marked';

interface CodeBlockProps {
  code: string;
  explanation?: string;
  expectedOutput?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, explanation, expectedOutput }) => {
  const [copied, setCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [formattedCode, setFormattedCode] = useState(code);

  useEffect(() => {
    // Reset formatted code when prop changes
    setFormattedCode(code);
    
    const formatCode = async () => {
      try {
        // Dynamic imports to prevent initial load crash
        const { format } = await import('prettier/standalone');
        const pythonPluginModule = await import('prettier/plugins/python');
        
        // Handle both default export (common in ESM) and named export scenarios
        // @ts-ignore
        const pythonPlugin = pythonPluginModule.default || pythonPluginModule;

        const formatted = await format(code, {
          parser: "python",
          plugins: [pythonPlugin],
          printWidth: 80,
        });
        setFormattedCode(formatted);
      } catch (e) {
        console.warn("Prettier formatting failed, using original code:", e);
        // Fallback to original code is already set
      }
    };
    formatCode();
  }, [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleOutput = () => {
    setShowOutput(!showOutput);
  };

  return (
    <div className="my-6 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
        <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        </div>
        <div className="flex gap-2">
            {expectedOutput && (
                <button 
                    onClick={toggleOutput}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-colors"
                >
                    <Play size={14} />
                    {showOutput ? 'Hide Output' : 'Run'}
                </button>
            )}
            
            {explanation && (
              <button 
                  onClick={() => setShowExplanation(!showExplanation)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${showExplanation ? 'bg-blue-600/20 text-blue-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
              >
                  <BookOpen size={14} />
                  Explain
                  {showExplanation ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            )}

            <button 
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                title="Copy code to clipboard"
            >
                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                {copied ? 'Copied' : 'Copy'}
            </button>
        </div>
      </div>
      
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed text-blue-100">
            <code>{formattedCode}</code>
        </pre>
      </div>

      {explanation && showExplanation && (
        <div className="border-t border-slate-800 bg-slate-900/50 p-6 animate-in slide-in-from-top-2 duration-200">
           <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <BookOpen size={14} />
              Code Analysis
           </h4>
           <div 
              className="prose prose-invert prose-sm max-w-none text-slate-400"
              dangerouslySetInnerHTML={{ __html: parse(explanation) as string }} 
           />
        </div>
      )}
      
      {showOutput && expectedOutput && (
          <div className="border-t border-slate-800 bg-black/50 p-4 animate-in slide-in-from-top-2">
              <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs uppercase tracking-wider font-semibold">
                  <Terminal size={12} />
                  <span>Terminal Output</span>
              </div>
              <pre className="font-mono text-sm text-green-400 whitespace-pre-wrap">{expectedOutput}</pre>
          </div>
      )}
    </div>
  );
};

export default CodeBlock;