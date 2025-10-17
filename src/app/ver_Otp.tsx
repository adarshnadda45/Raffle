"use client";

import React, { useState } from "react";

export default function Page() {
  const [otp, setOtp] = useState(["", "", ""]);
  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; // allow only digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    console.log("Current OTP:", newOtp.join(""));

    // move to next box if value entered
    if (value && index < otp.length - 1) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prev = document.getElementById(`otp-${index - 1}`);
      prev?.focus();
    }
  };
  return (
    <div className="font-jakarta text-xl flex min-h-screen items-center flex-col gap-4 justify-center bg-pink-100 bg-[url('/background_image.svg')]">
      <img src="faffel_img.svg" alt="raffel_logo" width={200} height={200} />
      <div className="bg-gray-50 
      p-4 mt-4 shadow-2xl rounded-3xl p-15 w-full shadow-[15px_20px_0px_5px_rgba(255,10,10,10)] max-w-md object-cover">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Enter OTP</h2>

        <p className="text-gray-500 mb-6">
          We sent a 6-digit code to your email
        </p>

        <div className="flex gap-3 text-black mb-8 ">
          <input
            type="text"
            id="otp-0"
            maxLength={1}
            value={otp[0]}
            onChange={(e) => handleChange(e.target.value, 0)}
            onKeyDown={(e) => handleKeyDown(e, 0)}
            className="w-12 h-12  border-gray-300 bg-gray-200 rounded-full text-center"
          />
          <input
            type="text"
            id="otp- 1"
            maxLength={1}
            value={otp[1]}
            onChange={(e) => handleChange(e.target.value, 1)}
            onKeyDown={(e) => handleKeyDown(e, 1)}
            className="w-12 h-12 border-gray-300 bg-gray-200 rounded-full text-center"
          />
          <input
            type="text"
            id="otp-2"
            maxLength={1}
            value={otp[2]}
            onChange={(e) => handleChange(e.target.value, 2)}
            onKeyDown={(e) => handleKeyDown(e, 2)}
            className="w-12 h-12 border-gray-300 bg-gray-200 rounded-full text-center"
          />
        </div>

        <button className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 mb-2">
          Verify OTP
        </button>
        <div>
          <p> Remember Password </p>
          <a href="#"> Login </a>
        </div>
      </div>
    </div>
  );
}
