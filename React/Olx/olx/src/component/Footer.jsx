import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4 px-6">
      <div className="flex justify-center items-center">
        <p className="text-center">
          Copyright © 2018{" "}{ " " }
          <a href="#" className="text-teal-400 hover:underline">
            OLX Pakistan Biggest Market
          </a>{" "}{ " " }
          | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
