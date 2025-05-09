import React from 'react';

const Demo: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background-dark to-background-dark/95 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            See how easy it is – Try it yourself!
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Watch our quick demo to see how PAFS-AI can transform your financial management.
          </p>
          
          <div className="relative aspect-video bg-gradient-to-br from-primary-900/50 to-secondary-900/50 rounded-xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
            {/* Placeholder for demo video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/20">
                <svg className="w-10 h-10 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>

            {/* Demo steps overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center justify-center space-x-4 text-white">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-2 shadow-lg shadow-primary-500/20">
                    1
                  </div>
                  <span>Upload</span>
                </div>
                <div className="w-8 h-0.5 bg-white/30"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center mr-2 shadow-lg shadow-secondary-500/20">
                    2
                  </div>
                  <span>Process</span>
                </div>
                <div className="w-8 h-0.5 bg-white/30"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-400 rounded-full flex items-center justify-center mr-2 shadow-lg shadow-primary-400/20">
                    3
                  </div>
                  <span>Insights</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-300 text-sm">Process documents in seconds, not minutes</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 bg-secondary-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-300 text-sm">Bank-level encryption for your data</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary-400/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Smart Analytics</h3>
              <p className="text-gray-300 text-sm">AI-powered insights and recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo; 