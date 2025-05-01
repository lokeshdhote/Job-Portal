import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { questions } from "../SkillTest/questions.jsx"; // Adjust import based on file structure

const Skilltest = () => {
  const { skillName } = useParams(); // Get the skill name from the URL
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(50); // Set the timer to 60 seconds
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const [switchCount, setSwitchCount] = useState(0);
  const navigate = useNavigate();

  // Filter questions based on the selected skill
  const filteredQuestions = questions.filter((q) => q.category === skillName);

  useEffect(() => {
    if (timer > 0 && !answeredQuestions.has(currentQuestionIndex)) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer === 0 && !answeredQuestions.has(currentQuestionIndex)) {
      handleNext();
    }
  }, [timer, currentQuestionIndex, answeredQuestions]);

  // Handle tab switching logic
  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      setSwitchCount((prevCount) => {
        if (prevCount < 3) {
          alert(
            `You have switched tabs ${prevCount + 1} times. Please stay on this page.`
          );
          return prevCount + 1;
        } else {
          navigate(`/skill-test-completion/${score}`);
          return prevCount;
        }
      });
    }
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleNext = () => {
    if (selectedAnswer === filteredQuestions[currentQuestionIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setAnsweredQuestions((prev) => new Set(prev).add(currentQuestionIndex));
    setSelectedAnswer("");
    setTimer(50); // Reset the timer to 60 seconds for the next question
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  return (
    <div className="p-6 bg-[#196eaf] min-h-screen w-screen flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-2xl p-8 bg-white text-black rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">
          Question {currentQuestionIndex + 1} of {filteredQuestions.length}
        </h2>
        <h3 className="text-lg font-medium mb-6">Time Left: {timer}s</h3>
        <h2 className="text-2xl font-bold mb-4">{currentQuestion.question}</h2>
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg cursor-pointer hover:bg-gray-200 ${selectedAnswer === option ? "bg-blue-100" : ""}`}
              onClick={() => setSelectedAnswer(option)}
            >
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => setSelectedAnswer(option)}
                className="mr-2"
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          {currentQuestionIndex < filteredQuestions.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              disabled={!selectedAnswer}
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => navigate(`/skill-test-completion/${score}`)}
              className="px-6 py-2 bg-[#196eaf] text-white rounded-lg hover:bg-blue-600"
              disabled={!selectedAnswer}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skilltest;
