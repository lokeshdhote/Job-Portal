// SkilltestResult.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SkilltestResult = () => {
  const { score } = useParams(); // Get score from the URL
  const navigate = useNavigate();
  const percentage = Math.round((score / 10) * 100); // Assuming 10 questions
  let knowledgeLevel = "";

  if (percentage <= 40) {
    knowledgeLevel = "Basic";
  } else if (percentage <= 70) {
    knowledgeLevel = "Conceptual";
  } else {
    knowledgeLevel = "Advanced";
  }

  return (
    <div className="p-6 bg-[#196eaf] min-h-screen flex items-center justify-center text-white">
      <div className="text-center flex-1">
        <h2 className="text-4xl font-bold mb-6">
          Your Score: {score} / 10
        </h2>
        <h3 className="text-2xl font-semibold mb-4">Percentage: {percentage}%</h3>
        <h3 className="text-2xl font-semibold mb-8">Knowledge Level: {knowledgeLevel}</h3>
        <button
          className="px-6 py-3 bg-[#196eaf] text-white rounded-lg hover:bg-blue-700"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SkilltestResult;
