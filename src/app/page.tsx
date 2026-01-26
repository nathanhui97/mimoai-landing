"use client";

import { useState } from "react";

// Icons as inline SVGs
const RecordIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" fill="currentColor" />
  </svg>
);

const SparklesIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const PlayIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const ZapIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const RefreshIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
);

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call - replace with actual waitlist API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-semibold text-xl">Mimoai</span>
          </div>
          <a href="#waitlist" className="btn-primary text-sm px-4 py-2">
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted mb-6 animate-fade-in-up">
              <ZapIcon />
              <span>AI-powered browser automation for everyone</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up stagger-1">
              Turn repetitive browser tasks into{" "}
              <span className="gradient-text">reusable Micro-Apps</span>
            </h1>

            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 animate-fade-in-up stagger-2">
              Record yourself doing a task once, and Mimoai creates an
              intelligent automation that adapts to changes. No coding required.
            </p>

            {/* Waitlist Form */}
            <div
              id="waitlist"
              className="max-w-md mx-auto animate-fade-in-up stagger-3"
            >
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
                  <span className="font-medium">
                    You&apos;re on the list! We&apos;ll be in touch soon.
                  </span>
                </div>
              )}
              <p className="text-sm text-muted mt-4">
                Join 500+ people waiting for early access
              </p>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 md:mt-24 relative">
            <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden max-w-4xl mx-auto animate-fade-in-up stagger-4">
              {/* Browser Chrome */}
              <div className="bg-secondary px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-card rounded-md px-3 py-1.5 text-sm text-muted max-w-md mx-auto">
                    example.com/dashboard
                  </div>
                </div>
              </div>
              {/* Content Area */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-secondary/50 to-card">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Left: Mock Form */}
                  <div className="flex-1 space-y-4">
                    <div className="h-4 bg-border/60 rounded w-1/3"></div>
                    <div className="h-10 bg-card rounded border border-border"></div>
                    <div className="h-4 bg-border/60 rounded w-1/4"></div>
                    <div className="h-10 bg-card rounded border border-border"></div>
                    <div className="h-4 bg-border/60 rounded w-2/5"></div>
                    <div className="h-10 bg-card rounded border border-border"></div>
                    <div className="h-10 bg-primary/20 rounded mt-6"></div>
                  </div>
                  {/* Right: Mimoai Panel */}
                  <div className="w-full md:w-72 bg-card rounded-xl shadow-lg border border-border p-5 animate-float">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                        <span className="text-white text-xs font-bold">M</span>
                      </div>
                      <span className="font-medium text-sm">Mimoai</span>
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
                        <div className="font-medium mt-1">Feb 15, 2025</div>
                      </div>
                      <button className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium animate-pulse-glow">
                        Execute
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Four simple steps to automate any browser task
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <RecordIcon />,
                title: "Record",
                description:
                  "Click 'Start Recording' and perform your task naturally. We capture every click, input, and navigation.",
                step: "01",
              },
              {
                icon: <SparklesIcon />,
                title: "Analyze",
                description:
                  "AI automatically detects variables (names, dates, amounts) and creates a dynamic form for you.",
                step: "02",
              },
              {
                icon: <PlayIcon />,
                title: "Execute",
                description:
                  "Fill in new values and hit 'Execute'. Your automation runs smoothly, adapting to UI changes.",
                step: "03",
              },
              {
                icon: <ShieldIcon />,
                title: "Learn",
                description:
                  "The system learns from corrections and improves over time. Smarter with every use.",
                step: "04",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-card rounded-xl p-6 border border-border card-hover"
              >
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

      {/* Features */}
      <section>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built Different
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Not just another macro recorder. Mimoai uses AI to truly
              understand your workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <RefreshIcon />,
                title: "Self-Healing Workflows",
                description:
                  "Websites change constantly. Mimoai adapts automatically, finding elements even when UI updates.",
              },
              {
                icon: <SparklesIcon />,
                title: "AI Variable Detection",
                description:
                  "No manual configuration needed. AI recognizes patterns like emails, names, amounts, and dates.",
              },
              {
                icon: <CodeIcon />,
                title: "Zero Code Required",
                description:
                  "No selectors to write, no scripts to maintain. Just record and run. Anyone can use it.",
              },
              {
                icon: <GlobeIcon />,
                title: "Works Everywhere",
                description:
                  "Salesforce, Google Sheets, CRMs, any web app. If it runs in Chrome, Mimoai can automate it.",
              },
              {
                icon: <ShieldIcon />,
                title: "Privacy-First Design",
                description:
                  "Your data stays on your machine. Sensitive info is scrubbed before any AI processing.",
              },
              {
                icon: <ZapIcon />,
                title: "Lightning Fast",
                description:
                  "Smart element finding with 9 fallback strategies means your automations rarely fail.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Endless Possibilities
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              From simple tasks to complex workflows, Mimoai handles it all
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Automation",
                items: [
                  "Invoice processing",
                  "CRM data entry",
                  "Report generation",
                  "Email campaigns",
                ],
              },
              {
                title: "Personal Productivity",
                items: [
                  "Form filling",
                  "Booking appointments",
                  "Price tracking",
                  "Research automation",
                ],
              },
              {
                title: "Testing & QA",
                items: [
                  "Regression testing",
                  "User journey testing",
                  "Data validation",
                  "Bug reproduction",
                ],
              },
            ].map((category, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h3 className="font-semibold text-lg mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <CheckIcon />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-primary to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to automate your browser?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join the waitlist and be among the first to experience the future of
            browser automation.
          </p>

          <div className="max-w-md mx-auto">
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
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
                  className="px-6 py-3 bg-foreground text-white rounded-full font-medium hover:bg-foreground/90 transition-all disabled:opacity-50 whitespace-nowrap"
                >
                  {isLoading ? "Joining..." : "Get Early Access"}
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-white/20 text-white">
                <CheckIcon />
                <span className="font-medium">
                  You&apos;re on the list! We&apos;ll be in touch soon.
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
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
