import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Supercharge Your Job Search?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join thousands of job seekers who have already improved their application success rate with JobParse.ai
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          
        </div>
     
      </div>
    </section>
  );
};

export default CallToAction;
