import React from 'react';
import { DocumentIcon, ChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import Card from '../ui/Card';

const features = [
  {
    icon: <DocumentIcon className="w-12 h-12 text-primary-500" />,
    title: 'Smart Uploads',
    description: 'AI-powered document categorization that works instantly. Just upload and let our system do the rest.',
    gradient: 'from-primary-500/20 to-primary-600/20',
  },
  {
    icon: <ChartBarIcon className="w-12 h-12 text-secondary-500" />,
    title: 'Real-Time Tracking',
    description: 'Stay updated with your financial status through instant bank account synchronization.',
    gradient: 'from-secondary-500/20 to-secondary-600/20',
  },
  {
    icon: <LightBulbIcon className="w-12 h-12 text-primary-400" />,
    title: 'Expert Insights',
    description: 'Get personalized recommendations from our AI and financial advisors.',
    gradient: 'from-primary-400/20 to-primary-500/20',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background-dark to-background-dark/95 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background-dark to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Powerful Features for Your Financial Success
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our AI-powered platform provides everything you need to manage your finances effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              variant="elevated"
              hover
              className={`animate-slide-up backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 