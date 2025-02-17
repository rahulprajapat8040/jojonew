
export const generateMetadata = () => {
  return {
    title: "Privacy Policy | JOJO BIKE RENTAL - Transparent Bike Rental Policies",
    description: "Learn about JOJO BIKE RENTAL's privacy policies, terms of service, and rental guidelines. Transparent information about cancellations, extensions, damages, and payment responsibilities.",
    keywords: [
      "bike rental privacy policy",
      "JOJO BIKE RENTAL terms",
      "bike rental cancellation policy",
      "bike rental damage policy",
      "rental extension policy",
      "motorcycle rental terms",
      "vehicle rental guidelines",
      "rental payment policy",
      "rental traffic violations",
      "bike rental rules"
    ],
    openGraph: {
      title: "Privacy Policy | JOJO BIKE RENTAL",
      description: "Comprehensive privacy policies and rental terms for JOJO BIKE RENTAL services. Clear guidelines on payments, damages, and responsibilities.",
      images: [
        {
          url: "/og-privacy-policy.jpg",
          width: 1200,
          height: 630,
          alt: "JOJO BIKE RENTAL Privacy Policy"
        }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Privacy Policy | JOJO BIKE RENTAL",
      description: "Clear and transparent privacy policies for bike rentals at JOJO BIKE RENTAL.",
      images: ["/og-privacy-policy.jpg"],
    }
  };
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primaryColor to-yellow-300 text-white py-16">
        <div className="max-w-6xl mx-auto  text-center">
          <h1 className="text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            At <strong>JOJO BIKE RENTAL</strong>, we are fully transparent with
            our riders. Below is a detailed breakdown of our policies and
            charges.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto  py-12 space-y-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-8 rounded-xl hover:shadow-xl transition-all"
          >
            <h2 className="text-2xl font-bold text-primaryColor flex items-center">
              <span className="bg-yellow-100 p-2 rounded-lg mr-3">
                {section.icon}
              </span>
              {section.title}
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              {section.description}
            </p>
            {section.list && (
              <ul className="mt-4 space-y-2">
                {section.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-2 text-gray-700"
                  >
                    <span className="text-green-500">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Additional Important Policies */}
      <div className="max-w-6xl mx-auto  py-12">
        <div className="bg-white rounded-3xl p-8 border-l-4 border-red-500">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Important Notes
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center">
              <span className="text-red-500 mr-2">⚠</span>
              JOJO BIKE RENTAL reserves the right to charge violation penalties
            </p>
            <p className="flex items-center">
              <span className="text-red-500 mr-2">⚠</span>
              Weekend (Sat-Sun) rates may vary based on availability
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">
                Interstate Travel Requirements
              </h3>
              <p className="text-sm">
                Temporary state permit (₹20-100) required. Non-compliance may
                result in vehicle seizure. All legal proceedings and expenses to
                be borne by customer.
              </p>
            </div>
          </div>
        </div>

        {/* Exceptions Section */}
        <div className="mt-12 bg-red-50 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center">
            <svg
              className="w-8 h-8 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Exceptions
          </h2>
          <div className="grid gap-4">
            {[
              {
                title: "Alcohol Influence",
                content:
                  "100% liability for vehicle damage when under influence",
              },
              {
                title: "Consequential Damage",
                content:
                  "100% liability for damage from continued driving after impact",
              },
              {
                title: "Tire Puncture",
                content: "Customer liable for repair costs during possession",
              },
            ].map((exception, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-400"
              >
                <h3 className="font-bold text-red-700 mb-2">
                  {exception.title}
                </h3>
                <p className="text-gray-700">{exception.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Responsibility Section */}
        <div className="mt-12 bg-yellow-50 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6 flex items-center">
            <svg
              className="w-8 h-8 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Payment Responsibility
          </h2>

          <div className="grid gap-6">
            {/* Payment Methods */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-400">
              <h3 className="font-bold text-blue-700 mb-4 text-xl">
                Payment Methods & Requirements
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Accepted payment methods include credit card, debit card,
                  E-wallets, and cash.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Riders must ensure sufficient funds for all charges</li>
                  <li>Bank/card charges are rider's responsibility</li>
                  <li>Processing fee may apply for declined payments</li>
                </ul>
              </div>
            </div>

            {/* Default Payments */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-400">
              <h3 className="font-bold text-yellow-700 mb-4 text-xl">
                Default Payments
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>For payment defaults:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    JOJO BIKE RENTAL may charge reminder fees and default
                    interest
                  </li>
                  <li>Third-party collection services may be utilized</li>
                  <li>
                    Future reservations may be prohibited until full payment
                  </li>
                  <li>
                    Detailed payment instructions will be provided in invoice
                  </li>
                </ul>
              </div>
            </div>

            {/* Collision and Incidents */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-400">
              <h3 className="font-bold text-red-700 mb-4 text-xl">
                Collision & Incident Charges
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">Rider Responsibility:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>All collision-related towing charges</li>
                    <li>Impounding charges from rider failure</li>
                    <li>Damages exceeding the Damage Fee</li>
                    <li>All toll payments when due</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">JOJO BIKE RENTAL Covers:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Towing charges from vehicle failure</li>
                    <li>Mechanical issues not caused by rider</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const sections = [
  {
    title: "Cancellation",
    description:
      "Feel free to cancel your booking before your booking time starts. Refund will be credited to your JOJO BIKE RENTAL wallet. That can be use for your next booking. ",
    list: [
      "Cancellation refund will not be done through the original payment method",
    ],
    icon: (
      <svg
        className="w-6 h-6 text-primaryColor"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
  },
  {
    title: "Extension",
    description:
      "You can extend your booking based on vehicle availability. Charges must be paid in full via cash or online payment.",
    list: [
      "Normal charges apply for extended time",
      "Extension subject to availability",
      "Payment must be completed for extension",
    ],
    icon: (
      <svg
        className="w-6 h-6 text-primaryColor"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
  },
  {
    title: "Late Return",
    description: "Additional charges apply for late returns beyond 3 hours:",
    list: [
      "Non-Geared Scooters: ₹80 + hourly rates",
      "Other Bikes: ₹100 + hourly rates",
    ],
    icon: (
      <svg
        className="w-6 h-6 text-primaryColor"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Extra KM Charges",
    description: "Charges apply after exceeding free kilometers:",
    list: [
      "₹3/km for all vehicles",
      "Weekend rates may vary",
      "State permits required for interstate travel",
    ],
    icon: (
      <svg
        className="w-6 h-6 text-primaryColor"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
  {
    title: "Traffic Violations",
    description: "Penalties for traffic and parking violations:",
    list: ["Full payment of fines + ₹500 per 30 days of late payment"],
    icon: (
      <svg
        className="w-6 h-6 text-primaryColor"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
  },
  {
    title: "Vehicle Damage",
    description: "Insurance claims only for estimates above ₹10,000.",
    list: [
      "Customer must pay ₹10,000 + rental charges during repair",
      "Refund for insurance claims processed post-verification",
    ],
    icon: (
      <svg
        className="w-6 h-6 text-primaryColor"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
  {
    title: "Operating Hours",
    description: "Hub Stations: 9 AM - 8 PM | Customer Support: 8 AM - 8 PM",
    icon: (
      <svg
        className="w-6 h-6 text-primaryColor"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
  {
    title: "No Show",
    description:
      "Bookings would stand cancelled if after 4 hours of booking start time the customer still doesn't show up.",
    list: ["No refunds would be applicable"],
    icon: (
      <svg
        className="w-6 h-6 text-primaryColor"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Over Speeding",
    description:
      "Initially two warnings, then charged at ₹200 for over speeding 3rd time. Beyond 3rd warning a Penalty of ₹500 is charged.",
    list: [
      "Non Geared Scooters: 75km/hour limit",
      "All Other vehicles: 80km/hour limit",
      "Penalties are in addition to any government fines",
    ],
    icon: (
      <svg
        className="w-6 h-6 text-primaryColor"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Key/Helmet Return",
    description: "Penalties for non-return of items:",
    list: ["₹1000 for helmet", "₹1500 for key"],
    icon: (
      <svg
        className="w-6 h-6 text-primaryColor"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
        />
      </svg>
    ),
  },
  {
    title: "GPS Device",
    description:
      "In case the GPS is missing or broken/damaged, a penalty of INR 5000 will be levied on the rider.",
    icon: (
      <svg
        className="w-6 h-6 text-primaryColor"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Petrol Policy",
    description:
      "JOJO BIKE RENTAL does not provide fuel. The tariff is exclusive of fuel.",
    list: [
      "Half litre fuel provided at delivery",
      "Same amount expected at return",
      "No refunds for excess fuel",
      "Charges applicable for fuel shortage",
    ],
    icon: (
      <svg
        className="w-6 h-6 text-primaryColor"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    ),
  },
  {
    title: "Misconduct",
    description:
      "Any misconduct with the station executive will result in booking cancellation without refund.",
    list: [
      "Zero tolerance for misbehavior",
      "No refunds in case of misconduct",
      "Applies to behavior under influence of alcohol",
    ],
    icon: (
      <svg
        className="w-6 h-6 text-primaryColor"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
  },
  {
    title: "Operating Hours",
    description: "Hub Stations: 9 AM - 8 PM | Customer Support: 8 AM - 8 PM",
    list: [
      "No pickup/return after operating hours",
      "Next day service for after-hours cases",
      "Additional charges apply for next-day returns",
    ],
    icon: (
      <svg
        className="w-6 h-6 text-primaryColor"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default PrivacyPolicy;
