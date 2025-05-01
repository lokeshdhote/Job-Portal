import React from 'react';
import { Upload, Mail, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Upload className="h-6 w-6 text-teal-400 mr-2" />
              <span className="text-xl font-bold text-white">JobParse.ai</span>
            </div>
            <p className="mb-4">
              AI-powered job document analysis to help you land your dream job faster.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
               
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
               
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
               
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-teal-400 transition-colors duration-300">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-teal-400 transition-colors duration-300">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-teal-400 transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-300">Testimonials</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-300">API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-300">Guides</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-300">Support</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-300">API Documentation</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-300">Career Tips</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-300">Press</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 JobParse.ai. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 mr-4">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 mr-4">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
