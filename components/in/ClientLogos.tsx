"use client";

import Image from 'next/image';
import React from 'react';

const clientLogos = [
  { name: 'Apple', src: '/svg/apple.svg' },
  { name: 'Truzon Solar', src: '/svg/Truzon-solar.svg' },
  { name: 'Palmer Trucks', src: '/svg/palmer-trucks.svg' },
  { name: 'Nuviva', src: '/svg/nuviva.svg' },
  { name: 'Fusable', src: '/svg/fusable.svg' },
  { name: 'Wizehire', src: '/svg/wizehire.svg' },
  { name: 'Zerodha', src: '/svg/zerodha.svg' },
  { name: 'Blinkit', src: '/svg/blinkit.svg' },
  { name: 'IMX', src: '/svg/IMX.svg' },
  { name: 'Bauer Media', src: '/svg/bauermedia.svg' },
  { name: 'CNN', src: '/svg/CNN.svg' },
];

const ClientLogos = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Our Esteemed
          <span className="highlighted-heading"> Clients</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 items-center justify-items-center">
          {clientLogos.map((logo) => (
            <div key={logo.name} className="client-logo p-2">
              <Image
                src={logo.src}
                alt={logo.name}
                width={120} 
                height={60} 
                layout="intrinsic" 
                objectFit="contain"
                className="max-w-full h-auto" 
              />
            </div>
          ))}
          <div className="client-logo p-2">
            <p className="text-lg font-semibold text-teal-700">and many more...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;