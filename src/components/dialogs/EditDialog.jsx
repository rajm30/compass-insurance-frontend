import { useState, useEffect } from "react";

const EditDialog = ({
  isOpen,
  currentType,
  currentItem,
  onClose,
  onConfirm,
}) => {
  const [editFormData, setEditFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentItem) {
      setEditFormData({ ...currentItem });
    }
  }, [currentItem]);

  const handleFormChange = (field, value) => {
    setEditFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      await onConfirm(editFormData);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setEditFormData({});
    onClose();
  };

  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Edit{" "}
                  {currentType === "quote"
                    ? "Quote Request"
                    : "Contact Message"}
                </h3>
                <p className="text-white/80 text-sm">
                  Update {currentType === "quote" ? "quote" : "contact"}{" "}
                  information
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          {currentType === "quote" ? (
            <QuoteEditForm
              editFormData={editFormData}
              onFormChange={handleFormChange}
            />
          ) : (
            <ContactEditForm
              editFormData={editFormData}
              onFormChange={handleFormChange}
            />
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-8 py-6 border-t border-slate-200">
          <div className="flex items-center justify-end space-x-4">
            <button
              onClick={handleClose}
              className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium rounded-xl transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={isLoading}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Saving...</span>
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuoteEditForm = ({ editFormData, onFormChange }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Full Name
        </label>
        <div className="relative">
          <input
            type="text"
            value={editFormData.fullName || ""}
            onChange={(e) => onFormChange("fullName", e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter full name"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Email Address
        </label>
        <div className="relative">
          <input
            type="email"
            value={editFormData.email || ""}
            onChange={(e) => onFormChange("email", e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter email address"
          />
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={editFormData.phoneNumber || ""}
          onChange={(e) => onFormChange("phoneNumber", e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          placeholder="Enter phone number"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Insurance Type
        </label>
        <select
          value={editFormData.insuranceType || ""}
          onChange={(e) => onFormChange("insuranceType", e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        >
          <option value="">Select Insurance Type</option>
          <option value="health">Health Insurance</option>
          <option value="motor">Motor Insurance</option>
          <option value="life">Life Insurance</option>
          <option value="home">Home Insurance</option>
          <option value="travel">Travel Insurance</option>
          <option value="commercial">Commercial Insurance</option>
          <option value="marine">Marine Insurance</option>
          <option value="fire">Fire Insurance</option>
          <option value="liability">Liability Insurance</option>
          <option value="personal-accident">Personal Accident</option>
          <option value="critical-illness">Critical Illness</option>
          <option value="senior-citizen">Senior Citizen Plans</option>
          <option value="child">Child Plans</option>
          <option value="term">Term Insurance</option>
          <option value="endowment">Endowment Plans</option>
          <option value="ulip">ULIPs</option>
          <option value="pension">Pension Plans</option>
          <option value="two-wheeler">Two Wheeler Insurance</option>
          <option value="commercial-vehicle">Commercial Vehicle</option>
          <option value="crop">Crop Insurance</option>
          <option value="pet">Pet Insurance</option>
          <option value="cyber">Cyber Insurance</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Additional Information
      </label>
      <textarea
        value={editFormData.additionalInfo || ""}
        onChange={(e) => onFormChange("additionalInfo", e.target.value)}
        rows={4}
        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
        placeholder="Enter any additional information..."
      />
    </div>
  </div>
);

const ContactEditForm = ({ editFormData, onFormChange }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          value={editFormData.fullName || ""}
          onChange={(e) => onFormChange("fullName", e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          placeholder="Enter full name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={editFormData.email || ""}
          onChange={(e) => onFormChange("email", e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          placeholder="Enter email address"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Contact Number
        </label>
        <input
          type="tel"
          value={editFormData.contactNumber || ""}
          onChange={(e) => onFormChange("contactNumber", e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          placeholder="Enter contact number"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Subject
        </label>
        <select
          value={editFormData.subject || ""}
          onChange={(e) => onFormChange("subject", e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        >
          <option value="">Select Subject</option>
          <option value="quote">Quote Request</option>
          <option value="claim">Claim Support</option>
          <option value="policy">Policy Information</option>
          <option value="other">Other Inquiry</option>
        </select>
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Message
      </label>
      <textarea
        value={editFormData.message || ""}
        onChange={(e) => onFormChange("message", e.target.value)}
        rows={4}
        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
        placeholder="Enter your message..."
      />
    </div>
  </div>
);

export default EditDialog;
