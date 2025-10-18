import { UserPlus, ListPlus, CheckCircle2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    step: '01',
    title: 'Create Your Account',
    description: 'Sign up in seconds with your email. No credit card required, no commitments.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: ListPlus,
    step: '02',
    title: 'Add Your Tasks',
    description: 'Quickly capture everything you need to do. Simple, intuitive, and distraction-free.',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: CheckCircle2,
    step: '03',
    title: 'Complete & Track',
    description: 'Check off tasks as you finish them and watch your productivity soar.',
    color: 'from-teal-500 to-green-500',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Achieve Your Goals',
    description: 'Stay consistent, build momentum, and accomplish more than ever before.',
    color: 'from-green-500 to-emerald-500',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get Started in
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Four Simple Steps
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            From signup to success in minutes. Our streamlined process gets you organized fast.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-cyan-200 to-green-200 dark:from-blue-900 dark:via-cyan-900 dark:to-green-900 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div
                        className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    <div
                      className={`text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent mb-4 text-center opacity-20`}
                    >
                      {step.step}
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-center text-slate-900 dark:text-slate-100">
                      {step.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}
                      >
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}