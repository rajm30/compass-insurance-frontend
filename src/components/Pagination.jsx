const Pagination = ({ 
  currentPage, 
  totalPages, 
  hasNextPage, 
  hasPrevPage, 
  onPageChange,
  totalItems,
  itemsPerPage = 10
}) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  if (totalPages <= 1) return null;

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Results Info */}
        <div className="text-slate-300 text-sm">
          Showing <span className="font-medium text-white">{startItem}</span> to{' '}
          <span className="font-medium text-white">{endItem}</span> of{' '}
          <span className="font-medium text-white">{totalItems}</span> results
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center space-x-2">
          {/* Previous Button */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={!hasPrevPage}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
              hasPrevPage
                ? 'bg-slate-700 hover:bg-slate-600 text-white'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center space-x-1">
            {/* First page if not visible */}
            {generatePageNumbers()[0] > 1 && (
              <>
                <button
                  onClick={() => onPageChange(1)}
                  className="px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
                >
                  1
                </button>
                {generatePageNumbers()[0] > 2 && (
                  <span className="px-2 text-slate-500">...</span>
                )}
              </>
            )}

            {/* Visible page numbers */}
            {generatePageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                  page === currentPage
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Last page if not visible */}
            {generatePageNumbers()[generatePageNumbers().length - 1] < totalPages && (
              <>
                {generatePageNumbers()[generatePageNumbers().length - 1] < totalPages - 1 && (
                  <span className="px-2 text-slate-500">...</span>
                )}
                <button
                  onClick={() => onPageChange(totalPages)}
                  className="px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
                >
                  {totalPages}
                </button>
              </>
            )}
          </div>

          {/* Next Button */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={!hasNextPage}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
              hasNextPage
                ? 'bg-slate-700 hover:bg-slate-600 text-white'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            <span className="hidden sm:inline">Next</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
