import React, { useState } from "react";


const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 font-semibold rounded-l-xl ${
              isLogin ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 font-semibold rounded-r-xl ${
              !isLogin ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {isLogin ? (
          <form className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-blue-600">Login</h2>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="••••••••"
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
              Login
            </button>
            <p className="text-sm text-center text-gray-500 mt-2">
              Don't have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer font-medium"
                onClick={() => setIsLogin(false)}
              >
                Register
              </span>
            </p>
          </form>
        ) : (
          <form className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-blue-600">Register</h2>
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="••••••••"
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
              Register
            </button>
            <p className="text-sm text-center text-gray-500 mt-2">
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer font-medium"
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
export default Auth