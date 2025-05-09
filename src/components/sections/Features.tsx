import React from 'react';
import { DocumentIcon, ChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import Card from '../ui/Card';

const features = [
  {
    icon: <DocumentIcon className="w-12 h-12 text-primary-600" />,
    title: 'Smart Uploads',
    description: 'AI-powered document categorization that works instantly. Just upload and let our system do the rest.',
  },
  {
    icon: <ChartBarIcon className="w-12 h-12 text-primary-600" />,
    title: 'Real-Time Tracking',
    description: 'Stay updated with your financial status through instant bank account synchronization.',
  },
  {
    icon: <LightBulbIcon className="w-12 h-12 text-primary-600" />,
    title: 'Expert Insights',
    description: 'Get personalized recommendations from our AI and financial advisors.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Your Financial Success
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our AI-powered platform provides everything you need to manage your finances effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              variant="elevated"
              hover
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
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