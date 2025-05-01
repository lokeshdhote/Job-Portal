import React from 'react';
import { BarChart, LineChart, PieChart, FileText, ThumbsUp, CheckCircle } from 'lucide-react';

const Page1 = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Analytics Dashboard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your progress and optimize your job applications with our intuitive dashboard.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden transform transition-all duration-500 hover:shadow-2xl mx-auto max-w-5xl">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <BarChart className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-medium text-gray-800">JobParse.ai Dashboard</h3>
            </div>
            <div className="flex space-x-2">
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                <span>Premium</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium text-gray-600">Applications</h4>
                  <FileText className="h-5 w-5 text-blue-900" />
                </div>
                <p className="text-2xl font-bold text-gray-900">28</p>
                <div className="text-xs text-green-600 flex items-center mt-1">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  <span>+12 this month</span>
                </div>
              </div>

              <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium text-gray-600">Average Match Score</h4>
                  <PieChart className="h-5 w-5 text-teal-700" />
                </div>
                <p className="text-2xl font-bold text-gray-900">78%</p>
                <div className="text-xs text-green-600 flex items-center mt-1">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  <span>+8% improvement</span>
                </div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium text-gray-600">Interview Requests</h4>
                  <LineChart className="h-5 w-5 text-indigo-700" />
                </div>
                <p className="text-2xl font-bold text-gray-900">7</p>
                <div className="text-xs text-green-600 flex items-center mt-1">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  <span>25% conversion rate</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-800 mb-4">Recent Job Matches</h4>
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Match Score</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Senior UX Designer</td>
                      <td className="px-4 py-3 text-sm text-gray-500">TechCorp</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                          <span className="text-sm text-gray-900">85%</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">2 days ago</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Product Manager</td>
                      <td className="px-4 py-3 text-sm text-gray-500">InnovateCo</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                          </div>
                          <span className="text-sm text-gray-900">72%</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">4 days ago</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Full Stack Developer</td>
                      <td className="px-4 py-3 text-sm text-gray-500">WebSolutions</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: '58%' }}></div>
                          </div>
                          <span className="text-sm text-gray-900">58%</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">1 week ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-4">Skills Gap Analysis</h4>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-sm font-medium text-gray-600 mb-3">Skills You Have</h5>
                    <div className="space-y-2">
                      {['UI/UX Design', 'Figma', 'User Research', 'Wireframing', 'Prototyping'].map((skill, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-800">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-600 mb-3">Skills to Develop</h5>
                    <div className="space-y-2">
                      {['Design Systems', 'User Testing', 'Accessibility', 'Motion Design'].map((skill, index) => (
                        <div key={index} className="flex items-center">
                          <div className="h-4 w-4 rounded-full border border-blue-500 mr-2"></div>
                          <span className="text-sm text-gray-800">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Page1;
