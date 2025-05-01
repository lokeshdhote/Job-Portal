import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = question.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-${id}`}
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 hover:text-blue-700 transition-colors duration-300"
      >
        <span className="text-lg">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      <div
        id={`faq-${id}`}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen mt-3 opacity-100' : 'max-h-0 opacity-0'
        } text-gray-600 pr-8`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const Page3 = () => {
  const faqs = [
    {
      question: "How accurate is the AI analysis?",
      answer:
        "Our AI has been trained on millions of job descriptions and resumes, achieving over 95% accuracy in identifying key skills and requirements. However, we always recommend a human review of the results for best outcomes.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Yes, we take data privacy very seriously. Your documents are encrypted during transit and processing. We don't store your full documents after analysis is complete, and you can request complete deletion of your data at any time.",
    },
    {
      question: "How many documents can I analyze with the free plan?",
      answer:
        "The free plan allows you to analyze up to 5 documents per month. This includes any combination of resumes and job descriptions.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 7-day money-back guarantee for all paid plans. If you're not satisfied with our service within the first week, we'll provide a full refund.",
    },
    {
      question: "How does the match score work?",
      answer:
        "Our match score algorithm compares key elements of your resume against the job description, including skills, qualifications, experience, and keywords. The score ranges from 0-100, with 70+ generally indicating a strong match.",
    },
  ];

  return (
    <section id="faq" className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about JobParse.ai.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-blue-900 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page3;
