const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primaryColor to-yellow-300 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
              Refund Policy
            </h1>
            <p className="text-xl text-gray-50">
              JoJo Bike Rental - Fair & Transparent
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {/* Important Notice Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border-l-4 border-red-500 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center mb-6">
            <span className="text-3xl mr-4">⚠️</span>
            <h2 className="text-2xl font-bold text-gray-800">
              Important Notices
            </h2>
          </div>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-red-500"></span>
              <p>
                Any misconduct or intoxication will result in immediate booking
                cancellation without refund
              </p>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-red-500"></span>
              <p>Late returns are strictly non-refundable</p>
            </li>
          </ul>
        </div>

        {/* Policy Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* General Terms */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-4">📜</span>
              <h3 className="text-xl font-bold text-gray-800">General Terms</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-primaryColor"></span>
                <p className="text-gray-600">
                  All refunds processed within 7-10 working days
                </p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-primaryColor"></span>
                <p className="text-gray-600">
                  Refunds only through original payment mode
                </p>
              </li>
            </ul>
          </div>

          {/* Insurance & Maintenance */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-4">🔧</span>
              <h3 className="text-xl font-bold text-gray-800">Maintenance</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-primaryColor"></span>
                <p className="text-gray-600">
                  Valid bills required for maintenance refunds
                </p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-primaryColor"></span>
                <p className="text-gray-600">
                  Insurance claims processed post completion
                </p>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-4">⚖️</span>
              <h3 className="text-xl font-bold text-gray-800">
                Legal & Compliance
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-primaryColor"></span>
                <p className="text-gray-600">
                  Traffic police matters are user's responsibility
                </p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-primaryColor"></span>
                <p className="text-gray-600">
                  Right reserved for violation penalties
                </p>
              </li>
            </ul>
          </div>

          {/* Booking Rules */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-4">📅</span>
              <h3 className="text-xl font-bold text-gray-800">Booking Rules</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-primaryColor"></span>
                <p className="text-gray-600">
                  No-show after 4 hours voids booking
                </p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-primaryColor"></span>
                <p className="text-gray-600">
                  Weekend rates vary with availability
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center mb-12">
          <p className="text-lg font-medium text-gray-800">
            Need help? Contact our support team for refund-related queries
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Note: All cancellation refunds are processed within 7-10 working
            days
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;

export const generateMetadata = () => {
  return {
    title: "Refund Policy | JOJO BIKE RENTAL - Fair Refund Guidelines",
    description:
      "Understand JOJO BIKE RENTAL's refund policies, cancellation terms, and reimbursement procedures. Clear information about rental refunds and payment returns.",
    keywords: [
      "bike rental refund policy",
      "JOJO BIKE RENTAL refunds",
      "rental cancellation refund",
      "bike rental reimbursement",
      "rental money back policy",
      "motorcycle rental refunds",
      "rental payment returns",
      "rental booking cancellation",
      "bike rental terms",
      "rental refund guidelines",
    ],
    openGraph: {
      title: "Refund Policy | JOJO BIKE RENTAL",
      description:
        "Fair and transparent refund policies for JOJO BIKE RENTAL services. Clear guidelines on cancellations and reimbursements.",
      images: [
        {
          url: "/og-refund-policy.jpg",
          width: 1200,
          height: 630,
          alt: "JOJO BIKE RENTAL Refund Policy",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Refund Policy | JOJO BIKE RENTAL",
      description:
        "Clear refund and cancellation policies for bike rentals at JOJO BIKE RENTAL.",
      images: ["/og-refund-policy.jpg"],
    },
  };
};
