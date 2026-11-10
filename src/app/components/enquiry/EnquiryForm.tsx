
"use client";

import { useState, type FormEvent } from "react";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="rounded-2xl border border-[#dce2f0] bg-white p-5 shadow-lg sm:p-7">

      {/* Form Heading */}
      <h2 className="text-xl font-bold text-[#101426]">
        How to get started
      </h2>

      {/* Steps */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#dce2f0] pb-5">

        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f2fa] text-[#29378e]">
            ▣
          </span>

          <span className="text-sm font-medium">Enquire</span>
        </div>

        <span className="text-[#b3bdd2]">›</span>

        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f2fa] text-[#29378e]">
            ♧
          </span>

          <span className="text-sm font-medium">Get counseled</span>
        </div>

        <span className="text-[#b3bdd2]">›</span>

        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f2fa] text-[#29378e]">
            →
          </span>

          <span className="text-sm font-medium">Enroll</span>
        </div>

        <span className="text-[#b3bdd2]">›</span>

        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f2fa] text-[#29378e]">
            ☆
          </span>

          <span className="text-sm font-medium">Start learning</span>
        </div>

      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-5">

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#101426]">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="h-11 w-full rounded-lg border border-[#dce2f0] px-3 text-sm outline-none transition focus:border-[#29378e] focus:ring-2 focus:ring-[#29378e]/10"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#101426]">
              Mobile Number (WhatsApp)
            </label>

            <div className="flex gap-2">

              <select
                name="countryCode"
                className="h-11 w-[85px] shrink-0 rounded-lg border border-[#dce2f0] bg-white px-2 text-sm outline-none focus:border-[#29378e]"
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+971">🇦🇪 +971</option>
              </select>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone"
                pattern="[0-9]{7,15}"
                required
                className="h-11 min-w-0 w-full rounded-lg border border-[#dce2f0] px-3 text-sm outline-none focus:border-[#29378e] focus:ring-2 focus:ring-[#29378e]/10"
              />

            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#101426]">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="h-11 w-full rounded-lg border border-[#dce2f0] px-3 text-sm outline-none focus:border-[#29378e] focus:ring-2 focus:ring-[#29378e]/10"
            />
          </div>

          {/* Select Course */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#101426]">
              Select Course
            </label>

            <select
              name="course"
              required
              defaultValue=""
              className="h-11 w-full rounded-lg border border-[#dce2f0] bg-white px-3 text-sm text-gray-600 outline-none focus:border-[#29378e]"
            >
              <option value="" disabled>
                Select Course
              </option>

              <option value="masters">
                Master's in Clinical Embryology
              </option>

              <option value="integrated">
                Integrated B.Sc. + M.Sc.
              </option>

              <option value="fellowship">
                Fellowship in Clinical ART
              </option>

            </select>
          </div>

        </div>

        {/* Additional Message */}
        <div className="mt-5">

          <label className="mb-2 block text-sm font-semibold text-[#101426]">
            Any specific questions?
            <span className="font-normal text-gray-400">
              {" "}(Optional)
            </span>
          </label>

          <textarea
            name="message"
            rows={4}
            placeholder="Ask us anything about the course, fees, or admission process..."
            className="w-full resize-none rounded-lg border border-[#dce2f0] px-3 py-3 text-sm outline-none transition focus:border-[#29378e] focus:ring-2 focus:ring-[#29378e]/10"
          />

        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-5 flex h-11 w-full items-center justify-center gap-3 rounded-lg bg-[#29378e] font-semibold text-white transition hover:bg-[#19266e]"
        >
          Submit enquiry
          <span className="text-lg">→</span>
        </button>

        {/* Success Message */}
        {submitted && (
          <p className="mt-4 rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-700">
            Your enquiry has been submitted successfully!
          </p>
        )}

      </form>

    </div>
  );
}
