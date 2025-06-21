import { useState } from 'react';

const FilterBar = ({ 
  type, 
  filters, 
  onFiltersChange, 
  onSearch, 
  onClear 
}) => {
  const [searchInput, setSearchInput] = useState(filters.search || '');

  const handleFilterChange = (key, value) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onFiltersChange({ ...filters, search: searchInput });
    onSearch();
  };

  const handleClear = () => {
    const clearedFilters = type === 'quotes' 
      ? { insuranceType: '', email: '', search: '' }
      : { subject: '', email: '', search: '' };
    
    setSearchInput('');
    onFiltersChange(clearedFilters);
    onClear();
  };

  const insuranceTypes = [
    { value: '', label: 'All Insurance Types' },
    { value: 'health', label: 'Health Insurance' },
    { value: 'motor', label: 'Motor Insurance' },
    { value: 'life', label: 'Life Insurance' },
    { value: 'home', label: 'Home Insurance' },
    { value: 'travel', label: 'Travel Insurance' },
    { value: 'commercial', label: 'Commercial Insurance' },
    { value: 'marine', label: 'Marine Insurance' },
    { value: 'fire', label: 'Fire Insurance' },
    { value: 'liability', label: 'Liability Insurance' },
    { value: 'personal-accident', label: 'Personal Accident' },
    { value: 'critical-illness', label: 'Critical Illness' },
    { value: 'senior-citizen', label: 'Senior Citizen Plans' },
    { value: 'child', label: 'Child Plans' },
    { value: 'term', label: 'Term Insurance' },
    { value: 'endowment', label: 'Endowment Plans' },
    { value: 'ulip', label: 'ULIPs' },
    { value: 'pension', label: 'Pension Plans' },
    { value: 'two-wheeler', label: 'Two Wheeler Insurance' },
    { value: 'commercial-vehicle', label: 'Commercial Vehicle' },
    { value: 'crop', label: 'Crop Insurance' },
    { value: 'pet', label: 'Pet Insurance' },
    { value: 'cyber', label: 'Cyber Insurance' },
    { value: 'other', label: 'Other' }
  ];

  const contactSubjects = [
    { value: '', label: 'All Subjects' },
    { value: 'quote', label: 'Quote Request' },
    { value: 'claim', label: 'Claim Support' },
    { value: 'policy', label: 'Policy Information' },
    { value: 'other', label: 'General Inquiry' }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-6">
      <div className="flex flex-col lg:flex-row gap-4 items-end">
        {/* Search Bar */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Search
          </label>
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={`Search ${type === 'quotes' ? 'quotes by name, email, or additional info' : 'contacts by name, email, or message'}...`}
              className="w-full px-4 py-3 pl-12 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </form>
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Primary Filter */}
          <div className="min-w-[200px]">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              {type === 'quotes' ? 'Insurance Type' : 'Subject'}
            </label>
            <select
              value={type === 'quotes' ? filters.insuranceType : filters.subject}
              onChange={(e) => handleFilterChange(type === 'quotes' ? 'insuranceType' : 'subject', e.target.value)}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              {type === 'quotes' ? 
                insuranceTypes.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                )) :
                contactSubjects.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))
              }
            </select>
          </div>

          {/* Email Filter */}
          <div className="min-w-[200px]">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email Filter
            </label>
            <input
              type="email"
              value={filters.email}
              onChange={(e) => handleFilterChange('email', e.target.value)}
              placeholder="Filter by email..."
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleSearchSubmit}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search</span>
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors duration-200 flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Clear</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
