"use client";

import { FC } from "react";

const PrivacyPolicy: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-lg">
        Your privacy is important to us. It is our policy to respect your
        privacy regarding any information we may collect from you across our
        website, and other sites we own and operate.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Information We Collect</h2>
      <p className="mt-4">
        We may collect the following types of information:
        <ul className="list-disc pl-8 mt-2">
          <li>Personal Identification Information (Name, email, etc.)</li>
          <li>
            Non-personal Identification Information (Browser type, device type,
            etc.)
          </li>
        </ul>
      </p>

      <h2 className="mt-6 text-xl font-semibold">
        How We Use Your Information
      </h2>
      <p className="mt-4">
        We use the information we collect for various purposes, including:
        <ul className="list-disc pl-8 mt-2">
          <li>Providing and improving our services</li>
          <li>Communicating with you</li>
          <li>Enhancing user experience</li>
        </ul>
      </p>

      <h2 className="mt-6 text-xl font-semibold">Your Rights</h2>
      <p className="mt-4">
        You have the right to:
        <ul className="list-disc pl-8 mt-2">
          <li>Access and update your personal information</li>
          <li>Request the deletion of your data</li>
        </ul>
      </p>

      <p className="mt-6">
        If you have any questions about this Privacy Policy, please contact us.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
