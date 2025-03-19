import React from "react";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white flex justify-center items-center p-4">
      <div className="w-full sm:w-3/4 md:max-w-4xl bg-gray-900 rounded-xl shadow-lg px-6 sm:px-10 py-8 mt-16 sm:mt-36">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#94A3B8] mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-sm mb-4">
          Effective Date:{" "}
          <span className="text-[#FF9684] text-sm rounded p-1 font-bold">
            13-03-2025
          </span>
        </p>

        {/* Information We Collect */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            1. Information We Collect
          </h2>
          <p className="text-gray-300 mt-2">We collect:</p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>
              <strong>Personal Data</strong>: Name, email, date of birth, gender,
              interests.
            </li>
            <li>
              <strong>Usage Data</strong>: App interactions, login times,
              preferences.
            </li>
          </ul>
        </section>

        {/* How We Use Your Data */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            2. How We Use Your Data
          </h2>
          <p className="text-gray-300 mt-2">We use your data to:</p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>
              Match you with <strong>club partners</strong> based on preferences.
            </li>
            <li>Improve user experience and provide better recommendations.</li>
            <li>Send important notifications & updates.</li>
          </ul>
        </section>

        {/* Data Sharing */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            3. Data Sharing
          </h2>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>
              We do not <strong>sell your data</strong>.
            </li>
            <li>
              We only share minimal necessary data with trusted service providers
              for app functionality.
            </li>
          </ul>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            4. Data Security
          </h2>
          <p className="text-gray-300 mt-2">
            We take security seriously and use{" "}
            <strong>encryption & secure servers</strong>. However, no online
            service is 100% secure, so please use caution.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            5. Your Rights
          </h2>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>
              You can <strong>update or delete</strong> your account at any time.
            </li>
            <li>
              You may request a copy of your data by contacting our support team.
            </li>
          </ul>
        </section>

        {/* Changes to Policy */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            6. Changes to Policy
          </h2>
          <p className="text-gray-300 mt-2">
            We may update this Privacy Policy from time to time. Continued use of
            D-Club means you accept the changes.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            7. Contact Us
          </h2>
          <p className="text-gray-300 mt-2">
            For any privacy-related concerns, reach out to{" "}
            <span className="text-[#FFD700]">dclub.auth+support@gmail.com</span>.
          </p>
        </section>

        {/* Footer */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} D-Club. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;