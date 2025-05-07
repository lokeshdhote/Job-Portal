import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookmarkPlus, MapPin, DollarSign, Clock } from 'lucide-react';

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-4 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start">
        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
          <img 
            src={job.logo} 
            alt={`${job.company || 'Company'} logo`} 
            className="w-16 h-16 rounded-lg object-cover"
            onError={(e) => { e.currentTarget.src = '/default-logo.png'; }}
          />
        </div>
        
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div>
              <h3 
                className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
                onClick={() => navigate(`/job/${job.id}`)}
              >
                {job.title}
              </h3>
              <p className="text-gray-600">{job.company}</p>
            </div>
            <button 
              className="mt-2 sm:mt-0 text-gray-400 hover:text-blue-600 transition-colors self-start"
              aria-label="Save job"
            >
              <BookmarkPlus className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3">
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              {job.location}
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <DollarSign className="h-4 w-4 mr-1" />
              ${job.salary.toLocaleString()}
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {job.posted}
            </div>
          </div>
          
          <p className="mt-3 text-gray-600 text-sm overflow-hidden text-ellipsis max-h-[3.5rem]">
            {job.description}
          </p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <span 
                key={skill}
                className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="mt-4 flex flex-wrap gap-3">
            <button 
              onClick={() => navigate(`/job/${job.id}/apply`)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </button>
            <button 
              onClick={() => navigate(`/job/${job.id}`)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
