"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

const TravelLeadForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const inputClass =
    "w-full rounded-md bg-[#F1F6FF] border border-transparent px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0050C8]";
  const labelClass =
    "block text-xs font-semibold text-gray-600 mb-1 tracking-wide uppercase";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    // 🔁 plug your real API here
    setTimeout(() => {
      setIsLoading(false);
      setMessage("Your application has been submitted successfully.");
    }, 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#042F5C] mb-6">
        Travel Insurance in UAE makes your travel worry-free!
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Start Date</label>
            <input type="date" className={inputClass} required />
          </div>
          <div>
            <label className={labelClass}>End Date</label>
            <input type="date" className={inputClass} required />
          </div>
        </div>

        <div>
          <label className={labelClass}>Destination</label>
          <input
            type="text"
            placeholder="Enter Destination"
            className={inputClass}
            required
          />
        </div>

        <div>
          <label className={labelClass}>No. of Passenger</label>
          <input
            type="number"
            min={1}
            placeholder="enter no of passenger..."
            className={inputClass}
            required
          />
        </div>

        <div>
          <label className={labelClass}>Contact Person Name *</label>
          <input
            type="text"
            placeholder="enter person name..."
            className={inputClass}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Mobile Number *</label>
            <input
              type="tel"
              placeholder="enter mobile number..."
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className={labelClass}>Email Address *</label>
            <input
              type="email"
              placeholder="enter email id..."
              className={inputClass}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-[#0050C8] px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#0043a4] transition-colors disabled:opacity-60"
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Send Application
        </button>

        {message && (
          <p className="text-xs text-green-600 mt-3">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default TravelLeadForm;
