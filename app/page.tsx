'use client';

import { useState } from 'react';
import { Search, ArrowRight, Globe, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsLoading(true);
    
    // Ensure URL has protocol
    let processedUrl = url.trim();
    if (!processedUrl.startsWith('http://') && !processedUrl.startsWith('https://')) {
      processedUrl = 'https://' + processedUrl;
    }

    // Navigate to showcase page
    const encodedUrl = encodeURIComponent(processedUrl);
    router.push(`/showcase?url=${encodedUrl}`);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00ADEE] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8EE34D] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FFAA53] rounded-full opacity-5 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="w-8 h-8 text-[#00ADEE]" />
            <span className="text-2xl font-bold text-white">Egmer Marketing</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-6">
            <span className="gradient-text">Client Showcase</span><br />
            <span className="text-white">Generator</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Transform any prospect's website into a compelling before/after comparison. 
            Show them exactly what Egmer can build - instantly during your sales calls.
          </p>
        </div>

        {/* Main form */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect premium-shadow rounded-2xl p-8 mb-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <Globe className="w-12 h-12 text-[#00ADEE] mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-white mb-2">Enter Prospect's Website</h2>
                <p className="text-gray-400">We'll generate a professional showcase comparison</p>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="example.com or https://example.com"
                  className="w-full pl-12 pr-4 py-4 bg-[#1a1a1a] border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00ADEE] focus:ring-2 focus:ring-[#00ADEE]/20 text-lg"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !url.trim()}
                className="w-full btn-primary text-lg py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Generating Showcase...
                  </>
                ) : (
                  <>
                    Generate Showcase
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00ADEE]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-[#00ADEE]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Instant Analysis</h3>
              <p className="text-gray-400">Automatically identifies common website issues and opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8EE34D]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#8EE34D]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visual Comparison</h3>
              <p className="text-gray-400">Side-by-side before/after mockups that wow prospects</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFAA53]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-[#FFAA53]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sales Ready</h3>
              <p className="text-gray-400">Perfect for live demos and closing more deals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}