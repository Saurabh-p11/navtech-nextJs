"use client";

import Image from 'next/image';
import React from 'react';
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="bg-[#1e585b] text-white py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

        {/* Left Section - Contact Info */}
        <div className="text-center md:text-left md:w-1/2 lg:w-2/5">
          <h3 className="text-4xl font-bold mb-4">India</h3>
          <address className="not-italic text-md leading-relaxed mb-6">
            9G, Vaishnavi Cynosure, Telecom <br />
            Nagar, Gachibowli, Hyderabad, <br />
            Telangana 500032
          </address>
          <p className="text-md flex items-center justify-center md:justify-start mb-2">
            <FaRegEnvelope className="mr-2" />
            <a href="mailto:sales@navitech.io" className="hover:underline">
              sales@navitech.io
            </a>
          </p>
          <p className="text-md flex items-center justify-center md:justify-start">
            <FiPhoneCall className="mr-2" />
            <a href="tel:+917788990990" className="hover:underline">
              +91 7788990990
            </a>
          </p>
        </div>

        {/* Right Section - Book a Demo QR Code */}
        <div className="w-fit p-6 border border-white rounded-lg text-center flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-4">Book a Demo</h4>
          <div className="bg-white p-2 rounded-md"> {/* White background for QR code */}
            <Image
              src="/svg/navtech_qr_code.svg" // Replace with your actual QR code image
              alt="Book a Demo QR Code"
              width={150} // Adjust size as needed
              height={150} // Adjust size as needed
              layout="intrinsic"
              className="block"
            />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;