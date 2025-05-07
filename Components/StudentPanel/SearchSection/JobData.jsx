export const jobsData = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      salary: 95000,
      skills: ["React", "JavaScript", "CSS", "HTML"],
      type: "Full-time",
      description:
        "Join our team to build responsive and interactive web applications using React and modern JavaScript.",
      posted: "2 days ago",
      logo:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "DataSystems",
      location: "New York, NY",
      salary: 110000,
      skills: ["Node.js", "Python", "MongoDB", "AWS"],
      type: "Full-time",
      description:
        "Looking for an experienced backend developer to help scale our infrastructure and optimize performance.",
      posted: "1 week ago",
      logo:
        "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "CreativeMinds",
      location: "Austin, TX",
      salary: 85000,
      skills: ["Figma", "Adobe XD", "UI Design", "Prototyping"],
      type: "Full-time",
      description:
        "Join our design team to create beautiful and intuitive user experiences for our products.",
      posted: "3 days ago",
      logo:
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Data Scientist Intern",
      company: "AnalyticsPro",
      location: "Remote",
      salary: 45000,
      skills: ["Python", "R", "Machine Learning", "SQL"],
      type: "Internship",
      description:
        "Great opportunity for students interested in data science and machine learning.",
      posted: "Just now",
      logo:
        "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "Mobile Developer",
      company: "AppWorks",
      location: "Seattle, WA",
      salary: 90000,
      skills: ["React Native", "Swift", "Firebase", "Git"],
      type: "Full-time",
      description:
        "Seeking a talented mobile developer to help build our cross-platform applications.",
      posted: "5 days ago",
      logo:
        "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "CloudSolutions",
      location: "Chicago, IL",
      salary: 120000,
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
      type: "Full-time",
      description:
        "Join our team to build and maintain our cloud infrastructure and deployment pipelines.",
      posted: "1 day ago",
      logo:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      title: "Product Manager",
      company: "InnovateTech",
      location: "Boston, MA",
      salary: 115000,
      skills: ["Product Strategy", "Agile", "User Research", "Analytics"],
      type: "Full-time",
      description:
        "Looking for an experienced product manager to lead our product development lifecycle.",
      posted: "4 days ago",
      logo:
        "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 8,
      title: "QA Engineer",
      company: "QualitySoft",
      location: "Denver, CO",
      salary: 80000,
      skills: ["Testing", "Selenium", "JIRA", "Agile"],
      type: "Full-time",
      description:
        "Join our QA team to ensure the highest quality of our software products.",
      posted: "1 week ago",
      logo:
        "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 9,
      title: "Technical Support Specialist",
      company: "SupportPro",
      location: "Remote",
      salary: 65000,
      skills: ["Troubleshooting", "Customer Service", "Technical Documentation"],
      type: "Part-time",
      description:
        "Looking for a technical support specialist to help our customers resolve issues.",
      posted: "3 days ago",
      logo:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 10,
      title: "Full Stack Developer",
      company: "WebSolutions",
      location: "Portland, OR",
      salary: 105000,
      skills: ["React", "Node.js", "MongoDB", "GraphQL"],
      type: "Full-time",
      description:
        "Join our team to build full-stack web applications using modern technologies.",
      posted: "2 days ago",
      logo:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 11,
      title: "Security Engineer",
      company: "SecureIT",
      location: "Washington, DC",
      salary: 125000,
      skills: ["Cybersecurity", "Pen Testing", "Network Security", "Cloud Security"],
      type: "Full-time",
      description:
        "Join our security team to protect our systems and customer data from threats.",
      posted: "6 days ago",
      logo:
        "https://images.pexels.com/photos/3182751/pexels-photo-3182751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 12,
      title: "Content Marketing Intern",
      company: "ContentHub",
      location: "Miami, FL",
      salary: 40000,
      skills: ["Content Creation", "SEO", "Social Media", "Adobe Creative Suite"],
      type: "Internship",
      description:
        "Great opportunity for marketing students to gain real-world experience.",
      posted: "Just now",
      logo:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  
  // Helper functions
  export const getUniqueLocations = () => {
    return [...new Set(jobsData.map((job) => job.location))];
  };
  
  export const getUniqueCompanies = () => {
    return [...new Set(jobsData.map((job) => job.company))];
  };
  
  export const getUniqueSkills = () => {
    const skillsSet = new Set();
    jobsData.forEach((job) => {
      job.skills.forEach((skill) => skillsSet.add(skill));
    });
    return [...skillsSet];
  };
  
  export const getUniqueJobTypes = () => {
    return [...new Set(jobsData.map((job) => job.type))];
  };
  
  export const getSalaryRanges = () => {
    return [
      { label: "Below $50k", min: 0, max: 50000 },
      { label: "$50k - $80k", min: 50000, max: 80000 },
      { label: "$80k - $100k", min: 80000, max: 100000 },
      { label: "$100k - $120k", min: 100000, max: 120000 },
      { label: "$120k+", min: 120000, max: Infinity },
    ];
  };
  