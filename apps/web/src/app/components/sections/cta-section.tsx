'use client';

import { Button } from '../ui/button'
import { ArrowRight, CheckSquare, Heart, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onGetStarted: () => void;
}

export function CTASection({ onGetStarted }: CTASectionProps) {
  return (
    <section className="py-32 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05]" />

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">
            Join 10,000+ productive people today
          </span>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Ready to Transform
          <span className="block">Your Productivity?</span>
        </h2>

        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Start organizing your life beautifully today. No credit card required.
          Get started in less than 60 seconds.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="text-lg px-10 py-7 rounded-full bg-white text-blue-600 hover:bg-blue-50 shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 group"
            onClick={onGetStarted}
          >
            Start Free Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 py-7 rounded-full border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            <CheckSquare className="w-5 h-5 mr-2" />
            See How It Works
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <CheckSquare className="w-6 h-6 text-white" />
            </div>
            <div className="text-white font-semibold">No Credit Card</div>
            <div className="text-blue-100 text-sm">Free forever plan available</div>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="text-white font-semibold">Instant Access</div>
            <div className="text-blue-100 text-sm">Start in under 60 seconds</div>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="text-white font-semibold">Cancel Anytime</div>
            <div className="text-blue-100 text-sm">No long-term commitments</div>
          </div>
        </div>
      </div>

      <footer className="relative z-10 mt-20 pt-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <CheckSquare className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">Task Manager</span>
            </div>

            <div className="text-blue-100 text-sm">
              © 2025 Task Manager. All rights reserved.
            </div>

            <div className="flex items-center gap-6 text-blue-100 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}