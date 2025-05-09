import React from 'react';
import Card from '../ui/Card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    image: '/placeholder-avatar.jpg',
    quote: 'PAFS-AI has transformed how I manage my business finances. The AI insights are incredibly valuable!',
    gradient: 'from-primary-500/20 to-primary-600/20',
  },
  {
    name: 'Michael Chen',
    role: 'Financial Advisor',
    image: '/placeholder-avatar.jpg',
    quote: 'The document processing speed is impressive. It saves me hours every week!',
    gradient: 'from-secondary-500/20 to-secondary-600/20',
  },
  {
    name: 'Emma Thompson',
    role: 'Tax Consultant',
    image: '/placeholder-avatar.jpg',
    quote: 'The automated categorization and tax optimization features are game-changers for my clients.',
    gradient: 'from-primary-400/20 to-primary-500/20',
  },
  {
    name: 'David Wilson',
    role: 'Investment Manager',
    image: '/placeholder-avatar.jpg',
    quote: 'The real-time tracking and AI-powered insights help me make better investment decisions.',
    gradient: 'from-secondary-400/20 to-secondary-500/20',
  },
];

const partners = [
  { 
    name: 'Commonwealth Bank',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    name: 'ANZ',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    name: 'Westpac',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    name: 'NAB',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background-dark/95 to-background-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Trust Indicators */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Trusted by 5,000+ Australians
          </h2>
          <div className="flex flex-wrap justify-center gap-8 items-center mt-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                title={partner.name}
              >
                <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-400">
                  {partner.logo}
                </div>
                <span className="text-white font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              variant="elevated"
              className={`animate-slide-up backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full mr-4 bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center`}>
                  <span className="text-white font-semibold">{testimonial.name[0]}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "{testimonial.quote}"
              </p>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="font-semibold text-white">Bank-Level Security</span>
          </div>
          <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary-500/20 rounded-full flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="font-semibold text-white">Data Privacy</span>
          </div>
          <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-primary-400/20 rounded-full flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-semibold text-white">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 