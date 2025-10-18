import { Target, Clock, Star, Award } from 'lucide-react';

const stats = [
  {
    icon: Target,
    value: '2.5x',
    label: 'Productivity Boost',
    description: 'Average increase in daily task completion',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    icon: Clock,
    value: '3hrs',
    label: 'Time Saved Weekly',
    description: 'Users save an average of 3 hours per week',
    color: 'text-cyan-600 dark:text-cyan-400',
    bgColor: 'bg-cyan-100 dark:bg-cyan-900/30',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'User Rating',
    description: 'Based on 5,000+ verified reviews',
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
  },
  {
    icon: Award,
    value: '95%',
    label: 'Goal Achievement',
    description: 'Users report reaching their goals consistently',
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
  },
];

export function StatsSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 opacity-30" />

      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The Numbers
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Speak for Themselves
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Join thousands of productive individuals who have transformed their workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl" />
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800">
                  <div className={`${stat.bgColor} ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className={`text-5xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}