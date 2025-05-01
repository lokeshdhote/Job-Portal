import React from 'react';
import { FileUp, CheckCircle, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="md:flex items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              AI-Powered Job <span className="text-teal-400">Document Analysis</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Instantly extract key insights from job descriptions and resumes. 
              Boost your application success rate by 73%.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                <FileUp className="mr-2 h-5 w-5" />
                Try for Free
              </button>
              <button className="bg-transparent border border-white hover:bg-white hover:text-blue-900 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                Watch Demo
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center">
              <div className="flex mb-2 sm:mb-0 sm:mr-6">
                <CheckCircle className="h-5 w-5 text-teal-400 mr-2" />
                <span className="text-blue-100">No credit card required</span>
              </div>
              <div className="flex mb-2 sm:mb-0 sm:mr-6">
                <CheckCircle className="h-5 w-5 text-teal-400 mr-2" />
                <span className="text-blue-100">Free tier available</span>
              </div>
              <div className="flex">
                <Award className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-blue-100">Top rated</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 relative">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] cursor-pointer">
              <div className="bg-gray-50 p-4 border-b border-gray-200">
                <h3 className="font-medium text-gray-800">Upload Your Document</h3>
              </div>
              <div className="p-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <FileUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 mb-2">Drag and drop your resume or job description</p>
                  <p className="text-gray-400 text-sm mb-4">PDF, DOCX, or TXT (Max 5MB)</p>
                  <button className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                    Browse Files
                  </button>
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-teal-500 h-2 rounded-full w-3/4"></div>
                    </div>
                    <span className="ml-2 text-gray-500 text-sm">75%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Processing document...</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded-lg shadow-lg transform rotate-3">
              New: AI Skill Matching!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
