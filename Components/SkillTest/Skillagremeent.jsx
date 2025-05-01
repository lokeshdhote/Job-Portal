import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Skillagremnet = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const handleAcceptTerms = () => {
    setTermsAccepted(true);
  };

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  if (!selectedCategory) {
    return (
      <div className="text-center p-6 bg-[#196eaf] min-h-screen flex items-center justify-center text-white">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Choose a Quiz Category</h1>
          <select
            className="px-4 py-2 border rounded bg-white text-black"
            onChange={(e) => handleCategorySelection(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="React">React</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
          </select>
        </div>
      </div>
    );
  }

  if (!termsAccepted) {
    return (
      <div className="text-center p-6 bg-[#196eaf] min-h-screen flex items-center justify-center text-white">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
          <p className="mb-6 text-left">
            1. <span className="font-bold">Tab Switching Limit</span>: You are not allowed to switch tabs or minimize the browser during the quiz. If you switch tabs more than three (3) times, your quiz session will be terminated, and you will not receive any marks for the test.
          </p>
          <p className="mb-6 text-left">
            2. <span className="font-bold">Security and Surveillance</span>: You agree to allow access to your camera for security purposes during the quiz. This is to ensure that the test is being taken without any external help or cheating.
          </p>
          <p className="mb-6 text-left">
            3. <span className="font-bold">Privacy and Data Usage</span>: Any personal information provided will only be used for the purpose of this quiz and to improve the user experience. We respect your privacy and will not share your personal information with third parties without your consent.
          </p>
          <p className="mb-6 text-left">
            4. <span className="font-bold">Conduct During the Quiz</span>: Any form of cheating, including but not limited to, seeking help from external sources or using unauthorized tools, is strictly prohibited.
          </p>
          <p className="mb-6 text-left">
            5. <span className="font-bold">Technical Issues</span>: If you encounter any technical issues during the quiz, please contact the support team immediately.
          </p>
          <button
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
            onClick={handleAcceptTerms}
          >
            Accept & Proceed
          </button>
        </div>
      </div>
    );
  }

  // Once terms are accepted, navigate to the quiz for the selected category
  return (
    <div className="text-center p-6 bg-[#196eaf] min-h-screen flex items-center justify-center text-white">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Ready for the {selectedCategory} Quiz?</h1>
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => navigate(`/skill-test/${selectedCategory}`)}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Skillagremnet;
