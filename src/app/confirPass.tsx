"use client";
import React, { useState } from "react";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Button clicked");
    console.log("Password:", password);
    console.log("Confirm Password:", confirm);
    setPassword("");
    setConfirm("");
    setShowConfirmPassword(false);
    setShowPassword(false);

  };

  return (
    <div className="font-jakarta text-xl flex min-h-screen items-center flex-col gap-3 justify-center bg-pink-100 bg-[url('/background_image.svg')] ">
      <img src="\faffel_img.svg" alt="background_img" />


      <div className="text-black bg-gray-50 p-4 mt-4 shadow-2xl rounded-3xl p-15 w-full shadow-[15px_20px_0px_5px_rgba(255,10,10,10)] max-w-md object-cover">
        <h2 className="text-2xl font-bold text-center mb-2 text-black">Create New Password</h2>
        <p className="text-gray-800 text-center mb-6">Create a strong new password and confirm it to secure access.</p>


        <form className="space-y-2 relative " onSubmit={handleSubmit}>
          <div className="space-y-5 relative">

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
                className="border-grey-200 w-full px-8 py-2 rounded-3xl text-black focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-grey-600"
              />
              <img
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2.5 right-3 cursor-pointer"
                src={showPassword ? "/eyeoff.png" : "/eye.png"}
                alt="eye"
                width={20}
                height={20}
              />
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Confirm password"
                className="w-full px-8 py-2 rounded-3xl text-black focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-grey-600 border-grey-900"
              />
              <img 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-2.5 right-3 cursor-pointer"
                src={showConfirmPassword ? "/eyeoff.png" : "/eye.png"}
                alt="eye"
                width={20}
                height={20}
              />
            </div>

          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-black py-2 rounded-3xl "
          >
            Continue
          </button>

          <div className="text-sm mt-3 flex justify-center">
            <p>Remember Password?</p>
            <a href="#" className="text-black hover:underline ml-1">
              LogIn
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
