

import { useCallback } from 'react';


const ActiveFilter = ({ filters, setFilters, activeFilterCount }) => {
  if (activeFilterCount === 0) return null;

  const updateFilters = useCallback((key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  }, [setFilters]);

  const removeItem = useCallback((key, item) => {
    updateFilters(key, filters[key].filter(i => i !== item));
  }, [filters, updateFilters]);

  const removeSearch = () => updateFilters('search', '');
  const removeSalary = () => updateFilters('salary', null);

  const Badge = ({ label, value, onRemove }) => (
    <div className="flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm shadow">
      <span className="truncate">{label}: {value}</span>
      <button
        onClick={onRemove}
        className="ml-2 hover:text-blue-600 transition"
        aria-label={`Remove ${label}`}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <div className="mb-4">
      <div className="flex flex-wrap gap-2">
        {filters.search && (
          <Badge label="Search" value={filters.search} onRemove={removeSearch} />
        )}

        {filters.locations?.map(location => (
          <Badge
            key={location}
            label="Location"
            value={location}
            onRemove={() => removeItem('locations', location)}
          />
        ))}

        {filters.companies?.map(company => (
          <Badge
            key={company}
            label="Company"
            value={company}
            onRemove={() => removeItem('companies', company)}
          />
        ))}

        {filters.skills?.map(skill => (
          <Badge
            key={skill}
            label="Skill"
            value={skill}
            onRemove={() => removeItem('skills', skill)}
          />
        ))}

        {filters.jobTypes?.map(type => (
          <Badge
            key={type}
            label="Type"
            value={type}
            onRemove={() => removeItem('jobTypes', type)}
          />
        ))}

        {filters.salary && (
          <Badge
            label="Salary"
            value={
              filters.salary.max === Infinity
                ? `$${filters.salary.min.toLocaleString()}+`
                : `$${filters.salary.min.toLocaleString()} - $${filters.salary.max.toLocaleString()}`
            }
            onRemove={removeSalary}
          />
        )}
      </div>
    </div>
  );
};

export default ActiveFilter;
