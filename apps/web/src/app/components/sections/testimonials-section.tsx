import { Card, CardContent } from '../ui/card';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from '../ui/avatar'; // fixed path

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    content: 'This task manager has completely transformed how I organize my work. The interface is beautiful and intuitive. I can finally keep track of everything without feeling overwhelmed.',
    rating: 5,
    initials: 'SJ',
    color: 'bg-gradient-to-br from-pink-400 to-rose-400',
  },
  {
    name: 'Michael Chen',
    role: 'Freelance Designer',
    content: 'As someone who juggles multiple projects, this tool is a lifesaver. The clean design and smooth experience make task management actually enjoyable. Highly recommend!',
    rating: 5,
    initials: 'MC',
    color: 'bg-gradient-to-br from-blue-400 to-cyan-400',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Software Engineer',
    content: 'The best task manager I have used. Fast, secure, and the cloud sync works flawlessly. It helps me stay on top of my goals and I love seeing my progress over time.',
    rating: 5,
    initials: 'ER',
    color: 'bg-gradient-to-br from-green-400 to-emerald-400',
  },
  {
    name: 'David Park',
    role: 'Marketing Director',
    content: 'Simple yet powerful. The team collaboration features are excellent and the analytics help me track my teams productivity. Worth every penny!',
    rating: 5,
    initials: 'DP',
    color: 'bg-gradient-to-br from-orange-400 to-amber-400',
  },
  {
    name: 'Lisa Thompson',
    role: 'Small Business Owner',
    content: 'I have tried countless task managers, but this one stands out. The beautiful design motivates me to stay organized, and the reminders ensure I never miss important deadlines.',
    rating: 5,
    initials: 'LT',
    color: 'bg-gradient-to-br from-purple-400 to-pink-400',
  },
  {
    name: 'James Wilson',
    role: 'Student',
    content: 'Perfect for managing my coursework and personal projects. The interface is clean, the app is fast, and it syncs across all my devices. Could not ask for more!',
    rating: 5,
    initials: 'JW',
    color: 'bg-gradient-to-br from-teal-400 to-cyan-400',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Loved by
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Thousands Worldwide
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            See what our users have to say about their productivity transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

              <CardContent className="p-8 relative">
                <Quote className="w-10 h-10 text-blue-200 dark:text-blue-800 mb-4" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed italic">
                  {testimonial.content}
                </p>

                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className={`${testimonial.color} text-white font-bold`}>
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-slate-100">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}