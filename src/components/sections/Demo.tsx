import React from 'react';

const Demo: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See how easy it is – Try it yourself!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Watch our quick demo to see how PAFS-AI can transform your financial management.
          </p>
          
          <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl">
            {/* Placeholder for demo video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>

            {/* Demo steps overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex items-center justify-center space-x-4 text-white">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-2">
                    1
                  </div>
                  <span>Upload</span>
                </div>
                <div className="w-8 h-0.5 bg-white/30"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-2">
                    2
                  </div>
                  <span>Process</span>
                </div>
                <div className="w-8 h-0.5 bg-white/30"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-2">
                    3
                  </div>
                  <span>Insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo; 