import React from 'react';
import { Star } from 'lucide-react';

const Testimonial = ({ quote, author, role, company, rating, image }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-600 italic mb-6">"{quote}"</p>
      <div className="flex items-center">
        <img src={image} alt={author} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-semibold text-gray-800">{author}</h4>
          <p className="text-gray-500 text-sm">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "JobParse.ai helped me understand exactly what skills I was missing for my dream job. After updating my resume based on their recommendations, I got callbacks for 4 out of 5 applications!",
      author: "Sophia Chen",
      role: "UX Designer",
      company: "TechCorp",
      rating: 5,
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "As a career coach, I recommend JobParse.ai to all my clients. The keyword analysis and match scores provide invaluable insights for job seekers in competitive markets.",
      author: "Marcus Johnson",
      role: "Career Coach",
      company: "CareerBoost",
      rating: 5,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "After six months of job searching with no luck, I tried JobParse.ai and discovered I was missing key technical terms in my resume. Two weeks later, I landed a job at a Fortune 500 company!",
      author: "Aisha Patel",
      role: "Data Scientist",
      company: "AnalyticsPro",
      rating: 4,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied job seekers who have transformed their application process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      
      </div>
    </section>
  );
};

export default TestimonialsSection;
