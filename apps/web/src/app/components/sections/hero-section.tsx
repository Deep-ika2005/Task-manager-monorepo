'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { CheckSquare, ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  const router = useRouter();

  const handleGetStarted = () => {
    // Redirect to dashboard page
    router.push('/dashboard');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900" />
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
            Your productivity companion
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="block mb-2">Organize Your</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400 bg-size-200 animate-gradient">
            Life Beautifully
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform chaos into clarity with our elegant task management system.
          Stay focused, achieve more, and celebrate every accomplishment.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            onClick={handleGetStarted}
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 rounded-full border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
          >
            <CheckSquare className="w-5 h-5 mr-2" />
            View Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10K+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">1M+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Tasks Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">99%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
