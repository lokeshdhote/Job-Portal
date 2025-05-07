import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { jobsData } from './JobData.jsx';
import { ArrowLeft, Upload, Loader2 } from 'lucide-react';

function JobApplication() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobsData.find(j => j.id === Number(id));

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    portfolio: '',
    linkedin: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!job) {
    return (
      <div>
        <div>
          <h2>Job Not Found</h2>
          <p>The job listing you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/')}>
            <ArrowLeft /> Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success message and redirect
    alert('Application submitted successfully!');
    navigate('/');
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files[0]
      }));
    }
  };

  return (
    <div>
      <button onClick={() => navigate(`/job/${id}`)}>
        <ArrowLeft /> Back to Job Details
      </button>

      <div>
        <div>
          <h1>Apply for {job.title}</h1>
          <p>at {job.company} • {job.location}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                required
                value={formData.firstName}
                onChange={e => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                required
                value={formData.lastName}
                onChange={e => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <label htmlFor="resume">Resume/CV *</label>
            <div>
              <div>
                <Upload />
                <label htmlFor="resume">
                  <span>Upload a file</span>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                </label>
                <p>or drag and drop</p>
              </div>
              <p>PDF, DOC, DOCX up to 10MB</p>
            </div>
          </div>

          <div>
            <label htmlFor="coverLetter">Cover Letter</label>
            <textarea
              id="coverLetter"
              rows={4}
              value={formData.coverLetter}
              onChange={e => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
            />
          </div>

          <div>
            <div>
              <label htmlFor="portfolio">Portfolio URL</label>
              <input
                type="url"
                id="portfolio"
                value={formData.portfolio}
                onChange={e => setFormData(prev => ({ ...prev, portfolio: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="linkedin">LinkedIn Profile</label>
              <input
                type="url"
                id="linkedin"
                value={formData.linkedin}
                onChange={e => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobApplication;
