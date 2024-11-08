// src/components/PlanSelectionModal.js
import React, { useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const plans = [
  {
    name: 'Essential',
    id: 'plan-3-month',
    priceMonthly: '₹599',
    description: "Ideal for those getting started.",
    features: [
      '3 Months Access',
      'Unlimited Post Automations',
      'Story Automations',
      'Upto 25 Tigger Keywords',
      'Autogram Branding',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    id: 'plan-12-months',
    priceMonthly: '₹499',
    description: "Unlock all features and priority support.",
    features: [
      '12 Months Access',
      'Unlimited Post Automations',
      'Story Automations',
      'Upto 50 Tigger Keywords',
      'AI Auto-reply Feature',
      'Priority 24×7 Support',
      'Remove Branding',
    ],
    featured: true,
  },
];

function PlanSelectionModal({ isOpen, onClose }) {
  // Lock scrolling on the body only when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Clean up the overflow style on component unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;


  return (
    <div className="no-margin-top fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-white py-12 p-6 sm:p-6 sm:rounded-lg sm:border-2 sm:border-gray-100 sm:shadow-lg w-full max-w-3xl sm:mx-4 max-h-[100vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Upgrade to Autogram Pro</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500 text-lg">
            ✕
          </button>
        </div>
        
        {/* Modal Subtitle */}
        <p className="flex text-gray-600 mb-6 text-center">
          Select a plan that suits you best. Enjoy unlimited usage and extra features.
        </p>

        {/* Plan Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 rounded-lg transition-shadow border ${plan.featured ? 'bg-[#222222] text-white' : 'bg-gray-50 text-gray-700'} shadow hover:shadow-lg`}
            >
              <h3 className={`text-lg font-semibold ${plan.featured ? 'text-[#FF543E]' : 'text-[#FF543E]'}`}>
                {plan.name}
              </h3>
              <p className="mt-2 text-4xl font-semibold">
                {plan.priceMonthly} <span className="text-base text-gray-400">/month</span>
              </p>
              <p className={`mt-2 ${plan.featured ? 'text-gray-100' : 'text-gray-600'}`}>{plan.description}</p>

              {/* Features List */}
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckIcon className={`${plan.featured ? 'text-[#FF543E]' : 'text-[#FF543E]'} h-5 w-5 mr-2`} />
                    <span className={`${plan.featured ? 'text-gray-100' : 'text-gray-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                className={`mt-6 w-full py-2.5 rounded-md font-semibold ${plan.featured ? 'bg-[#FF543E] text-[#ffffff] hover:bg-[#FF543E]/90' : 'bg-[#FF543E] text-white hover:bg-[#FF543E]/90'}`}
                onClick={onClose}
              >
                Get started today
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanSelectionModal;