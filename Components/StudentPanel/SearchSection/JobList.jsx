import React from 'react';
import JobCard from './JobCard.jsx';
import { Briefcase } from 'lucide-react';

const JobList = ({ jobs, filters }) => {
  const filteredJobs = jobs.filter((job) => {
    const searchTerm = filters.search?.toLowerCase() || '';

    // Search filter
    if (
      searchTerm &&
      !job.title.toLowerCase().includes(searchTerm) &&
      !job.company.toLowerCase().includes(searchTerm) &&
      !job.description.toLowerCase().includes(searchTerm) &&
      !job.skills.some((skill) => skill.toLowerCase().includes(searchTerm))
    ) {
      return false;
    }

    // Location filter
    if (filters.locations.length > 0 && !filters.locations.includes(job.location)) {
      return false;
    }

    // Company filter
    if (filters.companies.length > 0 && !filters.companies.includes(job.company)) {
      return false;
    }

    // Skills filter
    if (filters.skills.length > 0 && !filters.skills.some((skill) => job.skills.includes(skill))) {
      return false;
    }

    // Salary filter
    if (
      filters.salary &&
      (job.salary < filters.salary.min || job.salary > filters.salary.max)
    ) {
      return false;
    }

    // Job type filter
    if (filters.jobTypes.length > 0 && !filters.jobTypes.includes(job.type)) {
      return false;
    }

    return true;
  });

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <Briefcase className="w-5 h-5 mr-2" />
          Available Jobs
          <span className="ml-2 text-gray-500">({filteredJobs.length})</span>
        </h2>

        <div className="flex gap-2">
          <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="relevant">Most Relevant</option>
            <option value="recent">Most Recent</option>
            <option value="salary-high">Highest Salary</option>
            <option value="salary-low">Lowest Salary</option>
          </select>
        </div>
      </div>

      {filteredJobs.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-4">
            <Briefcase className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">No jobs found</h3>
          <p className="text-gray-600">
            Try adjusting your search or filter criteria to find more matching jobs.
          </p>
        </div>
      ) : (
        filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
      )}
    </div>
  );
};

export default JobList;
