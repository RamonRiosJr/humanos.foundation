import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ClipboardX, BrainCircuit, HeartCrack, ListTodo, ChevronRight } from 'lucide-react';

const POLL_QUESTIONS = [
    {
        id: 'pages_filled',
        icon: ClipboardX,
        question: "What's the maximum number of intake forms you remember filling out while sick, in pain, or at a new specialist?",
        options: [
            { id: '1-4', label: "1 to 4 pages", mockVotes: 142 },
            { id: '5-10', label: "5 to 10 pages", mockVotes: 856 },
            { id: '10-15', label: "10 to 15 pages", mockVotes: 1204 },
            { id: '15-20', label: "15 to 20+ pages", mockVotes: 3450 }
        ]
    },
    {
        id: 'medical_recall',
        icon: BrainCircuit,
        question: "Are you genuinely able to accurately recall every medication name, dosage, and surgical procedure from the past 10 years by memory?",
        options: [
            { id: 'yes', label: "Yes, I remember it all perfectly", mockVotes: 112 },
            { id: 'mostly', label: "Mostly, but I miss some dates", mockVotes: 734 },
            { id: 'no', label: "No, it's impossible to remember it all", mockVotes: 4890 }
        ]
    },
    {
        id: 'doctor_attention',
        icon: HeartCrack,
        question: "After filling out the massive clipboard, do you feel the doctor actually had the time to read it and address all your needs?",
        options: [
            { id: 'yes', label: "Yes, they addressed everything", mockVotes: 245 },
            { id: 'rushed', label: "They tried, but seemed incredibly rushed", mockVotes: 2150 },
            { id: 'ignored', label: "No, they asked me the exact same questions again", mockVotes: 4210 }
        ]
    },
    {
        id: 'forgotten_details',
        icon: ListTodo,
        question: "How often do you leave the clinic, get to your car, or arrive home and instantly remember exactly what you actually needed to tell the doctor?",
        options: [
            { id: 'never', label: "Rarely or Never", mockVotes: 180 },
            { id: 'sometimes', label: "Sometimes", mockVotes: 1150 },
            { id: 'always', label: "Almost Every Single Time", mockVotes: 5120 }
        ]
    }
];

