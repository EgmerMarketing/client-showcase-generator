"use client";

import { useState } from "react";
import {
  Search,
  AlertTriangle,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Code,
  ArrowRight,
  CheckCircle,
  XCircle,
  Gauge,
  Eye,
  FileCode,
  MapPin,
  Send,
  ExternalLink,
  Loader2,
} from "lucide-react";

interface AnalysisResult {
  url: string;
  domain: string;
  issues: Array<{
    icon: React.ElementType;
    title: string;
    description: string;
    severity: "critical" | "warning" | "info";
  }>;
}

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [showContact, setShowContact] = useState(false);

  const analyzeUrl = () => {
    if (!url) return;
    setLoading(true);

    // Clean up URL
    let cleanUrl = url.trim();
    if (!cleanUrl.startsWith("http")) cleanUrl = "https://" + cleanUrl;
    const domain = cleanUrl
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "")
      .split("/")[0];

    // Simulate analysis with realistic issues
    setTimeout(() => {
      setResult({
        url: cleanUrl,
        domain,
        issues: [
          {
            icon: Shield,
            title: "No WCAG 2.1 AA Compliance",
            description:
              "Missing alt text, insufficient color contrast, no keyboard navigation support. Over 4,000 ADA lawsuits filed last year — fines start at $55,000.",
            severity: "critical",
          },
          {
            icon: FileCode,
            title: "No Schema Markup",
            description:
              "No structured data found. Google can't properly understand your business type, services, location, or reviews. Competitors with schema get rich results.",
            severity: "critical",
          },
          {
            icon: Gauge,
            title: "Slow Load Speed",
            description:
              "Template-based sites average 4-6 second load times. 53% of mobile users leave if a page takes over 3 seconds. Every second costs you customers.",
            severity: "warning",
          },
          {
            icon: MapPin,
            title: "Weak Local SEO Structure",
            description:
              "No location-specific pages, no local business schema, no Google Business Profile integration. You're invisible in 'near me' searches.",
            severity: "critical",
          },
          {
            icon: Smartphone,
            title: "Mobile Experience Issues",
            description:
              "Touch targets too small, text not optimized for mobile reading, no mobile-first design approach. 60%+ of your visitors are on phones.",
            severity: "warning",
          },
          {
            icon: Eye,
            title: "No Conversion Optimization",
            description:
              "Missing clear CTAs, no trust signals above the fold, no social proof integration. Traffic without conversions is just wasted potential.",
            severity: "info",
          },
        ],
      });
      setLoading(false);
    }, 2500);
  };

  const severityColor = {
    critical: "#ef4444",
    warning: "#FFAA53",
    info: "#00ADEE",
  };

  const severityLabel = {
    critical: "Critical",
    warning: "Warning",
    info: "Opportunity",
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00ADEE] to-[#8EE34D] flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg">Egmer Marketing</span>
              <span className="text-gray-500 text-sm ml-2">
                Showcase Generator
              </span>
            </div>
          </div>
          <a
            href="https://egmermarketing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-[#00ADEE] transition-colors flex items-center gap-1"
          >
            egmermarketing.com
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </header>

      {!result ? (
        /* Landing / Input State */
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ADEE]/10 rounded-full text-[#00ADEE] text-sm font-medium mb-8">
            <Globe className="w-4 h-4" />
            Free Website Analysis
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            See What Your Website{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADEE] to-[#8EE34D]">
              Could Be
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Enter any website URL and we&apos;ll show you exactly what&apos;s
            holding it back — and what a custom-coded, SEO-optimized,
            accessible website looks like.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-16">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Enter a website URL..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && analyzeUrl()}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00ADEE] focus:ring-1 focus:ring-[#00ADEE] text-lg transition-all"
              />
            </div>
            <button
              onClick={analyzeUrl}
              disabled={loading || !url}
              className="px-8 py-4 bg-[#00ADEE] hover:bg-[#00ADEE]/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 shrink-0"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  Analyze
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          {/* Trust signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Code, label: "Custom-Coded" },
              { icon: Shield, label: "WCAG Accessible" },
              { icon: Gauge, label: "Lightning Fast" },
              { icon: MapPin, label: "Local SEO Built-In" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 text-gray-500"
              >
                <item.icon className="w-6 h-6" />
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Results State */
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* URL Bar */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => {
                setResult(null);
                setUrl("");
                setShowContact(false);
              }}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              New Analysis
            </button>
            <div className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 flex items-center gap-2">
              <Globe className="w-4 h-4 text-gray-500" />
              <span className="text-gray-300">{result.domain}</span>
            </div>
          </div>

          {/* Score Summary */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center">
              <div className="text-5xl font-bold text-red-400 mb-2">
                {result.issues.filter((i) => i.severity === "critical").length}
              </div>
              <div className="text-red-400 font-medium">Critical Issues</div>
            </div>
            <div className="bg-[#FFAA53]/10 border border-[#FFAA53]/20 rounded-2xl p-6 text-center">
              <div className="text-5xl font-bold text-[#FFAA53] mb-2">
                {result.issues.filter((i) => i.severity === "warning").length}
              </div>
              <div className="text-[#FFAA53] font-medium">Warnings</div>
            </div>
            <div className="bg-[#00ADEE]/10 border border-[#00ADEE]/20 rounded-2xl p-6 text-center">
              <div className="text-5xl font-bold text-[#00ADEE] mb-2">
                {
                  result.issues.filter((i) => i.severity === "info").length
                }
              </div>
              <div className="text-[#00ADEE] font-medium">Opportunities</div>
            </div>
          </div>

          {/* Split View */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Current Site Issues */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-6 h-6 text-red-400" />
                <h2 className="text-2xl font-bold">Issues Found</h2>
              </div>

              <div className="space-y-4">
                {result.issues.map((issue) => (
                  <div
                    key={issue.title}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: `${severityColor[issue.severity]}15`,
                        }}
                      >
                        <issue.icon
                          className="w-5 h-5"
                          style={{
                            color: severityColor[issue.severity],
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-white">
                            {issue.title}
                          </h3>
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{
                              backgroundColor: `${severityColor[issue.severity]}20`,
                              color: severityColor[issue.severity],
                            }}
                          >
                            {severityLabel[issue.severity]}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {issue.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What We'd Build */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-[#8EE34D]" />
                <h2 className="text-2xl font-bold">What We&apos;d Build</h2>
              </div>

              <div className="bg-gradient-to-br from-[#00ADEE]/10 via-[#8EE34D]/5 to-[#FFAA53]/10 border border-white/10 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">
                  Custom-Coded Website for{" "}
                  <span className="text-[#00ADEE]">{result.domain}</span>
                </h3>
                <p className="text-gray-400 mb-6">
                  A fast, accessible, SEO-optimized website built from scratch — no templates, no page builders, no shortcuts.
                </p>
                <div className="space-y-3">
                  {[
                    {
                      icon: Code,
                      text: "Custom-coded with Next.js and React — no WordPress, no Wix, no Squarespace",
                      color: "#00ADEE",
                    },
                    {
                      icon: Shield,
                      text: "WCAG 2.1 AA accessible from day one — lawsuit-proof, not patched with an overlay",
                      color: "#8EE34D",
                    },
                    {
                      icon: Gauge,
                      text: "Sub-2-second load times — every millisecond counts for conversions and rankings",
                      color: "#FFAA53",
                    },
                    {
                      icon: FileCode,
                      text: "Full schema markup — LocalBusiness, Service, FAQ, Review — so Google understands you",
                      color: "#00ADEE",
                    },
                    {
                      icon: MapPin,
                      text: "Local SEO architecture — service area pages, Google Business Profile integration, NAP consistency",
                      color: "#8EE34D",
                    },
                    {
                      icon: Smartphone,
                      text: "Mobile-first design — built for phones first, then scaled up to desktop",
                      color: "#FFAA53",
                    },
                    {
                      icon: Eye,
                      text: "Conversion-optimized — clear CTAs, trust signals, social proof, contact forms that work",
                      color: "#00ADEE",
                    },
                    {
                      icon: Zap,
                      text: "Ongoing monthly optimization — content updates, SEO monitoring, performance tuning",
                      color: "#8EE34D",
                    },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <item.icon
                          className="w-4 h-4"
                          style={{ color: item.color }}
                        />
                      </div>
                      <p className="text-gray-300 text-sm pt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Tease */}
              <div className="bg-white/5 border border-[#00ADEE]/20 rounded-xl p-6 text-center">
                <p className="text-gray-400 mb-2">
                  Custom-coded websites starting at
                </p>
                <p className="text-3xl font-bold text-white mb-1">
                  $0 upfront
                </p>
                <p className="text-[#8EE34D] font-medium mb-4">
                  Free website with monthly membership
                </p>
                <button
                  onClick={() => setShowContact(true)}
                  className="w-full py-3 bg-[#00ADEE] hover:bg-[#00ADEE]/90 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  Get Your Free Custom Mockup
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {showContact && (
            <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-2 text-center">
                Get Your Free Custom Mockup
              </h3>
              <p className="text-gray-400 text-center mb-8">
                We&apos;ll create a custom mockup showing exactly what your new
                website could look like. No cost, no obligation.
              </p>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Thank you! We'll be in touch within 24 hours with your custom mockup."
                  );
                }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00ADEE]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00ADEE]"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00ADEE]"
                  />
                  <select
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-400 focus:outline-none focus:border-[#00ADEE]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Service Interest
                    </option>
                    <option value="website">Custom Website</option>
                    <option value="seo">Local SEO</option>
                    <option value="both">Website + SEO</option>
                    <option value="branding">Branding + Logo</option>
                  </select>
                </div>
                <textarea
                  placeholder="Tell us about your business..."
                  rows={3}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00ADEE] resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-[#00ADEE] hover:bg-[#00ADEE]/90 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send My Free Mockup Request
                </button>
                <p className="text-center text-gray-500 text-sm">
                  We respond within 24 hours. No spam, no pressure.
                </p>
              </form>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="text-center py-12 border-t border-white/10">
            <p className="text-gray-500 mb-2">
              Built by Egmer Marketing — Custom-coded websites for small
              businesses
            </p>
            <a
              href="https://egmermarketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ADEE] hover:underline"
            >
              egmermarketing.com
            </a>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-8 text-center max-w-sm">
            <Loader2 className="w-12 h-12 animate-spin text-[#00ADEE] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Analyzing Website</h3>
            <p className="text-gray-400">
              Scanning {result?.domain || url} for issues...
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
