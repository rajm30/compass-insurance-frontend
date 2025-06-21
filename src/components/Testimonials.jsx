const Testimonials = () => {
  const testimonials = [
    {
      name: "Raj",
      rating: 5,
      comment:
        "COMPASS INSURANCE CONSULTANCY helped me find the perfect health insurance at half the price I was paying before!",
      location: "Ahmedabad",
    },
    {
      name: "Mehul Parmar",
      rating: 4,
      comment:
        "Excellent service! Very prompt, professional, and helpful throughout the process. Highly recommended.",
      location: "Mumbai",
    },
    {
      name: "Patel Dhruvit",
      rating: 5,
      comment:
        "Excellent customer service experience and response from team.. thank you 😇.",
      location: "Ahmedabad",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
            <div className="flex items-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                {testimonial.name.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="font-medium text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
