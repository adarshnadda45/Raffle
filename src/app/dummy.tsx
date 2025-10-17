"use client";
import React, { useState, useEffect } from "react";


export default function Page() {


    return (

        <main>
            
                {/* Top promo bar */}
                <div className="bg-black text-white text-center text-sm py-2">
                    Use promo code <span className="font-semibold">WIN10</span> for 10% off.
                </div>

                {/* Header */}
                <header className="flex justify-between items-center px-8 py-4 bg-[#ffeaea]">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="logo" className="h-10" />
                        <h1 className="text-2xl font-bold text-red-600">RaffleHut</h1>
                    </div>
                    <button className="bg-white border border-gray-300 rounded-full px-4 py-1 shadow-sm">
                        Lucas ▼
                    </button>
                </header>

                {/* Hero Section */}
                <section className="text-center py-16 bg-[#ffeaea] relative">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
                        FROM GIFT CARDS ‘MERCHANDISE <br /> IT’S YOURS TO WIN
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-700">
                        Join thrilling raffles for gift cards, gadgets, and more — starting at just $1.
                        <br />
                        Even if you don’t win, you earn points toward guaranteed rewards.
                    </p>
                    <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700">
                        Browse Raffles
                    </button>
                </section>

                {/* How It Works */}
                <section className="py-16 bg-[#ffeaea] text-center">
                    <h3 className="text-3xl font-bold text-red-600 mb-6">HOW IT WORKS</h3>
                    <p className="max-w-2xl mx-auto text-gray-700 mb-10">
                        We believe winning should be exciting, not complicated. Pick a raffle you love,
                        enter with a few clicks, and leave the rest to fair, transparent draws.
                        Even if you don’t win, you’ll earn points toward guaranteed rewards.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 px-8">
                        <div className="bg-white p-6 rounded-2xl shadow">
                            <h4 className="text-xl font-semibold mb-2">Choose Your Raffle</h4>
                            <p>Select from exciting gift cards, cool merchandise, and more! Get started with entries as low as $1.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow">
                            <h4 className="text-xl font-semibold mb-2">Wait for the Draw</h4>
                            <p>Wait for exciting prizes like gift cards and gadgets. You won’t want to miss your chance to win.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow">
                            <h4 className="text-xl font-semibold mb-2">Get Rewarded</h4>
                            <p>Choose from a variety of gift cards, cool gadgets, and much more.</p>
                        </div>
                    </div>
                </section>
            

            {/* Footer */}
            <footer className="bg-black text-gray-300 py-10 text-center">
                <div className="mb-6">
                    <img src="/logo.png" alt="logo" className="mx-auto h-10 mb-2" />
                    <h2 className="text-red-600 font-bold text-2xl">RaffleHut</h2>
                </div>

                <p className="max-w-2xl mx-auto mb-6">
                    Win amazing prizes with fair draws, secure payments, and trusted raffles—all in one place.
                </p>

                <div className="flex justify-center gap-6 mb-6">
                    <a href="#" className="hover:text-white">Home</a>
                    <a href="#" className="hover:text-white">Raffles</a>
                    <a href="#" className="hover:text-white">Completed</a>
                    <a href="#" className="hover:text-white">Redeem Points</a>
                    <a href="#" className="hover:text-white">About</a>
                </div>

                <div className="flex justify-center gap-6 text-sm">
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">Pinterest</a>
                </div>

                <p className="text-xs text-gray-500 mt-8">
                    © 2024 RaffleHut Company. All rights reserved.
                </p>
            </footer>
        </main>



    );
}
