"use client";

import { FC } from "react";

const AboutUs: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-4 text-lg">
        We are a company dedicated to providing high-quality products and
        exceptional service to our customers. Our mission is to make your
        shopping experience enjoyable, safe, and easy.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Our Vision</h2>
      <p className="mt-4">
        Our vision is to become the leading provider of innovative products that
        meet the needs of modern consumers, enhancing lives with technology and
        convenience.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Our Team</h2>
      <p className="mt-4">
        Our team is made up of passionate professionals who are committed to
        delivering the best service and products to our customers.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Contact Us</h2>
      <p className="mt-4">
        If you'd like to learn more about us, feel free to get in touch via our{" "}
        <a href="/contact" className="text-blue-500">
          Contact
        </a>{" "}
        page.
      </p>
    </div>
  );
};

export default AboutUs;
