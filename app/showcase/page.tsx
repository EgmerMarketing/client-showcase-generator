'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  ArrowLeft, 
  AlertTriangle, 
  CheckCircle, 
  Globe, 
  Smartphone, 
  Zap, 
  Search, 
  Shield, 
  TrendingUp,
  Mail,
  Phone,
  User,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

interface Issue {
  icon: React.ReactNode;
  title: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function ShowcaseContent() {
  const searchParams = useSearchParams();
  const url = searchParams?.get('url') || '';
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const decodedUrl = decodeURIComponent(url);
  const domain = decodedUrl.replace(/^https?:\/\//, '').replace(/\/.*$/, '');

  // Common website issues (generic but smart)
  const issues: Issue[] = [
    {
      icon: <Search className="w-5 h-5" />,
      title: "No Schema Markup",
      description: "Missing structured data that helps search engines understand your content",
      severity: 'high'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "WCAG Compliance Issues",
      description: "Accessibility barriers that prevent disabled users from accessing your site",
      severity: 'high'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Slow Load Speed",
      description: "Page load times exceed 3 seconds, causing visitor drop-off",
      severity: 'medium'
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "No Local SEO",
      description: "Missing local business optimization for Google My Business integration",
      severity: 'high'
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Poor Mobile Experience",
      description: "Not optimized for mobile devices where 60% of traffic comes from",
      severity: 'medium'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Outdated Design",
      description: "Visual design doesn't reflect modern user expectations and brand trust",
      severity: 'low'
    }
  ];

  // What Egmer would build
  const features: Feature[] = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Advanced SEO Foundation",
      description: "Complete schema markup, meta optimization, and technical SEO setup for maximum visibility",
      color: "#00ADEE"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "WCAG AAA Compliance",
      description: "Full accessibility compliance ensuring your site works for everyone, everywhere",
      color: "#8EE34D"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Performance",
      description: "Sub-1 second load times with modern optimization techniques and CDN integration",
      color: "#FFAA53"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Local SEO Domination",
      description: "Google My Business integration, local keywords, and geo-targeted content strategy",
      color: "#00ADEE"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First Design",
      description: "Responsive design that looks perfect and converts on every device and screen size",
      color: "#8EE34D"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Conversion-Focused UX",
      description: "Psychology-driven design that guides visitors toward taking action and becoming customers",
      color: "#FFAA53"
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data somewhere
    alert('Thank you! We\'ll be in touch within 24 hours to discuss your custom mockup.');
    setShowContactForm(false);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-400 bg-red-400/10';
      case 'medium': return 'text-[#FFAA53] bg-[#FFAA53]/10';
      case 'low': return 'text-yellow-400 bg-yellow-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  if (!url) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 text-[#FFAA53] mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">No URL Provided</h1>
          <p className="text-gray-400 mb-6">Please go back and enter a website URL to analyze.</p>
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Generator
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#0a0a0a]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-[#00ADEE] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Generator</span>
            </Link>
            
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-[#00ADEE]" />
              <span className="text-lg font-bold text-white">Egmer Marketing</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-white">Showcase for </span>
            <span className="gradient-text">{domain}</span>
          </h1>
          <p className="text-gray-400 text-lg">See what Egmer Marketing could build for this prospect</p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Current Site */}
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="bg-red-500/10 border-b border-red-500/20 px-6 py-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                Current Website
              </h3>
            </div>
            <div className="p-6">
              <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg h-80 flex items-center justify-center mb-4">
                <iframe
                  src={decodedUrl}
                  className="w-full h-full rounded-lg"
                  title="Current Website"
                  style={{ transform: 'scale(0.7)', transformOrigin: 'top left', width: '142.86%', height: '142.86%' }}
                />
              </div>
              <p className="text-gray-400 text-sm text-center">{decodedUrl}</p>
            </div>
          </div>

          {/* Egmer Mockup */}
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="bg-[#8EE34D]/10 border-b border-[#8EE34D]/20 px-6 py-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#8EE34D]" />
                What Egmer Would Build
              </h3>
            </div>
            <div className="p-6">
              <div className="bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] border border-[#8EE34D]/20 rounded-lg h-80 flex flex-col items-center justify-center space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00ADEE]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-[#00ADEE]" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Premium Modern Design</h4>
                  <p className="text-gray-400 text-sm max-w-xs">Fast-loading, mobile-optimized, conversion-focused website with advanced SEO</p>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-[#00ADEE] rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-[#8EE34D] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-[#FFAA53] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
              <p className="text-[#8EE34D] text-sm text-center mt-4">✓ Optimized for Conversions & SEO</p>
            </div>
          </div>
        </div>

        {/* Issues Found */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Issues Found</h2>
            <p className="text-gray-400">Common problems we identified that are hurting performance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {issues.map((issue, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getSeverityColor(issue.severity)}`}>
                  {issue.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{issue.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{issue.description}</p>
                <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getSeverityColor(issue.severity)}`}>
                  {issue.severity.toUpperCase()} PRIORITY
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* What We'd Build */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold gradient-text mb-4">What We'd Build</h2>
            <p className="text-gray-400">Egmer's premium solutions that drive real results</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 group hover:scale-105 transition-transform">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}10`, color: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect premium-shadow rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold gradient-text mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Get a free custom mockup designed specifically for your business goals and target audience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowContactForm(true)}
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                Get Your Free Custom Mockup
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="https://egmermarketing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                Visit Egmer Marketing
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-effect premium-shadow rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-white mb-6">Get Your Free Custom Mockup</h3>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#00ADEE]"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#00ADEE]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#00ADEE]"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#00ADEE]"
                    placeholder="Tell us about your project goals..."
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 btn-primary py-3 text-center"
                >
                  Send Request
                </button>
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-[#1a1a1a] transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00ADEE] mx-auto mb-4"></div>
        <p className="text-gray-400">Loading showcase...</p>
      </div>
    </div>
  );
}

// Main export with Suspense boundary
export default function ShowcasePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ShowcaseContent />
    </Suspense>
  );
}