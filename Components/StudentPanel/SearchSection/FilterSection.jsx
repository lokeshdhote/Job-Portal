

import { useMemo } from 'react';
import { Search, MapPin, Briefcase, Code, DollarSign, Building2 } from 'lucide-react';
import {
  getUniqueLocations,
  getUniqueCompanies,
  getUniqueSkills,
  getUniqueJobTypes,
  getSalaryRanges
} from './JobData.jsx';

const FilterSection = ({ filters, setFilters, clearFilters, activeFilterCount }) => {
  const locations = useMemo(() => getUniqueLocations(), []);
  const companies = useMemo(() => getUniqueCompanies(), []);
  const skills = useMemo(() => getUniqueSkills(), []);
  const jobTypes = useMemo(() => getUniqueJobTypes(), []);
  const salaryRanges = useMemo(() => getSalaryRanges(), []);

  const handleChange = (key, value, type = 'checkbox') => {
    setFilters(prev => {
      const prevValues = prev[key];
      if (type === 'checkbox') {
        return {
          ...prev,
          [key]: prevValues.includes(value)
            ? prevValues.filter(item => item !== value)
            : [...prevValues, value]
        };
      } else {
        return { ...prev, [key]: value };
      }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6 divide-y divide-gray-200">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          Filters
          {activeFilterCount > 0 && (
            <>
              <span className="ml-2 bg-blue-600 text-white text-xs font-bold rounded-full px-2 py-1">
                {activeFilterCount}
              </span>
              <button
                onClick={clearFilters}
                className="ml-auto text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                Clear all
              </button>
            </>
          )}
        </h2>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search jobs, skills, or companies..."
            className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.search}
            onChange={e => setFilters(prev => ({ ...prev, search: e.target.value }))}
          />
        </div>
      </div>

      {/* Location Filter */}
      <div className="py-4">
        <FilterBlock
          title="Location"
          icon={<MapPin className="w-4 h-4 mr-2" />}
          list={locations}
          values={filters.locations}
          onChange={loc => handleChange('locations', loc)}
        />
      </div>

      {/* Company Filter */}
      <div className="py-4">
        <FilterBlock
          title="Company"
          icon={<Building2 className="w-4 h-4 mr-2" />}
          list={companies}
          values={filters.companies}
          onChange={company => handleChange('companies', company)}
        />
      </div>

      {/* Skills Filter */}
      <div className="py-4">
        <h3 className="text-md font-medium text-gray-800 mb-3 flex items-center">
          <Code className="w-4 h-4 mr-2" /> Skills
        </h3>
        <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
          {skills.map(skill => (
            <button
              key={skill}
              onClick={() => handleChange('skills', skill)}
              className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                filters.skills.includes(skill)
                  ? 'bg-blue-100 text-blue-800 border-blue-300'
                  : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Salary Range Filter */}
      <div className="py-4">
        <h3 className="text-md font-medium text-gray-800 mb-3 flex items-center">
          <DollarSign className="w-4 h-4 mr-2" /> Salary Range
        </h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="salary-any"
              name="salary"
              checked={filters.salary === null}
              onChange={() => setFilters(prev => ({ ...prev, salary: null }))}
              className="w-4 h-4 text-blue-600"
            />
            <label htmlFor="salary-any" className="ml-2 text-sm text-gray-700">Any</label>
          </div>
          {salaryRanges.map((range, idx) => (
            <div key={idx} className="flex items-center">
              <input
                type="radio"
                id={`salary-${idx}`}
                name="salary"
                checked={
                  filters.salary &&
                  filters.salary.min === range.min &&
                  filters.salary.max === range.max
                }
                onChange={() => setFilters(prev => ({ ...prev, salary: range }))}
                className="w-4 h-4 text-blue-600"
              />
              <label htmlFor={`salary-${idx}`} className="ml-2 text-sm text-gray-700">
                {range.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Job Type Filter */}
      <div className="py-4">
        <FilterBlock
          title="Job Type"
          icon={<Briefcase className="w-4 h-4 mr-2" />}
          list={jobTypes}
          values={filters.jobTypes}
          onChange={type => handleChange('jobTypes', type)}
        />
      </div>
    </div>
  );
};

const FilterBlock = ({ title, icon, list, values, onChange }) => (
  <>
    <h3 className="text-md font-medium text-gray-800 mb-3 flex items-center">{icon} {title}</h3>
    <div className="max-h-40 overflow-y-auto space-y-2">
      {list.map(item => (
        <div key={item} className="flex items-center">
          <input
            type="checkbox"
            id={`${title.toLowerCase()}-${item}`}
            checked={values.includes(item)}
            onChange={() => onChange(item)}
            className="w-4 h-4 text-blue-600 border-gray-300"
          />
          <label htmlFor={`${title.toLowerCase()}-${item}`} className="ml-2 text-sm text-gray-700">
            {item}
          </label>
        </div>
      ))}
    </div>
  </>
);

export default FilterSection;
