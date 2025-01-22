"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-600 transition-colors duration-300 ease-in-out hover:text-primary"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="text-sm text-gray-600 transition-colors duration-300 ease-in-out hover:text-primary"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="text-sm text-gray-600 transition-colors duration-300 ease-in-out hover:text-primary"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-gray-600 transition-colors duration-300 ease-in-out hover:text-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-gray-600 transition-colors duration-300 ease-in-out hover:text-primary"
            >
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-gray-600 transition-colors duration-300 ease-in-out hover:text-primary"
            >
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-gray-600 transition-colors duration-300 ease-in-out hover:text-primary"
            >
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-gray-600 transition-colors duration-300 ease-in-out hover:text-primary"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4 lg:col-span-2">
          <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
          <p className="text-sm text-gray-600">
            Stay updated with our latest offers and products.
          </p>
          <form
            className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow transition-all duration-300 ease-in-out focus:ring-2 focus:ring-primary"
            />
            <Button
              type="submit"
              className="transition-colors duration-300 ease-in-out hover:bg-primary-dark"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="container mt-8 border-t border-gray-200 pt-8 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} NextStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
