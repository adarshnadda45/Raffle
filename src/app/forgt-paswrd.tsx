"use client";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    setEmail("")
  };

  return (
    <div className="font-jakarta text-xl flex min-h-screen items-center flex-col gap-4 justify-center bg-pink-100 bg-[url('/background_image.svg')]">
      <img src="/faffel_img.svg" alt="Raffel Logo" width={200} height={200} />

      <div className="bg-gray-50 p-4 mt-4 shadow-2xl rounded-3xl p-15 w-full shadow-[15px_20px_0px_5px_rgba(255,10,10,10)] max-w-md object-cover">
        <h2 className="text-2xl font-bold text-center mb-2 text-black">
          Forget Password?
        </h2>
        <p className="text-gray-800 text-center mb-6">
          Reset your password by email link and set a new one securely
        </p>

        <form className="space-y-4 shrink-10" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-8 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-gray-400"
            />
            <img
              className="absolute top-3 left-2"
              src="/email.png"
              alt="Email Icon"
              width={20}
              height={20}
            />
          </div>

          

          <button
            type="submit"
            className="w-full bg-red-600 text-black py-2 rounded-3xl font-semibold hover:bg-red-700"
          >
            Verify Email →
          </button>

          <div className="flex justify-center text-sm mt-3 relative">
            <p className="text-black  absolute right-40">
              Remember Password?
            </p>
            <a href="#" className="text-black underline absolute right-30">
              login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
