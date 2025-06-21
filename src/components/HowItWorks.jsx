const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Compare Quotes",
      desc: "Enter your details and view insurance plans instantly.",
      icon: "🔍",
    },
    {
      step: "2",
      title: "Select Best Plan",
      desc: "Choose the plan that matches your needs and budget.",
      icon: "✅",
    },
    {
      step: "3",
      title: "Instant Policy Issuance",
      desc: "Complete the purchase and get your policy instantly.",
      icon: "⚡",
    },
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((item) => (
          <div
            key={item.step}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;