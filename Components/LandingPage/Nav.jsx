import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Menu, X, Upload, User } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/">  <div className="flex items-center">
            <Upload className="h-8 w-8 text-blue-900 mr-2" />
            <span className="text-xl font-bold text-blue-900">JobParse.ai</span>
          </div></Link>
        

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-blue-700 transition-colors duration-300">
              Features
            </Link>
           
            <Link to="/resumeanalyse"  className="text-gray-600 hover:text-blue-700 transition-colors duration-300">
             Analyse
            </Link>
            <Link  to="/skill"  className="text-gray-600 hover:text-blue-700 transition-colors duration-300">
             skill
            </Link>
            <Link to="/auth"> 
            <button className="bg-white text-blue-900 border border-blue-900 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-300">
              Log In
            </button>
            </Link>
            <Link to="/auth"> 
            <button className="bg-blue-900 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors duration-300">
              Sign Up Free
            </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a 
              href="#features" 
              className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <Link to="/auth"> 
             <button className="w-full text-left py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center">
              <User className="h-5 w-5 mr-2" /> Log In
            </button>
             </Link>
             <Link to="/auth"> 
            <button className="w-full bg-blue-900 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors duration-300">
              Sign Up Free
            </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;