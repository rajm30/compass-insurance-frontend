import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { apiService } from "../utils/apiService";
import { EditDialog, DeleteDialog } from "../components/dialogs";
import { ToastContainer } from "../components/Toast";
import { useToast } from "../hooks/useToast";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";
import "../pages/Admin.css";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("quotes");
  const [quotes, setQuotes] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Pagination and filtering states
  const [quotePagination, setQuotePagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalQuotes: 0,
    hasNextPage: false,
    hasPrevPage: false
  });
  const [contactPagination, setContactPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalContacts: 0,
    hasNextPage: false,
    hasPrevPage: false
  });
  
  // Filter states
  const [quoteFilters, setQuoteFilters] = useState({
    insuranceType: "",
    email: "",
    search: ""
  });
  const [contactFilters, setContactFilters] = useState({
    subject: "",
    email: "",
    search: ""
  });
  
  // Dialog states
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [currentType, setCurrentType] = useState("");

  // Toast notifications
  const { toasts, removeToast, showSuccess, showError, showInfo } = useToast();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/Admin-vishal989890@7858Patel@") {
      navigate("/", { replace: true });
    }
  }, [navigate, location]);

  useEffect(() => {
    const session = localStorage.getItem("admin_session");
    if (session === "authenticated") {
      setIsAuthenticated(true);
    }
  }, []);  const fetchData = useCallback(async (page = 1, filters = {}) => {
    setLoading(true);
    try {
      if (activeTab === "quotes") {
        const currentFilters = { ...quoteFilters, ...filters };
        const params = new URLSearchParams({
          page: page.toString(),
          limit: "10",
          ...(currentFilters.insuranceType && { insuranceType: currentFilters.insuranceType }),
          ...(currentFilters.email && { email: currentFilters.email }),
          ...(currentFilters.search && { search: currentFilters.search })
        });
        
        const result = await apiService.getQuotes(`?${params}`);
        if (result.success) {
          setQuotes(result.data.quotes || []);
          setQuotePagination(result.data.pagination || {});
        }
      } else if (activeTab === "contacts") {
        const currentFilters = { ...contactFilters, ...filters };
        const params = new URLSearchParams({
          page: page.toString(),
          limit: "10",
          ...(currentFilters.subject && { subject: currentFilters.subject }),
          ...(currentFilters.email && { email: currentFilters.email }),
          ...(currentFilters.search && { search: currentFilters.search })
        });
        
        const result = await apiService.getContacts(`?${params}`);
        if (result.success) {
          setContacts(result.data.contacts || []);
          setContactPagination(result.data.pagination || {});
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      showError("Failed to load data. Please try again.", 4000);
    } finally {
      setLoading(false);
    }  }, [activeTab, quoteFilters, contactFilters, showError]);
  
  // Filter and pagination handlers
  const handleFiltersChange = useCallback((newFilters) => {
    if (activeTab === "quotes") {
      setQuoteFilters(newFilters);
    } else {
      setContactFilters(newFilters);
    }
  }, [activeTab]);

  const handleSearch = useCallback(() => {
    fetchData(1); // Reset to first page when searching
  }, [fetchData]);

  const handleClearFilters = useCallback(() => {
    if (activeTab === "quotes") {
      setQuoteFilters({ insuranceType: "", email: "", search: "" });
    } else {
      setContactFilters({ subject: "", email: "", search: "" });
    }
    fetchData(1); // Reset to first page when clearing
  }, [activeTab, fetchData]);
  const handlePageChange = useCallback((page) => {
    fetchData(page);
  }, [fetchData]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated, fetchData]);
  const handleDelete = (type, item) => {
    setCurrentItem(item);
    setCurrentType(type);
    setShowDeleteDialog(true);
  };
  const confirmDelete = async () => {
    try {
      let result;
      if (currentType === "quote") {
        result = await apiService.deleteQuote(currentItem._id);
      } else {
        result = await apiService.deleteContact(currentItem._id);
      }

      if (
        result.success ||
        result.message === "Quote deleted successfully" ||
        result.message === "Contact deleted successfully"
      ) {
        // Show success toast
        showSuccess(
          `${
            currentType === "quote" ? "Quote request" : "Contact message"
          } deleted successfully!`,
          4000
        );

        // Refresh data after deletion
        fetchData();
        setShowDeleteDialog(false);
        setCurrentItem(null);
        setCurrentType("");
      } else {
        console.error(`Failed to delete ${currentType}:`, result);
        showError(
          `Failed to delete ${currentType}: ${
            result.message || "Unknown error"
          }`,
          5000
        );
      }
    } catch (error) {
      console.error(`Error deleting ${currentType}:`, error);
      showError(
        `Error deleting ${currentType}: ${error.message || "Network error"}`,
        5000
      );
    }
  };

  const handleDeleteClose = () => {
    setShowDeleteDialog(false);
    setCurrentItem(null);
    setCurrentType("");
  };
  const handleEdit = (type, item) => {
    setCurrentItem(item);
    setCurrentType(type);
    setShowEditDialog(true);
  };
  const confirmEdit = async (editFormData) => {
    try {
      let result;
      if (currentType === "quote") {
        result = await apiService.updateQuote(currentItem._id, editFormData);
      } else {
        result = await apiService.updateContact(currentItem._id, editFormData);
      }

      if (result.success) {
        // Show success toast
        showSuccess(
          `${
            currentType === "quote" ? "Quote request" : "Contact message"
          } updated successfully!`,
          4000
        );

        // Refresh data after update
        fetchData();
        setShowEditDialog(false);
        setCurrentItem(null);
        setCurrentType("");
      } else {
        console.error(`Failed to update ${currentType}:`, result);
        showError(
          `Failed to update ${currentType}: ${
            result.message || "Unknown error"
          }`,
          5000
        );
      }
    } catch (error) {
      console.error(`Error updating ${currentType}:`, error);
      showError(
        `Error updating ${currentType}: ${error.message || "Network error"}`,
        5000
      );
    }
  };

  const handleEditClose = () => {
    setShowEditDialog(false);
    setCurrentItem(null);
    setCurrentType("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnimating(true);

    setTimeout(() => {
      if (password === "!!vaibhav%%98!@9890@7858Patel*Admin.com*") {
        setIsAuthenticated(true);
        localStorage.setItem("admin_session", "authenticated");
        setError("");
        showSuccess("Welcome back! Successfully logged in.", 4000);
      } else {
        setError("Incorrect password");
        showError("Invalid password. Please try again.", 4000);
        setTimeout(() => setError(""), 3000);
      }
      setIsAnimating(false);
    }, 1000);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("admin_session");
    showInfo("Successfully logged out. See you soon!", 3000);
    navigate("/", { replace: true });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Modern grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10"></div>{" "}
      {!isAuthenticated ? (
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-md">
            {/* Login Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              {/* Logo Section */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Admin Portal
                </h1>
                <p className="text-slate-400">
                  Secure access to your dashboard
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter your secure password"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                    >
                      {showPassword ? (
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
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      ) : (
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
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464M14.12 14.12l1.415 1.415M14.12 14.12L9.878 9.878m4.242 4.242L8.464 8.464"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isAnimating}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnimating ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Authenticating...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
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
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h2m10 3v2a3 3 0 01-3 3h-2m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h2m5 4v1a3 3 0 01-3 3h-2"
                        />
                      </svg>
                      <span>Sign In</span>
                    </div>
                  )}
                </button>
              </form>

              {/* Security Notice */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-xs text-slate-500 text-center">
                  🔒 Authorized personnel only • Protected by enterprise
                  security
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 min-h-screen">
          {/* Header */}
          <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-white">
                      Admin Dashboard
                    </h1>
                    <p className="text-sm text-slate-400">
                      Insurance Management System
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-white">
                      Welcome back!
                    </p>
                    <p className="text-xs text-slate-400">Administrator</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-400">
                      Total Quotes
                    </p>                    <p className="text-2xl font-bold text-white">
                      {quotePagination.totalQuotes || quotes.length}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-400">
                      Messages
                    </p>                    <p className="text-2xl font-bold text-white">
                      {contactPagination.totalContacts || contacts.length}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-400">
                      Active Today
                    </p>
                    <p className="text-2xl font-bold text-white">
                      {quotes.filter(
                        (q) =>
                          new Date(q.createdAt).toDateString() ===
                          new Date().toDateString()
                      ).length +
                        contacts.filter(
                          (c) =>
                            new Date(c.createdAt).toDateString() ===
                            new Date().toDateString()
                        ).length}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-400">
                      Response Time
                    </p>
                    <p className="text-2xl font-bold text-white">2.4h</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation Tabs */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-1 mb-8 inline-flex">
              <button
                onClick={() => {
                  setActiveTab("quotes");
                  setQuotePagination({ currentPage: 1, totalPages: 1, totalQuotes: 0, hasNextPage: false, hasPrevPage: false });
                  setQuoteFilters({ insuranceType: "", email: "", search: "" });
                }}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === "quotes"
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center space-x-2">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Quote Requests</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    {quotes.length}
                  </span>
                </div>
              </button>
              <button
                onClick={() => {
                  setActiveTab("contacts");
                  setContactPagination({ currentPage: 1, totalPages: 1, totalContacts: 0, hasNextPage: false, hasPrevPage: false });
                  setContactFilters({ subject: "", email: "", search: "" });
                }}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === "contacts"
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center space-x-2">
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span>Contact Messages</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                    {contacts.length}
                  </span>
                </div>
              </button>
            </div>
            {/* Loading State */}
            {loading && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
                  <p className="text-slate-400">Loading data...</p>
                </div>
              </div>
            )}{" "}            {/* Quotes Tab */}
            {activeTab === "quotes" && !loading && (
              <>
                {/* Filter Bar for Quotes */}
                <FilterBar
                  type="quotes"
                  filters={quoteFilters}
                  onFiltersChange={handleFiltersChange}
                  onSearch={handleSearch}
                  onClear={handleClearFilters}
                />
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/10">
                    <h2 className="text-xl font-semibold text-white">
                      Quote Requests Management
                    </h2>
                    <p className="text-slate-400 text-sm">
                      Manage and track insurance quote requests
                    </p>
                  </div>

                {quotes.length === 0 ? (
                  <div className="p-12 text-center">
                    <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      No quote requests
                    </h3>
                    <p className="text-slate-400">
                      Quote requests will appear here when submitted
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-800/50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                            Contact
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                            Insurance Type
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                            Details
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-4 text-right text-xs font-medium text-slate-300 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {quotes.map((quote) => (
                          <tr
                            key={quote._id}
                            className="hover:bg-white/5 transition-colors duration-150"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-white">
                                {quote.fullName}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-slate-300">
                                {quote.email}
                              </div>
                              <div className="text-sm text-slate-400">
                                {quote.phoneNumber}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                                {quote.insuranceType}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div
                                className="text-sm text-slate-300 max-w-xs truncate"
                                title={quote.additionalInfo}
                              >
                                {quote.additionalInfo ||
                                  "No additional information"}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                              {new Date(quote.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex items-center justify-end space-x-2">
                                <button
                                  onClick={() => handleEdit("quote", quote)}
                                  className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDelete("quote", quote)}
                                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200"
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                </div>
                
                {/* Pagination for Quotes */}
                {quotes.length > 0 && (
                  <Pagination
                    currentPage={quotePagination.currentPage}
                    totalPages={quotePagination.totalPages}
                    hasNextPage={quotePagination.hasNextPage}
                    hasPrevPage={quotePagination.hasPrevPage}
                    onPageChange={handlePageChange}
                    totalItems={quotePagination.totalQuotes}
                  />
                )}
              </>
            )}            {/* Contacts Tab */}
            {activeTab === "contacts" && !loading && (
              <>
                {/* Filter Bar for Contacts */}
                <FilterBar
                  type="contacts"
                  filters={contactFilters}
                  onFiltersChange={handleFiltersChange}
                  onSearch={handleSearch}
                  onClear={handleClearFilters}
                />
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/10">
                    <h2 className="text-xl font-semibold text-white">
                      Contact Messages Management
                    </h2>
                    <p className="text-slate-400 text-sm">
                      Manage and respond to customer inquiries
                    </p>
                  </div>

                {contacts.length === 0 ? (
                  <div className="p-12 text-center">
                    <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      No contact messages
                    </h3>
                    <p className="text-slate-400">
                      Customer messages will appear here when submitted
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-800/50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                            Contact
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                            Subject
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                            Message
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-4 text-right text-xs font-medium text-slate-300 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {contacts.map((contact) => (
                          <tr
                            key={contact._id}
                            className="hover:bg-white/5 transition-colors duration-150"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-white">
                                {contact.fullName}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-slate-300">
                                {contact.email}
                              </div>
                              <div className="text-sm text-slate-400">
                                {contact.contactNumber}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase ${
                                  contact.subject === "quote"
                                    ? "bg-blue-100 text-blue-800"
                                    : contact.subject === "claim"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : contact.subject === "policy"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-purple-100 text-purple-800"
                                }`}
                              >
                                {contact.subject}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div
                                className="text-sm text-slate-300 max-w-xs truncate"
                                title={contact.message}
                              >
                                {contact.message}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                              {new Date(contact.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex items-center justify-end space-x-2">
                                <button
                                  onClick={() => handleEdit("contact", contact)}
                                  className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() =>
                                    handleDelete("contact", contact)
                                  }
                                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200"
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                </div>
                
                {/* Pagination for Contacts */}
                {contacts.length > 0 && (
                  <Pagination
                    currentPage={contactPagination.currentPage}
                    totalPages={contactPagination.totalPages}
                    hasNextPage={contactPagination.hasNextPage}
                    hasPrevPage={contactPagination.hasPrevPage}
                    onPageChange={handlePageChange}
                    totalItems={contactPagination.totalContacts}
                  />
                )}
              </>
            )}
          </main>

          {/* Footer */}
          <footer className="mt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-slate-400 text-sm">
                  Insurance Admin Portal • {new Date().getFullYear()} • Created
                  with ❤️ by Shashank Vaghela
                </p>
              </div>
            </div>
          </footer>
        </div>
      )}
      {/* Dialog Components */}
      <EditDialog
        isOpen={showEditDialog}
        currentType={currentType}
        currentItem={currentItem}
        onClose={handleEditClose}
        onConfirm={confirmEdit}
      />
      <DeleteDialog
        isOpen={showDeleteDialog}
        currentType={currentType}
        currentItem={currentItem}
        onClose={handleDeleteClose}
        onConfirm={confirmDelete}
      />
      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
};

export default Admin;
