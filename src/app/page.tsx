"use client";
import React, { useState, useEffect } from "react";


export default function Page() {


    return (

        <div className="w-full bg-pink-50 bg-[url('/background_image.svg')] relative">
            <section className="flex flex-col ">
                <div className="text-white bg-black text-bold mt-1 ml-2 mr-2 py-3 text-center border rounded-xl"> Use promo code <span className="font-semibold">WIN10</span> for <span className="font-semibold">10% </span>off.</div>


                <div className="flex justify-between mt-5 ml-30 mr-30">
                    <img src="/faffel_img.svg" alt="logo" width={100} height={100} />
                    <select className="text-xl text-black border-gray rounded-3xl   bg-white py-2 px-4  focus:outline-none focus:border-gray-300">
                        <option value="Lucas">Lucas</option>
                        <option value="Logout">Logout</option>
                    </select>
                </div>
            </section>

            <section className="flex flex-col items-center text-center justify-center relative">
                <div className=" text-center justify-center ">
                    <img src="/text.png" alt="text" className="mx-auto mb-15 mt-20" />
                    <img src="/sideText.png" alt="side text" className=" ml-250 "  />
                    <p className="text-black text-center">Join thrilling raffles for gift cards, gadgets, and more — starting at just $1.</p>
                    <p className="text-black text-center"> Even if you don’t win, you earn points toward guaranteed rewards.</p>
                </div>
                <button className="bg-red-600 mt-10 text-black w-35 py-2 border rounded-3xl border-red-300   ">
                    Browse Raffle
                </button>
            </section> 

            <section className="flex flex-col ">
                <div className="text-center justify-center">
                    <img src="/text1.png" alt="" />
                    <p className="text-black">We believe winning should be exciting, not complicated. That’s why we’ve kept things simple — pick a raffle you love, enter with just a few clicks, and leave the rest to fair, transparent draws. Even if you don’t win, you’ll earn points that bring you closer to guaranteed rewards.</p>
                </div>
            </section>


        </div>







    );
}
