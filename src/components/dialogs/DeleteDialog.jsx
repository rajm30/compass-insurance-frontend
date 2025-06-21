import { useState } from "react";

const DeleteDialog = ({
  isOpen,
  currentType,
  currentItem,
  onClose,
  onConfirm,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleConfirm = async () => {
    setIsDeleting(true);
    try {
      await onConfirm();
    } finally {
      setIsDeleting(false);
    }
  };

  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="p-8 text-center">
          {/* Warning Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Confirm Deletion
          </h3>

          {/* Description */}
          <p className="text-slate-600 mb-6 leading-relaxed">
            Are you sure you want to delete this{" "}
            <span className="font-semibold text-slate-800">
              {currentType === "quote" ? "quote request" : "contact message"}
            </span>
            ? This action cannot be undone.
          </p>

          {/* Item Preview */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">
                  {currentItem.fullName?.charAt(0)?.toUpperCase() || "U"}
                </span>
              </div>
              <div className="text-left flex-1 min-w-0">
                <p className="font-semibold text-slate-900 truncate">
                  {currentItem.fullName}
                </p>
                <p className="text-sm text-slate-500 truncate">
                  {currentItem.email}
                </p>
                {currentType === "quote" && currentItem.insuranceType && (
                  <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {currentItem.insuranceType}
                  </span>
                )}
                {currentType === "contact" && currentItem.subject && (
                  <span className="inline-block mt-1 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {currentItem.subject}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-8 py-6 border-t border-slate-200 rounded-b-3xl">
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium rounded-xl transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={isDeleting}
              className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {isDeleting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Deleting...</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <span>Delete Forever</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
