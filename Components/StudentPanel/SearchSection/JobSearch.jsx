import React, { useState, useEffect } from 'react';
import FilterSection from './FilterSection.jsx';
import JobList from './JobList.jsx';
import ActiveFilters from './ActiveFilter.jsx';
import { jobsData } from './JobData.jsx';
import { ArrowUp } from 'lucide-react';

function JobSearch() {
  const [filters, setFilters] = useState({
    search: '',
    locations: [],
    companies: [],
    skills: [],
    salary: null,
    jobTypes: []
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  const clearFilters = () => {
    setFilters({
      search: '',
      locations: [],
      companies: [],
      skills: [],
      salary: null,
      jobTypes: []
    });
  };

  const countActiveFilters = () => {
    let count = 0;
    if (filters.search) count++;
    count += filters.locations.length;
    count += filters.companies.length;
    count += filters.skills.length;
    if (filters.salary) count++;
    count += filters.jobTypes.length;
    return count;
  };

  const activeFilterCount = countActiveFilters();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="bg-gradient-to-r from-blue-600 to-teal-500 py-12 mb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Find Your Perfect Job</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Browse through thousands of job opportunities tailored for students and recent graduates.
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <FilterSection 
              filters={filters} 
              setFilters={setFilters} 
              clearFilters={clearFilters}
              activeFilterCount={activeFilterCount}
            />
          </div>
          
          <div className="md:col-span-2">
            <ActiveFilters 
              filters={filters} 
              setFilters={setFilters}
              activeFilterCount={activeFilterCount}
            />
            <JobList jobs={jobsData} filters={filters} />
          </div>
        </div>
      </main>
      
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}

export default JobSearch;
