"use client";
import React, { useState } from "react";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const passwordsMatch = password === confirm;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("button clicked !!");
        console.log("Email : ", email);
        console.log("New Password : ", password);
        console.log("Confirm Password : ", confirm);
        setPassword("");
        setConfirm("");
        setShowConfirmPassword(false);
        setShowPassword(false);
        setEmail("");
    }

    return (

        <div className="font-jakarta text-xl flex min-h-screen items-center flex-col gap-4 justify-center bg-pink-100 bg-[url('/background_image.svg')]  ">
            <img src="\faffel_img.svg" alt="logo_image" width={200} height={200} />

            <div className="text-black bg-white  mt-4 shadow-2xl rounded-3xl p-15 w-full shadow-[15px_20px_0px_5px_rgba(255,10,10,10)] max-w-md">
                <h2 className="text-2xl font-bold text-center mb-2 text-black">Join The Raffle Fun!</h2>
                <p className="text-gray-800 text-center mb-6">By continuing, you are agree to our <span className="text-red-700">Terms</span> & <span className="text-red-700">Privacy Policy</span>.</p>

                <form className="space-y-4 " onSubmit={handleSubmit}>
                    <div className="">
                        <div className="relative mb-3">
                            <input
                                type="email"
                                placeholder="Email Address"
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-8 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-grey-400 text-grey p-2 w-full"
                            />
                            <img src="email.png"
                                alt="email_logo"
                                width={20}
                                height={20}
                                className="absolute top-3 left-2 "
                            /> 
                        </div>
                        <div className="relative mb-3 flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Select Username"
                                className="w-full px-8 py-2 border border-3xl rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-grey-400 text-grey  "
                            />
                            <img src="text.png"
                                alt=""
                                width={20}
                                height={20}
                                className="absolute top-3 left-3" />
                        </div>
                        <div className="relative mb-3 flex flex-col gap-4">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="New Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 px-8 py-2 border border-grey-300 border-3xl rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                            <img
                                src="/tala.png" 
                                alt=""
                                className="absolute top-2.5 left-3"
                                width={20}
                                height={20}
                            />
                            <img
                                src={showPassword ? "/eyeoff.png" : "/eye.png"}
                                onClick={() => setShowPassword(!showPassword)}
                                alt="eye"
                                className="absolute top-2.5 right-3 cursor-pointer"
                                width={20}
                                height={20}
                            />

                        </div>
                        <div className="relative mb-3 flex flex-col gap-4 ">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                                placeholder="Confirm Password"
                                className="w-full p-2 px-8 py-2 border border-grey-300 border-3xl rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-400 "
                            />
                            <img
                                src="/tala.png" 
                                alt=""
                                className="absolute top-2.5 left-3"
                                width={20}
                                height={20}
                            />
                            <img
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                src={showConfirmPassword ? "/eyeoff.png" : "/eye.png"}
                                alt="eye"
                                width={20}
                                height={20}
                                className="absolute top-2.5 right-3 cursor-pointer"
                            />
                        </div>

                        {confirm && !passwordsMatch && (
                            <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                        )}

                    </div>

                    <button className="w-full bg-red-600 text-black py-2 mb-1 rounded-3xl "
                        type="submit"
                        disabled={!passwordsMatch || !password || !confirm}
                    >Continue</button>

                    <div className="text-sm mt-3 flex justify-center  ">
                        <p>Already have an account? </p>
                        <a className="hover:underline text-black hover:underline ml-1" href="#"><b>Login</b></a>
                    </div>

                </form>
            </div>
        </div>
    )
} 