export default function IntakePoll() {
    // Current step in the poll
    const [currentStep, setCurrentStep] = useState(0);
    // User votes: { questionId: optionId }
    const [userVotes, setUserVotes] = useState({});
    // Should we show results for the current step?
    const [showResults, setShowResults] = useState(false);

    // Initialize from local storage if they already voted
    useEffect(() => {
        const stored = localStorage.getItem('humanos_intake_poll');
        if (stored) {
            setUserVotes(JSON.parse(stored));
        }
    }, []);

    const handleVote = (questionId, optionId) => {
        const newVotes = { ...userVotes, [questionId]: optionId };
        setUserVotes(newVotes);
        localStorage.setItem('humanos_intake_poll', JSON.stringify(newVotes));
        setShowResults(true);
    };

    const nextQuestion = () => {
        if (currentStep < POLL_QUESTIONS.length - 1) {
            setCurrentStep(c => c + 1);
            setShowResults(userVotes[POLL_QUESTIONS[currentStep + 1].id] !== undefined);
        }
    };

    const prevQuestion = () => {
        if (currentStep > 0) {
            setCurrentStep(c => c - 1);
            setShowResults(userVotes[POLL_QUESTIONS[currentStep - 1].id] !== undefined);
        }
    };

    // Calculate total votes dynamically
    const getOptionsWithPercentages = (question) => {
        const hasVotedThisQuestion = userVotes[question.id] !== undefined;
        
        let totalVotes = question.options.reduce((sum, opt) => sum + opt.mockVotes, 0);
        // If the user hasn't voted yet, we will add 1 to the total when they do.
        // If they have voted, we adjust the mock numbers to include their vote.
        if (hasVotedThisQuestion) totalVotes += 1;

        return question.options.map(opt => {
            const isSelected = userVotes[question.id] === opt.id;
            const actualVotes = opt.mockVotes + (isSelected ? 1 : 0);
            const percentage = Math.round((actualVotes / totalVotes) * 100);
            return {
                ...opt,
                actualVotes,
                percentage,
                isSelected
            };
        });
    };

    const isFinished = currentStep === POLL_QUESTIONS.length - 1 && showResults;

    const currentQ = POLL_QUESTIONS[currentStep];
    const CurrentIcon = currentQ.icon;
    const optionsData = getOptionsWithPercentages(currentQ);

    return (
        <section className="py-24 px-4 relative overflow-hidden bg-[#0d0d15] border-y border-white/5">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(0,212,255,0.05),transparent_50%)] pointer-events-none" />
            
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                        The Reality of Intake.
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
                        The current healthcare system operates on a fractured data model. Add your voice to the live diagnostic consensus as we build the case for patient data sovereignty.
                    </p>
                </div>

                <div className="glass p-6 md:p-10 rounded-3xl border border-white/10 relative z-10 shadow-[0_0_50px_rgba(0,212,255,0.03)]">
                    
                    {/* Progress Bar */}
                    <div className="flex gap-2 mb-8">
                        {POLL_QUESTIONS.map((_, idx) => (
                            <div 
                                key={idx} 
                                className={`h-1.5 flex-1 rounded-full overflow-hidden bg-white/5 transition-all duration-300 ${
                                    idx <= currentStep ? 'bg-white/10' : ''
                                }`}
                            >
                                {idx <= currentStep && (
                                    <motion.div 
                                        initial={{ width: 0 }} 
                                        animate={{ width: idx < currentStep || showResults ? '100%' : '50%' }} 
                                        className="h-full bg-cyan-400" 
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400">
                                <CurrentIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-2 block">
                                    Question {currentStep + 1} of {POLL_QUESTIONS.length}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                                    {currentQ.question}
                                </h3>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {optionsData.map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => !showResults && handleVote(currentQ.id, opt.id)}
                                    disabled={showResults}
                                    className={`w-full text-left relative overflow-hidden rounded-xl p-5 border transition-all duration-300 ${
                                        showResults 
                                            ? opt.isSelected 
                                                ? 'bg-cyan-500/10 border-cyan-400/50' 
                                                : 'bg-white/5 border-transparent'
                                            : 'bg-white/5 border-white/10 hover:border-cyan-400/50 hover:bg-white/10'
                                    }`}
                                >
                                    {showResults && (
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${opt.percentage}%` }}
                                            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                                            className={`absolute inset-0 z-0 opacity-10 ${opt.isSelected ? 'bg-cyan-400' : 'bg-white'}`}
                                        />
                                    )}
                                    
                                    <div className="relative z-10 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            {showResults && opt.isSelected && (
                                                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                                            )}
                                            <span className={`font-medium ${showResults && !opt.isSelected ? 'text-white/60' : 'text-white'}`}>
                                                {opt.label}
                                            </span>
                                        </div>
                                        
                                        {showResults && (
                                            <div className="flex items-center gap-4 text-sm font-bold">
                                                <span className={opt.isSelected ? 'text-cyan-400' : 'text-white/60'}>
                                                    {opt.percentage}%
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {showResults && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-8 flex justify-between items-center border-t border-white/10 pt-6"
                            >
                                <span className="text-sm text-white/40">
                                    {optionsData.reduce((acc, curr) => acc + curr.actualVotes, 0).toLocaleString()} total respondents
                                </span>
                                
                                {currentStep < POLL_QUESTIONS.length - 1 ? (
                                    <button
                                        onClick={nextQuestion}
                                        className="glow-btn px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold flex items-center gap-2 hover:bg-cyan-500/20"
                                    >
                                        Next Question <ChevronRight className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <p className="text-emerald-400 font-bold tracking-wide">
                                        End of Consensus ✓
                                    </p>
                                )}
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {isFinished && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-xl text-white/80 mb-6 font-medium">
                            The data is undeniable. The current workflow is structurally failing patients.
                        </p>
                        <a 
                            href="/join" 
                            className="glow-btn inline-block px-8 py-4 rounded-xl bg-cyan-500 text-obsidian font-black tracking-widest uppercase hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                        >
                            Help Us Fix It. Join the Vanguard.
                        </a>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
