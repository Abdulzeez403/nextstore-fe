"use client";

import { FC } from "react";

const TermsOfService: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="mt-4 text-lg">
        By accessing and using our website, you agree to comply with and be
        bound by the following terms and conditions.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Use of Service</h2>
      <p className="mt-4">
        You agree to use our services for lawful purposes only and not engage in
        any activity that could harm the platform or other users.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Intellectual Property</h2>
      <p className="mt-4">
        All content on this website, including text, images, and logos, are
        owned by us or our licensors and are protected by copyright laws.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Limitation of Liability</h2>
      <p className="mt-4">
        We are not liable for any damages or loss resulting from your use of our
        service, including but not limited to any direct or indirect damages.
      </p>

      <p className="mt-6">
        If you have any questions about these Terms of Service, please contact
        us.
      </p>
    </div>
  );
};

export default TermsOfService;
