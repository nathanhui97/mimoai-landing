"use client";

import { useState } from "react";

// ============================================================================
// Icons
// ============================================================================

const RecordIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" fill="currentColor" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ZapIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const RefreshIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const BrainIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// ============================================================================
// FAQ Component
// ============================================================================

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left hover:text-primary transition-colors cursor-pointer"
      >
        <span className="font-medium text-base pr-4">{question}</span>
        <ChevronIcon open={open} />
      </button>
      <div className={`faq-answer ${open ? "open" : ""}`}>
        <p className="text-muted text-sm pb-5 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

// ============================================================================
// Main Page
// ============================================================================

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Replace with actual waitlist API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ================================================================ */}
      {/* Navigation */}
      {/* ================================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-semibold text-xl">Mimoai</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted">
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#use-cases" className="hover:text-foreground transition-colors">Use Cases</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
          <a href="#waitlist" className="btn-primary text-sm px-4 py-2">
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* ================================================================ */}
      {/* Hero Section */}
      {/* ================================================================ */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted mb-6 animate-fade-in-up">
              <ZapIcon />
              <span>A virtual employee that lives in your browser</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up stagger-1">
              Show it once.{" "}
              <span className="gradient-text">It works forever.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 animate-fade-in-up stagger-2">
              Record yourself doing any browser task. Mimoai learns it, detects the variables,
              and creates an intelligent automation that adapts when websites change. No code. No selectors. No maintenance.
            </p>

            {/* Waitlist Form */}
            <div id="waitlist" className="max-w-md mx-auto animate-fade-in-up stagger-3">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-5 py-3 rounded-full border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Joining..." : "Join Waitlist"}
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-green-50 text-green-700 border border-green-200">
                  <CheckIcon />
                  <span className="font-medium">You&apos;re on the list! We&apos;ll be in touch soon.</span>
                </div>
              )}
              <p className="text-sm text-muted mt-4">
                Join 500+ people waiting for early access
              </p>
            </div>
          </div>

          {/* Hero Visual — Browser mockup with Mimoai panel */}
          <div className="mt-16 md:mt-24 relative">
            <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden max-w-4xl mx-auto animate-fade-in-up stagger-4">
              {/* Browser Chrome */}
              <div className="bg-secondary px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-card rounded-md px-3 py-1.5 text-sm text-muted max-w-md mx-auto">
                    crm.example.com/new-invoice
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-secondary/50 to-card">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Left: Mock CRM form */}
                  <div className="flex-1 space-y-4">
                    <div className="h-4 bg-border/60 rounded w-1/3" />
                    <div className="h-10 bg-card rounded border border-border relative">
                      <span className="absolute left-3 top-2.5 text-sm text-muted">Client name...</span>
                    </div>
                    <div className="h-4 bg-border/60 rounded w-1/4" />
                    <div className="h-10 bg-card rounded border border-border relative">
                      <span className="absolute left-3 top-2.5 text-sm text-muted">$0.00</span>
                    </div>
                    <div className="h-4 bg-border/60 rounded w-2/5" />
                    <div className="h-10 bg-card rounded border border-border relative">
                      <span className="absolute left-3 top-2.5 text-sm text-muted">mm/dd/yyyy</span>
                    </div>
                    <div className="h-10 bg-primary/20 rounded mt-6 flex items-center justify-center">
                      <span className="text-primary/60 text-sm font-medium">Create Invoice</span>
                    </div>
                  </div>
                  {/* Right: Mimoai panel */}
                  <div className="w-full md:w-72 bg-card rounded-xl shadow-lg border border-border p-5 animate-float">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                        <span className="text-white text-xs font-bold">M</span>
                      </div>
                      <span className="font-medium text-sm">Mimoai</span>
                      <span className="ml-auto text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Ready</span>
                    </div>
                    <div className="space-y-3">
                      <div className="px-3 py-2 bg-secondary rounded-lg text-xs">
                        <span className="text-muted">Client Name</span>
                        <div className="font-medium mt-1">Acme Corp</div>
                      </div>
                      <div className="px-3 py-2 bg-secondary rounded-lg text-xs">
                        <span className="text-muted">Invoice Amount</span>
                        <div className="font-medium mt-1">$2,500.00</div>
                      </div>
                      <div className="px-3 py-2 bg-secondary rounded-lg text-xs">
                        <span className="text-muted">Due Date</span>
                        <div className="font-medium mt-1">Feb 15, 2026</div>
                      </div>
                      <button className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium animate-pulse-glow">
                        Run Automation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* Mental Model Shift — "Not a macro recorder" */}
      {/* ================================================================ */}
      <section className="bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Think employee, not macro
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Traditional automation replays clicks at exact coordinates and breaks when anything changes.
              Mimoai understands <em>what</em> you did and <em>why</em> — so it adapts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Old way */}
            <div className="bg-card rounded-xl p-8 border border-border relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 rounded-full bg-red-50 text-red-400 flex items-center justify-center">
                  <XIcon />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-6 text-muted">Traditional Automation</h3>
              <ul className="space-y-4 text-sm">
                {[
                  { old: "Brittle CSS selectors", desc: "Breaks every time the website updates" },
                  { old: "Static scripts", desc: "Can't handle new layouts or popups" },
                  { old: "Manual variable setup", desc: "You configure every parameter by hand" },
                  { old: "Requires coding", desc: "CSS selectors, XPath, scripting languages" },
                  { old: "One change = broken", desc: "A single button rename kills the workflow" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-300 mt-2 shrink-0" />
                    <div>
                      <span className="comparison-old">{item.old}</span>
                      <p className="text-muted mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* New way */}
            <div className="bg-card rounded-xl p-8 border-2 border-primary/20 relative overflow-hidden animate-shimmer">
              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 rounded-full bg-green-50 text-green-500 flex items-center justify-center">
                  <CheckIcon />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-6">Mimoai</h3>
              <ul className="space-y-4 text-sm">
                {[
                  { text: "Semantic understanding", desc: "Finds elements by meaning, not selectors" },
                  { text: "AI-powered adaptation", desc: "Handles UI changes, popups, and new layouts" },
                  { text: "Automatic variable detection", desc: "AI spots names, dates, amounts for you" },
                  { text: "Zero code required", desc: "Just record yourself doing the task" },
                  { text: "Self-healing workflows", desc: "9 fallback strategies to find every element" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon />
                    </div>
                    <div>
                      <span className="font-medium">{item.text}</span>
                      <p className="text-muted mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* How It Works */}
      {/* ================================================================ */}
      <section id="how-it-works">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              From recording to running in under a minute
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <RecordIcon />,
                title: "Teach",
                description: "Click record and perform your task naturally. Mimoai captures every click, input, and navigation — plus the context around each element.",
                step: "01",
              },
              {
                icon: <SparklesIcon />,
                title: "Analyze",
                description: "AI detects the variables (names, dates, amounts), understands your intent, and generates a clean input form automatically.",
                step: "02",
              },
              {
                icon: <PlayIcon />,
                title: "Run",
                description: "Fill in new values and hit Run. The intelligent agent executes each step, adapting to the current page state in real time.",
                step: "03",
              },
              {
                icon: <ShieldIcon />,
                title: "Improve",
                description: "If something changes, Mimoai adapts. If it gets stuck, correct it once — it learns and never makes the same mistake again.",
                step: "04",
              },
            ].map((item, i) => (
              <div key={i} className="relative bg-card rounded-xl p-6 border border-border card-hover step-connector">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* Features — What makes it different */}
      {/* ================================================================ */}
      <section id="features" className="bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built Different
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Mimoai uses AI to truly understand your workflows — not just replay them
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <RefreshIcon />,
                title: "Self-Healing Workflows",
                description: "Websites change constantly. Mimoai uses 9 fallback strategies — from semantic matching to computer vision — to find elements even after UI updates.",
              },
              {
                icon: <BrainIcon />,
                title: "Goal-Oriented AI Agent",
                description: "The AI reasons about your goal, not just the next click. It skips steps already done, adapts to unexpected states, and finds better paths forward.",
              },
              {
                icon: <SparklesIcon />,
                title: "Auto Variable Detection",
                description: "No manual configuration. AI automatically recognizes patterns — emails, names, amounts, dates — and creates a dynamic form for each workflow.",
              },
              {
                icon: <EyeIcon />,
                title: "Vision + DOM Intelligence",
                description: "Combines DOM analysis for reliability with computer vision for fallback. If the selector fails, the AI can literally see the button and click it.",
              },
              {
                icon: <GlobeIcon />,
                title: "Works on Any Web App",
                description: "Salesforce, Google Sheets, HubSpot, custom CRMs — if it runs in Chrome, Mimoai can automate it. Handles shadow DOM, iframes, and SPAs.",
              },
              {
                icon: <LockIcon />,
                title: "Privacy-First Design",
                description: "Sensitive data is scrubbed before AI processing. No API keys in the client. Your workflows and data stay under your control.",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border card-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* How the AI works — Technical differentiator */}
      {/* ================================================================ */}
      <section>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smarter under the hood
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Most steps execute instantly without AI. When things get tricky, the intelligent agent kicks in.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              {/* Flow diagram */}
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Step 1: Fast Path */}
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4">
                      <ZapIcon />
                    </div>
                    <h4 className="font-semibold mb-2">Fast Path</h4>
                    <p className="text-sm text-muted">80% of steps execute instantly using semantic selectors — no AI call needed.</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      <span>&lt; 100ms</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="flex items-center gap-2 text-muted">
                      <span className="text-xs">if needed</span>
                      <ArrowRightIcon />
                    </div>
                  </div>

                  {/* Step 2: AI Agent */}
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                      <BrainIcon />
                    </div>
                    <h4 className="font-semibold mb-2">AI Agent</h4>
                    <p className="text-sm text-muted">Analyzes the page, reasons about the goal, and chooses the best action to advance the workflow.</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                      <span>Goal-oriented</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats bar */}
              <div className="bg-secondary/80 px-8 py-5 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-border">
                {[
                  { value: "9", label: "Element-finding strategies" },
                  { value: "80%", label: "Steps without AI calls" },
                  { value: "<$0.01", label: "Per AI recovery" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* Use Cases */}
      {/* ================================================================ */}
      <section id="use-cases" className="bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Automate what you repeat
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              If you do it more than once in a browser, Mimoai can learn it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sales & CRM",
                items: [
                  "Create invoices from templates",
                  "Update CRM records in bulk",
                  "Generate weekly pipeline reports",
                  "Log activities across platforms",
                ],
              },
              {
                title: "Operations",
                items: [
                  "Data entry across multiple systems",
                  "Download and organize reports",
                  "Fill compliance forms",
                  "Sync data between apps",
                ],
              },
              {
                title: "Personal Productivity",
                items: [
                  "Fill repetitive web forms",
                  "Track prices across sites",
                  "Automate booking workflows",
                  "Research and data collection",
                ],
              },
            ].map((category, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border card-hover">
                <h3 className="font-semibold text-lg mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <CheckIcon />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FAQ */}
      {/* ================================================================ */}
      <section id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div>
            <FAQItem
              question="How is Mimoai different from Selenium or Playwright?"
              answer="Selenium and Playwright require you to write code and maintain CSS selectors. When the website changes, your scripts break. Mimoai records your actions like a human would — understanding the meaning behind each click — and uses AI to adapt when the UI changes. No code required."
            />
            <FAQItem
              question="What happens when a website updates its interface?"
              answer="Mimoai uses 9 cascading strategies to find elements: semantic matching, label-based lookup, context matching, XPath, and more. If all DOM strategies fail, it falls back to computer vision — the AI literally looks at the page to find the button. In testing, workflows survive most UI changes without any intervention."
            />
            <FAQItem
              question="Do I need technical skills to use Mimoai?"
              answer="No. If you can use a web browser, you can use Mimoai. You record a task by doing it normally — clicking, typing, navigating. The AI handles all the technical complexity: detecting variables, generating forms, finding elements, and adapting to changes."
            />
            <FAQItem
              question="What web apps does it work with?"
              answer="Any web application that runs in Chrome — Salesforce, HubSpot, Google Sheets, Gainsight, custom business apps, internal tools. Mimoai handles modern web frameworks, shadow DOM, iframes, SPAs, and multi-tab workflows."
            />
            <FAQItem
              question="Is my data safe?"
              answer="Yes. Sensitive data is scrubbed before any AI processing. API keys are stored server-side and never exposed to the browser. Your workflow recordings stay under your control, and we use a two-tier caching system that reduces AI calls by ~80%."
            />
            <FAQItem
              question="How much does it cost per automation run?"
              answer="Most steps execute without AI calls at all (fast-path execution). When the AI agent is needed for recovery, it costs less than $0.01 per recovery request. For typical usage, the AI cost is negligible."
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* Final CTA */}
      {/* ================================================================ */}
      <section className="bg-gradient-to-br from-primary to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stop repeating yourself
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Teach Mimoai your browser tasks once. Run them forever — even when websites change.
          </p>

          <div className="max-w-md mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3 rounded-full text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-foreground text-white rounded-full font-medium hover:bg-foreground/90 transition-all disabled:opacity-50 whitespace-nowrap cursor-pointer"
                >
                  {isLoading ? "Joining..." : "Get Early Access"}
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-white/20 text-white">
                <CheckIcon />
                <span className="font-medium">You&apos;re on the list! We&apos;ll be in touch soon.</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* Footer */}
      {/* ================================================================ */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-semibold text-xl">Mimoai</span>
            </div>
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} Mimoai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
