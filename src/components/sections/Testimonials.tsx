import React from 'react';
import Card from '../ui/Card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    image: '/placeholder-avatar.jpg',
    quote: 'PAFS-AI has transformed how I manage my business finances. The AI insights are incredibly valuable!',
  },
  {
    name: 'Michael Chen',
    role: 'Financial Advisor',
    image: '/placeholder-avatar.jpg',
    quote: 'The document processing speed is impressive. It saves me hours every week!',
  },
  {
    name: 'Emma Thompson',
    role: 'Tax Consultant',
    image: '/placeholder-avatar.jpg',
    quote: 'The automated categorization and tax optimization features are game-changers for my clients.',
  },
  {
    name: 'David Wilson',
    role: 'Investment Manager',
    image: '/placeholder-avatar.jpg',
    quote: 'The real-time tracking and AI-powered insights help me make better investment decisions.',
  },
];

const partners = [
  { name: 'Partner 1', logo: '/placeholder-logo.png' },
  { name: 'Partner 2', logo: '/placeholder-logo.png' },
  { name: 'Partner 3', logo: '/placeholder-logo.png' },
  { name: 'Partner 4', logo: '/placeholder-logo.png' },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Trust Indicators */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by 5,000+ Australians
          </h2>
          <div className="flex flex-wrap justify-center gap-8 items-center mt-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="h-12 w-32 bg-gray-300 dark:bg-gray-700 rounded opacity-75 hover:opacity-100 transition-opacity"
                title={partner.name}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              variant="elevated"
              className={`animate-slide-up ${
                index === 1 ? 'delay-100' : 
                index === 2 ? 'delay-200' : 
                index === 3 ? 'delay-300' : ''
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "{testimonial.quote}"
              </p>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 items-center bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="font-semibold">Bank-Level Security</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="font-semibold">Data Privacy</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-semibold">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 