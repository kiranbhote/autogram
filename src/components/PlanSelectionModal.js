// src/components/PlanSelectionModal.js
import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const plans = [
  {
    name: 'Essential',
    id: 'plan-3-month',
    priceMonthly: '₹599',
    description: "Ideal for those getting started.",
    features: [
      '3 months access',
      'Unlimited automations',
      'Story automations',
      'Autogram branding',
      'GST Included',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    id: 'plan-12-months',
    priceMonthly: '₹499',
    description: "Unlock all features and priority support.",
    features: [
      '12 months access',
      'Unlimited automations',
      'Story automations',
      'AI auto-reply feature',
      'Priority 24×7 support',
      'Remove branding',
      'GST Included',
    ],
    featured: true,
  },
];

function PlanSelectionModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center shadow-smjustify-center backdrop-blur-sm bg-white bg-opacity-50 z-50 sm:px-0 overflow-y-auto">
      <div className="relative bg-white p-6 rounded-lg border-2 border-gray-100 shadow-lg w-full max-w-3xl mx-auto max-h-screen sm:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Upgrade to Autogram Pro</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            ✕
          </button>
        </div>
        
        {/* Subtitle */}
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