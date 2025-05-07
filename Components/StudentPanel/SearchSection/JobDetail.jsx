import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { jobsData } from './JobData.jsx';
import { MapPin, Building2, DollarSign, Clock, Briefcase, ArrowLeft } from 'lucide-react';

function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobsData.find(j => j.id === Number(id));

  if (!job) {
    return (
      <div>
        <div>
          <h2>Job Not Found</h2>
          <p>The job listing you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
          >
            <ArrowLeft /> Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => navigate('/')}
      >
        <ArrowLeft /> Back to Jobs
      </button>

      <div>
        <div>
          <div>
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              style={{ width: '64px', height: '64px', borderRadius: '8px', objectFit: 'cover', marginRight: '16px' }}
            />
            <div>
              <h1>{job.title}</h1>
              <p>{job.company}</p>
            </div>
          </div>
          <button
            onClick={() => navigate(`/job/${id}/apply`)}
          >
            Apply Now
          </button>
        </div>

        <div>
          <div>
            <MapPin />
            <div>
              <p>Location</p>
              <p>{job.location}</p>
            </div>
          </div>
          <div>
            <DollarSign />
            <div>
              <p>Salary</p>
              <p>${job.salary.toLocaleString()}/year</p>
            </div>
          </div>
          <div>
            <Briefcase />
            <div>
              <p>Job Type</p>
              <p>{job.type}</p>
            </div>
          </div>
          <div>
            <Clock />
            <div>
              <p>Posted</p>
              <p>{job.posted}</p>
            </div>
          </div>
        </div>

        <div>
          <h2>Job Description</h2>
          <div>
            <p>{job.description}</p>
            <p>
              We are looking for a talented professional to join our team. The ideal candidate will have
              a strong background in the required skills and a passion for innovation.
            </p>
            <h3>Requirements:</h3>
            <ul>
              <li>Bachelor's degree in related field</li>
              <li>2+ years of relevant experience</li>
              <li>Strong problem-solving abilities</li>
              <li>Excellent communication skills</li>
              <li>Ability to work independently and in a team</li>
            </ul>
          </div>
        </div>

        <div>
          <h2>Required Skills</h2>
          <div>
            {job.skills.map((skill, index) => (
              <span key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <button
            onClick={() => navigate(`/job/${id}/apply`)}
          >
            Apply for this Position
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
