import { useState } from 'react';
import { FileText, Users, Workflow, BookOpen, ChevronRight } from 'lucide-react';

const BADocumentation = () => {
  const [activeTab, setActiveTab] = useState('brds');
  const [selectedDoc, setSelectedDoc] = useState(0);

  const brds = [
    {
      title: "E-Commerce Mobile Application - BRD 1111",
      project: "ShopEasy Mobile App",
      version: "1.0",
      date: "January 2026",
      content: {
        executiveSummary: "ShopEasy requires a mobile application to expand market reach and provide customers with seamless shopping experience on mobile devices. The app will support iOS and Android platforms, integrating with existing web infrastructure.",
        businessObjectives: [
          "Increase mobile customer base by 40% within 6 months",
          "Improve customer engagement through push notifications",
          "Reduce cart abandonment rate by 25%",
          "Enable offline browsing capabilities",
          "Achieve 4.5+ app store rating"
        ],
        scope: {
          inScope: [
            "User registration and authentication",
            "Product browsing and search",
            "Shopping cart management",
            "Secure payment processing",
            "Order tracking",
            "Push notifications",
            "User reviews and ratings",
            "Wishlist functionality"
          ],
          outScope: [
            "Seller onboarding portal",
            "Advanced analytics dashboard",
            "Social media marketplace integration",
            "AR/VR product preview"
          ]
        },
        stakeholders: [
          { role: "Project Sponsor", name: "Sarah Johnson, VP Marketing", responsibility: "Budget approval and strategic direction" },
          { role: "Product Owner", name: "Mike Chen, Product Manager", responsibility: "Requirements prioritization" },
          { role: "Business Analyst", name: "Alex Kumar", responsibility: "Requirements gathering and documentation" },
          { role: "End Users", name: "Mobile shoppers aged 18-45", responsibility: "Provide feedback and testing" }
        ],
        assumptions: [
          "Existing backend APIs can support mobile traffic",
          "Payment gateway supports mobile SDK integration",
          "Customer database is accessible via secure APIs",
          "Budget of $250,000 approved for development"
        ],
        constraints: [
          "Must launch within 6 months",
          "Must comply with GDPR and PCI-DSS",
          "Must support devices from last 3 years",
          "Development team of 8 members available"
        ],
        risks: [
          { risk: "API performance issues under load", impact: "High", mitigation: "Conduct load testing, implement caching" },
          { risk: "App store approval delays", impact: "Medium", mitigation: "Early submission, compliance review" },
          { risk: "User adoption slower than expected", impact: "Medium", mitigation: "Marketing campaign, incentives" }
        ]
      }
    },
    {
      title: "Healthcare Patient Portal - BRD",
      project: "MediConnect Patient Portal",
      version: "2.0",
      date: "January 2026",
      content: {
        executiveSummary: "MediConnect Hospital requires an enhanced patient portal to improve patient engagement, reduce administrative workload, and comply with healthcare interoperability standards. The portal will enable patients to access medical records, schedule appointments, and communicate with healthcare providers.",
        businessObjectives: [
          "Reduce phone call volume to scheduling desk by 50%",
          "Improve patient satisfaction scores by 30%",
          "Achieve HIPAA compliance certification",
          "Enable 24/7 patient self-service",
          "Reduce no-show appointments by 20%"
        ],
        scope: {
          inScope: [
            "Patient registration and profile management",
            "Online appointment scheduling",
            "Electronic health records access",
            "Secure messaging with providers",
            "Prescription refill requests",
            "Lab results viewing",
            "Bill payment and insurance management",
            "Telehealth video consultation"
          ],
          outScope: [
            "Clinical decision support systems",
            "Medical imaging PACS integration",
            "Insurance claim processing",
            "Emergency alert system"
          ]
        },
        stakeholders: [
          { role: "Executive Sponsor", name: "Dr. Emily Roberts, CMO", responsibility: "Strategic oversight and funding" },
          { role: "Clinical Lead", name: "Dr. James Martinez", responsibility: "Clinical requirements validation" },
          { role: "IT Director", name: "Rachel Thompson", responsibility: "Technical feasibility and security" },
          { role: "Patients", name: "All registered patients", responsibility: "End users and feedback providers" }
        ],
        assumptions: [
          "EHR system supports HL7 FHIR standards",
          "Hospital network infrastructure supports increased traffic",
          "Patients have basic digital literacy",
          "Insurance verification API available"
        ],
        constraints: [
          "Must comply with HIPAA regulations",
          "9-month implementation timeline",
          "Integration with Epic EHR mandatory",
          "Budget limit of $500,000",
          "Must support accessibility standards (WCAG 2.1)"
        ],
        risks: [
          { risk: "EHR integration complexity", impact: "High", mitigation: "Engage Epic certified developers" },
          { risk: "Patient data security breach", impact: "Critical", mitigation: "Penetration testing, encryption" },
          { risk: "Low patient adoption", impact: "Medium", mitigation: "Training programs, helpdesk support" }
        ]
      }
    }
  ];

  const frds = [
    {
      title: "E-Commerce Mobile App - FRD",
      project: "ShopEasy Mobile Application",
      version: "1.0",
      date: "January 2026",
      content: {
        introduction: "This document details the functional requirements for the ShopEasy mobile application, covering user interactions, system behaviors, and integration points.",
        functionalRequirements: [
          {
            id: "FR-001",
            module: "User Authentication",
            priority: "High",
            requirements: [
              "System shall allow users to register using email or phone number",
              "System shall support social login (Google, Facebook, Apple)",
              "System shall implement OTP verification for phone registration",
              "System shall enable biometric authentication (Face ID, Touch ID)",
              "System shall maintain session for 30 days unless user logs out",
              "System shall enforce password complexity requirements"
            ]
          },
          {
            id: "FR-002",
            module: "Product Catalog",
            priority: "High",
            requirements: [
              "System shall display products with images, price, ratings, and descriptions",
              "System shall support search with filters (category, price range, brand)",
              "System shall implement autocomplete for search queries",
              "System shall show product recommendations based on browsing history",
              "System shall cache product data for offline viewing",
              "System shall display real-time inventory status"
            ]
          },
          {
            id: "FR-003",
            module: "Shopping Cart",
            priority: "High",
            requirements: [
              "System shall allow adding products to cart with quantity selection",
              "System shall sync cart across devices for logged-in users",
              "System shall display total price including taxes and shipping",
              "System shall apply discount codes and promotions",
              "System shall save cart for 7 days for guest users",
              "System shall show estimated delivery date"
            ]
          },
          {
            id: "FR-004",
            module: "Payment Processing",
            priority: "Critical",
            requirements: [
              "System shall integrate with payment gateway (Stripe/Razorpay)",
              "System shall support credit/debit cards, UPI, net banking, wallets",
              "System shall securely store payment methods for future use",
              "System shall implement 3D Secure authentication",
              "System shall generate invoice upon successful payment",
              "System shall handle payment failures with retry mechanism"
            ]
          },
          {
            id: "FR-005",
            module: "Order Management",
            priority: "High",
            requirements: [
              "System shall generate unique order ID for each transaction",
              "System shall send order confirmation via email and SMS",
              "System shall provide real-time order tracking",
              "System shall allow order cancellation within 24 hours",
              "System shall enable return/refund requests",
              "System shall maintain order history for 2 years"
            ]
          }
        ],
        nonFunctionalRequirements: [
          { id: "NFR-001", category: "Performance", requirement: "App shall load home screen within 2 seconds" },
          { id: "NFR-002", category: "Performance", requirement: "Search results shall display within 1 second" },
          { id: "NFR-003", category: "Security", requirement: "All data transmission shall use TLS 1.3" },
          { id: "NFR-004", category: "Security", requirement: "Payment data shall be tokenized, not stored locally" },
          { id: "NFR-005", category: "Usability", requirement: "App shall support English, Hindi, and Spanish" },
          { id: "NFR-006", category: "Availability", requirement: "System uptime shall be 99.9%" },
          { id: "NFR-007", category: "Scalability", requirement: "System shall handle 50,000 concurrent users" }
        ],
        integrations: [
          { system: "Payment Gateway", method: "REST API", authentication: "API Key + Secret" },
          { system: "SMS Service", method: "REST API", authentication: "Bearer Token" },
          { system: "Push Notification", method: "Firebase Cloud Messaging", authentication: "Service Account" },
          { system: "Analytics", method: "SDK Integration", authentication: "API Key" }
        ]
      }
    },
    {
      title: "Healthcare Patient Portal - FRD",
      project: "MediConnect Patient Portal",
      version: "2.0",
      date: "January 2026",
      content: {
        introduction: "This document specifies functional requirements for MediConnect Patient Portal, ensuring seamless patient experience while maintaining HIPAA compliance.",
        functionalRequirements: [
          {
            id: "FR-101",
            module: "Patient Registration",
            priority: "Critical",
            requirements: [
              "System shall collect patient demographics (name, DOB, address, contact)",
              "System shall verify identity using government-issued ID",
              "System shall link patient account to medical record number (MRN)",
              "System shall require email verification before account activation",
              "System shall support minor account creation by guardian",
              "System shall maintain audit log of registration activities"
            ]
          },
          {
            id: "FR-102",
            module: "Appointment Scheduling",
            priority: "High",
            requirements: [
              "System shall display available appointment slots by provider and specialty",
              "System shall show provider profiles with ratings and credentials",
              "System shall allow filtering by location, date, and time",
              "System shall send appointment reminders 24 hours in advance",
              "System shall enable appointment rescheduling up to 4 hours before",
              "System shall support virtual/telehealth appointment booking",
              "System shall integrate with provider calendar systems"
            ]
          },
          {
            id: "FR-103",
            module: "Medical Records Access",
            priority: "High",
            requirements: [
              "System shall display patient medical history, diagnoses, and procedures",
              "System shall show lab results with reference ranges and flags",
              "System shall provide medication list with dosage and instructions",
              "System shall display immunization records",
              "System shall allow downloading records in PDF format",
              "System shall log all access to patient records for audit",
              "System shall support sharing records with external providers"
            ]
          },
          {
            id: "FR-104",
            module: "Secure Messaging",
            priority: "High",
            requirements: [
              "System shall enable encrypted messaging between patient and provider",
              "System shall categorize messages (general, prescription, urgent)",
              "System shall route messages to appropriate care team member",
              "System shall notify providers of new messages via email",
              "System shall require provider response within 48 business hours",
              "System shall attach relevant medical context to messages"
            ]
          },
          {
            id: "FR-105",
            module: "Billing and Payments",
            priority: "Medium",
            requirements: [
              "System shall display itemized bills with insurance claims status",
              "System shall support online payment via credit card or ACH",
              "System shall enable payment plan setup for large balances",
              "System shall show insurance coverage and out-of-pocket estimates",
              "System shall generate payment receipts automatically",
              "System shall integrate with billing system for real-time updates"
            ]
          }
        ],
        nonFunctionalRequirements: [
          { id: "NFR-101", category: "Security", requirement: "System shall encrypt data at rest using AES-256" },
          { id: "NFR-102", category: "Security", requirement: "System shall implement multi-factor authentication" },
          { id: "NFR-103", category: "Compliance", requirement: "System shall be HIPAA compliant" },
          { id: "NFR-104", category: "Performance", requirement: "Portal shall load within 3 seconds" },
          { id: "NFR-105", category: "Availability", requirement: "System uptime shall be 99.95%" },
          { id: "NFR-106", category: "Accessibility", requirement: "Portal shall meet WCAG 2.1 Level AA standards" }
        ],
        integrations: [
          { system: "Epic EHR", method: "HL7 FHIR API", authentication: "OAuth 2.0" },
          { system: "Payment Processor", method: "REST API", authentication: "API Key" },
          { system: "Video Conferencing", method: "Zoom Healthcare API", authentication: "JWT" },
          { system: "SMS Gateway", method: "REST API", authentication: "Bearer Token" }
        ]
      }
    }
  ];

  const useCaseDiagrams = [
    {
      title: "E-Commerce System",
      systemName: "Online Shopping Platform",
      actors: [
        { name: "Customer", position: "left" },
        { name: "Guest", position: "left" },
        { name: "Admin", position: "right" },
        { name: "Payment Gateway", position: "right", isSystem: true }
      ],
      useCases: [
        "Browse Products",
        "Search Items",
        "Add to Cart",
        "Checkout",
        "Make Payment",
        "Track Order",
        "Write Review",
        "Manage Inventory",
        "View Analytics"
      ]
    },
    {
      title: "Banking System",
      systemName: "Online Banking Portal",
      actors: [
        { name: "Customer", position: "left" },
        { name: "Teller", position: "left" },
        { name: "Manager", position: "right" },
        { name: "Credit Bureau", position: "right", isSystem: true }
      ],
      useCases: [
        "Login",
        "View Balance",
        "Transfer Funds",
        "Pay Bills",
        "Apply for Loan",
        "Approve Loan",
        "Generate Statement",
        "Manage Accounts"
      ]
    },
    {
      title: "Hospital Management",
      systemName: "Healthcare System",
      actors: [
        { name: "Patient", position: "left" },
        { name: "Doctor", position: "left" },
        { name: "Nurse", position: "right" },
        { name: "Admin", position: "right" }
      ],
      useCases: [
        "Book Appointment",
        "View Records",
        "Prescribe Medicine",
        "Update Vitals",
        "Schedule Surgery",
        "Discharge Patient",
        "Generate Bill",
        "Manage Staff"
      ]
    },
    {
      title: "Library System",
      systemName: "Digital Library",
      actors: [
        { name: "Member", position: "left" },
        { name: "Librarian", position: "right" },
        { name: "Admin", position: "right" }
      ],
      useCases: [
        "Search Books",
        "Borrow Book",
        "Return Book",
        "Reserve Book",
        "Pay Fine",
        "Issue Book",
        "Catalog Books",
        "Manage Members"
      ]
    },
    {
      title: "HR Management System",
      systemName: "Employee Portal",
      actors: [
        { name: "Employee", position: "left" },
        { name: "Manager", position: "left" },
        { name: "HR Admin", position: "right" },
        { name: "Payroll System", position: "right", isSystem: true }
      ],
      useCases: [
        "Apply Leave",
        "Approve Leave",
        "View Payslip",
        "Submit Timesheet",
        "Conduct Review",
        "Post Job",
        "Manage Benefits",
        "Process Payroll"
      ]
    }
  ];

  const userStories = [
    {
      industry: "E-Commerce",
      stories: [
        {
          id: "US-001",
          title: "Quick Product Search",
          story: "As a customer, I want to search products by name or category so that I can quickly find items I'm looking for",
          acceptanceCriteria: [
            "Search bar is visible on home screen",
            "Search results display within 1 second",
            "Results show product image, name, price, and rating",
            "Filter options available (price, brand, rating)"
          ],
          priority: "High",
          storyPoints: 5
        },
        {
          id: "US-002",
          title: "Guest Checkout",
          story: "As a guest user, I want to checkout without creating an account so that I can complete my purchase quickly",
          acceptanceCriteria: [
            "Guest can proceed to checkout from cart",
            "System collects shipping and billing information",
            "Order confirmation sent to provided email",
            "Option to create account after purchase"
          ],
          priority: "Medium",
          storyPoints: 8
        }
      ]
    },
    {
      industry: "Healthcare",
      stories: [
        {
          id: "US-003",
          title: "Online Appointment Booking",
          story: "As a patient, I want to book appointments online so that I don't have to call and wait on hold",
          acceptanceCriteria: [
            "Calendar shows available time slots",
            "Can filter by doctor specialty and location",
            "Confirmation email sent immediately",
            "SMS reminder sent 24 hours before appointment"
          ],
          priority: "High",
          storyPoints: 13
        },
        {
          id: "US-004",
          title: "Lab Results Access",
          story: "As a patient, I want to view my lab results online so that I can access them anytime without calling the clinic",
          acceptanceCriteria: [
            "Results available within 24 hours of completion",
            "Results displayed with normal reference ranges",
            "Abnormal values highlighted",
            "Option to download PDF report"
          ],
          priority: "High",
          storyPoints: 8
        }
      ]
    },
    {
      industry: "Banking",
      stories: [
        {
          id: "US-005",
          title: "Instant Fund Transfer",
          story: "As a customer, I want to transfer money instantly to other accounts so that I can send funds in emergencies",
          acceptanceCriteria: [
            "Transfer completes within 30 seconds",
            "Beneficiary can be saved for future",
            "SMS confirmation sent to both parties",
            "Transaction appears in statement immediately"
          ],
          priority: "Critical",
          storyPoints: 13
        },
        {
          id: "US-006",
          title: "Bill Payment Reminder",
          story: "As a customer, I want to set reminders for recurring bill payments so that I never miss a payment deadline",
          acceptanceCriteria: [
            "Can set multiple reminders",
            "Notification sent 3 days before due date",
            "One-click payment from reminder",
            "Can view payment history"
          ],
          priority: "Medium",
          storyPoints: 5
        }
      ]
    },
    {
      industry: "Education",
      stories: [
        {
          id: "US-007",
          title: "Online Course Enrollment",
          story: "As a student, I want to enroll in courses online so that I can plan my semester schedule conveniently",
          acceptanceCriteria: [
            "View available courses with seats remaining",
            "Check prerequisites automatically",
            "Prevent time conflicts in schedule",
            "Email confirmation with course details"
          ],
          priority: "High",
          storyPoints: 8
        },
        {
          id: "US-008",
          title: "Assignment Submission",
          story: "As a student, I want to submit assignments online so that I can turn in work from anywhere",
          acceptanceCriteria: [
            "Support multiple file formats (PDF, DOC, ZIP)",
            "Maximum file size of 25MB",
            "Submission timestamp recorded",
            "Late submission warning if past deadline"
          ],
          priority: "High",
          storyPoints: 5
        }
      ]
    },
    {
      industry: "Logistics",
      stories: [
        {
          id: "US-009",
          title: "Real-Time Shipment Tracking",
          story: "As a customer, I want to track my shipment in real-time so that I know exactly when to expect delivery",
          acceptanceCriteria: [
            "GPS location updated every 30 minutes",
            "Estimated delivery time displayed",
            "SMS notification when out for delivery",
            "Photo proof of delivery"
          ],
          priority: "High",
          storyPoints: 13
        },
        {
          id: "US-010",
          title: "Delivery Rescheduling",
          story: "As a customer, I want to reschedule delivery if I'm unavailable so that I don't miss my package",
          acceptanceCriteria: [
            "Can reschedule up to 2 hours before delivery",
            "Choose alternate date within 5 days",
            "No additional charges for rescheduling",
            "Confirmation sent via SMS and email"
          ],
          priority: "Medium",
          storyPoints: 8
        }
      ]
    }
  ];

  const renderBRD = (brd: any) => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="border-b-2 border-blue-600 pb-4 mb-6">
        <h2 className="text-3xl font-bold text-gray-800">{brd.title}</h2>
        <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
          <div><span className="font-semibold">Project:</span> {brd.project}</div>
          <div><span className="font-semibold">Version:</span> {brd.version}</div>
          <div><span className="font-semibold">Date:</span> {brd.date}</div>
        </div>
      </div>

      <section className="mb-6">
        <h3 className="text-xl font-bold text-blue-700 mb-3">Executive Summary</h3>
        <p className="text-gray-700 leading-relaxed">{brd.content.executiveSummary}</p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-bold text-blue-700 mb-3">Business Objectives</h3>
        <ul className="space-y-2">
          {brd.content.businessObjectives.map((obj: any, idx: number) => (
            <li key={idx} className="flex items-start">
              <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{obj}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-bold text-blue-700 mb-3">Project Scope</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">In Scope</h4>
            <ul className="space-y-1 text-sm">
              {brd.content.scope.inScope.map((item: any, idx: number) => (
                <li key={idx} className="text-gray-700">✓ {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">Out of Scope</h4>
            <ul className="space-y-1 text-sm">
              {brd.content.scope.outScope.map((item: any, idx: number) => (
                <li key={idx} className="text-gray-700">✗ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-bold text-blue-700 mb-3">Stakeholders</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-blue-100">
              <tr>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Responsibility</th>
              </tr>
            </thead>
            <tbody>
              {brd.content.stakeholders.map((sh: any, idx: number) => (
                <tr key={idx} className="border-b">
                  <td className="p-3 font-semibold">{sh.role}</td>
                  <td className="p-3">{sh.name}</td>
                  <td className="p-3">{sh.responsibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-bold text-blue-700 mb-3">Assumptions & Constraints</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Assumptions</h4>
            <ul className="space-y-2 text-sm">
              {brd.content.assumptions.map((item: any, idx: number) => (
                <li key={idx} className="text-gray-700">• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Constraints</h4>
            <ul className="space-y-2 text-sm">
              {brd.content.constraints.map((item: any, idx: number) => (
                <li key={idx} className="text-gray-700">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-blue-700 mb-3">Risk Assessment</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-red-100">
              <tr>
                <th className="p-3 text-left">Risk</th>
                <th className="p-3 text-left">Impact</th>
                <th className="p-3 text-left">Mitigation Strategy</th>
              </tr>
            </thead>
            <tbody>
              {brd.content.risks.map((risk: any, idx: number) => (
                <tr key={idx} className="border-b">
                  <td className="p-3">{risk.risk}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      risk.impact === 'High' || risk.impact === 'Critical' ? 'bg-red-200 text-red-800' : 'bg-yellow-200 text-yellow-800'
                    }`}>
                      {risk.impact}
                    </span>
                  </td>
                  <td className="p-3">{risk.mitigation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );

  const renderFRD = (frd: any) => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="border-b-2 border-green-600 pb-4 mb-6">
        <h2 className="text-3xl font-bold text-gray-800">{frd.title}</h2>
        <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
          <div><span className="font-semibold">Project:</span> {frd.project}</div>
          <div><span className="font-semibold">Version:</span> {frd.version}</div>
          <div><span className="font-semibold">Date:</span> {frd.date}</div>
        </div>
      </div>

      <section className="mb-6">
        <h3 className="text-xl font-bold text-green-700 mb-3">Introduction</h3>
        <p className="text-gray-700 leading-relaxed">{frd.content.introduction}</p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-bold text-green-700 mb-3">Functional Requirements</h3>
        {frd.content.functionalRequirements.map((module: any, idx: number) => (
          <div key={idx} className="mb-6 bg-green-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-lg">{module.id}: {module.module}</h4>
              <span className={`px-3 py-1 rounded text-xs font-semibold ${
                module.priority === 'Critical' ? 'bg-red-200 text-red-800' :
                module.priority === 'High' ? 'bg-orange-200 text-orange-800' :
                'bg-blue-200 text-blue-800'
              }`}>
                {module.priority}
              </span>
            </div>
            <ul className="space-y-2 text-sm">
              {module.requirements.map((req: any, ridx: number) => (
                <li key={ridx} className="text-gray-700">
                  {module.id}.{ridx + 1} {req}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-bold text-green-700 mb-3">Non-Functional Requirements</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-green-100">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Requirement</th>
              </tr>
            </thead>
            <tbody>
              {frd.content.nonFunctionalRequirements.map((nfr: any, idx: number) => (
                <tr key={idx} className="border-b">
                  <td className="p-3 font-semibold">{nfr.id}</td>
                  <td className="p-3">{nfr.category}</td>
                  <td className="p-3">{nfr.requirement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-green-700 mb-3">System Integrations</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-green-100">
              <tr>
                <th className="p-3 text-left">External System</th>
                <th className="p-3 text-left">Integration Method</th>
                <th className="p-3 text-left">Authentication</th>
              </tr>
            </thead>
            <tbody>
              {frd.content.integrations.map((int: any, idx: number) => (
                <tr key={idx} className="border-b">
                  <td className="p-3 font-semibold">{int.system}</td>
                  <td className="p-3">{int.method}</td>
                  <td className="p-3">{int.authentication}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );

  const renderUseCaseDiagram = (diagram: any) => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">{diagram.title}</h3>
      
      <div className="relative border-4 border-purple-600 rounded-lg p-8 min-h-96">
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded text-sm font-semibold">
          {diagram.systemName}
        </div>
        
        <div className="flex justify-between items-start mt-8">
          <div className="flex flex-col space-y-6">
            {diagram.actors.filter((a: any) => a.position === 'left').map((actor: any, idx: number) => (
              <div key={idx} className="flex flex-col items-center">
                <Users className="w-8 h-8 text-gray-700" />
                <span className="text-xs font-medium mt-2 text-center">{actor.name}</span>
              </div>
            ))}
          </div>
          
          <div className="flex-1 mx-8 grid grid-cols-2 gap-3">
            {diagram.useCases.map((useCase: any, idx: number) => (
              <div key={idx} className="bg-purple-50 border-2 border-purple-400 rounded-full px-4 py-2 text-center">
                <span className="text-xs font-medium text-gray-800">{useCase}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col space-y-6">
            {diagram.actors.filter((a: any) => a.position === 'right').map((actor: any, idx: number) => (
              <div key={idx} className="flex flex-col items-center">
                {actor.isSystem ? (
                  <Workflow className="w-8 h-8 text-gray-700" />
                ) : (
                  <Users className="w-8 h-8 text-gray-700" />
                )}
                <span className="text-xs font-medium mt-2 text-center">{actor.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderUserStories = () => (
    <div className="space-y-6">
      {userStories.map((industry, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-indigo-700">{industry.industry} Industry</h3>
          {industry.stories.map((story, sidx) => (
            <div key={sidx} className="mb-6 p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-mono text-sm font-bold text-indigo-600">{story.id}</span>
                  <h4 className="text-lg font-semibold text-gray-800">{story.title}</h4>
                </div>
                <div className="text-right">
                  <div className={`px-3 py-1 rounded text-xs font-semibold mb-1 ${
                    story.priority === 'Critical' ? 'bg-red-200 text-red-800' :
                    story.priority === 'High' ? 'bg-orange-200 text-orange-800' :
                    'bg-blue-200 text-blue-800'
                  }`}>
                    {story.priority}
                  </div>
                  <div className="text-sm text-gray-600">{story.storyPoints} SP</div>
                </div>
              </div>
              
              <p className="text-gray-700 italic mb-3 bg-white p-3 rounded">{story.story}</p>
              
              <div>
                <p className="font-semibold text-sm mb-2">Acceptance Criteria:</p>
                <ul className="space-y-1 text-sm">
                  {story.acceptanceCriteria.map((criteria, cidx) => (
                    <li key={cidx} className="text-gray-700">✓ {criteria}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Business Analysis Documentation Suite</h1>
          <p className="text-gray-600">Comprehensive BA deliverables across multiple industries</p>
        </div>

        <div className="flex justify-center space-x-4 mb-8 flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('brds')}
            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
              activeTab === 'brds' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            <FileText className="w-5 h-5" />
            BRDs (2)
          </button>
          <button
            onClick={() => setActiveTab('frds')}
            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
              activeTab === 'frds' ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            FRDs (2)
          </button>
          <button
            onClick={() => setActiveTab('usecases')}
            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
              activeTab === 'usecases' ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-purple-50'
            }`}
          >
            <Workflow className="w-5 h-5" />
            Use Cases (5)
          </button>
          <button
            onClick={() => setActiveTab('stories')}
            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
              activeTab === 'stories' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-indigo-50'
            }`}
          >
            <Users className="w-5 h-5" />
            User Stories (10)
          </button>
        </div>

        {activeTab === 'brds' && (
          <div>
            <div className="flex justify-center space-x-4 mb-6">
              {brds.map((brd, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDoc(idx)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    selectedDoc === idx ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
                  }`}
                >
                  {brd.project}
                </button>
              ))}
            </div>
            {renderBRD(brds[selectedDoc])}
          </div>
        )}

        {activeTab === 'frds' && (
          <div>
            <div className="flex justify-center space-x-4 mb-6">
              {frds.map((frd, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDoc(idx)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    selectedDoc === idx ? 'bg-green-600 text-white' : 'bg-white text-gray-700'
                  }`}
                >
                  {frd.project}
                </button>
              ))}
            </div>
            {renderFRD(frds[selectedDoc])}
          </div>
        )}

        {activeTab === 'usecases' && (
          <div className="grid md:grid-cols-2 gap-6">
            {useCaseDiagrams.map((diagram, idx) => (
              <div key={idx}>{renderUseCaseDiagram(diagram)}</div>
            ))}
          </div>
        )}

        {activeTab === 'stories' && renderUserStories()}
      </div>
    </div>
  );
};

export default BADocumentation;