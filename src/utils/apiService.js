// API configuration and service functions
const API_BASE_URL = 'https://compass-insurance-backend.onrender.com/api';

// API service functions
export const apiService = {
  // Quote API functions
  createQuote: async (quoteData) => {
    const response = await fetch(`${API_BASE_URL}/quotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteData),
    });
    return response.json();
  },
  getQuotes: async (queryParams = '') => {
    const response = await fetch(`${API_BASE_URL}/quotes${queryParams}`);
    return response.json();
  },

  updateQuote: async (id, quoteData) => {
    // Filter out MongoDB-specific fields
    const allowedFields = ["fullName", "email", "phoneNumber", "insuranceType", "additionalInfo"];
    const filteredData = {};
    allowedFields.forEach(field => {
      if (quoteData[field] !== undefined) {
        filteredData[field] = quoteData[field];
      }
    });

    const response = await fetch(`${API_BASE_URL}/quotes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filteredData),
    });
    return response.json();
  },

  deleteQuote: async (id) => {
    const response = await fetch(`${API_BASE_URL}/quotes/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },

  // Contact API functions
  createContact: async (contactData) => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
    return response.json();
  },
  getContacts: async (queryParams = '') => {
    const response = await fetch(`${API_BASE_URL}/contact${queryParams}`);
    return response.json();
  },

  updateContact: async (id, contactData) => {
    // Filter out MongoDB-specific fields
    const allowedFields = ["fullName", "email", "contactNumber", "subject", "message"];
    const filteredData = {};
    allowedFields.forEach(field => {
      if (contactData[field] !== undefined) {
        filteredData[field] = contactData[field];
      }
    });

    const response = await fetch(`${API_BASE_URL}/contact/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filteredData),
    });
    return response.json();
  },

  deleteContact: async (id) => {
    const response = await fetch(`${API_BASE_URL}/contact/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },

  // Health check
  healthCheck: async () => {
    const response = await fetch(`${API_BASE_URL.replace('/api', '')}/`);
    return response.json();
  }
};

// Utility function to handle API errors
export const handleApiError = (error) => {
  console.error('API Error:', error);
  return {
    success: false,
    message: 'Network error. Please check if the server is running.',
    errors: [{ message: 'Connection failed' }]
  };
};

export default apiService;
