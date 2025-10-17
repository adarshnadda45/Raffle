import { images } from "@/styles/assets";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div
      style={{ backgroundImage: `url('${images.bg_footer}')` }}
      className="flex flex-col justify-between"
    >
      <div className="p-20 pb-10 mt-10 h-full w-full flex flex-col items-center gap-6 text-[#FFFFFF] font-light font-['Plus_Jakarta_Sans'] ">
        <Image src={images.raffle_logo} alt="logo" width={100} height={100} />
        <p className="font-['Poppins'] text-sm font-light ">
          Win amazing prizes with fair draws, secure payments, and trusted
          raffles—all in one place.
        </p>
        <div className="flex w-full justify-between gap-6 px-6">
          <div className="flex flex-1 justify-between border-t-2 border-[#888888] py-4">
            <div className="flex flex-col justify-around">
              <p>Facebook</p>
              <p className="text-sm">@rafflehut</p>
            </div>
            <div className="bg-white rounded-[100%] w-9 h-9 flex justify-center items-center">
              <Image
                src="/icons/fb.svg"
                width={15}
                height={15}
                alt="fb"
                className="w-3 h-4.5"
              />
            </div>
          </div>
          <div className="flex flex-1 justify-between border-t-2 border-[#888888] py-4">
            <div className="flex flex-col">
              <p>Instagram</p>
              <p className="text-sm">@rafflehut</p>
            </div>
            <div className="bg-white rounded-[100%] w-9 h-9 flex justify-center items-center">
              <Image
                src="/icons/insta.svg"
                width={15}
                height={15}
                alt="fb"
                className="w-4 h-6.5"
              />
            </div>
          </div>
          <div className="flex flex-1 justify-between border-t-2 border-[#888888] py-4">
            <div className="flex flex-col">
              <p>X</p>
              <p className="text-sm">@rafflehut</p>
            </div>
            <div className="bg-white rounded-[100%] w-9 h-9 flex justify-center items-center">
              <Image
                src="/icons/x.svg"
                width={15}
                height={15}
                alt="fb"
                className="w-3 h-5.5"
              />
            </div>
          </div>
          <div className="flex flex-1 justify-between border-t-2 border-[#888888] py-4">
            <div className="flex flex-col">
              <p>Pinterest</p>
              <p className="text-sm">@rafflehut</p>
            </div>
            <div className="bg-white rounded-[100%] w-9 h-9 flex justify-center items-center">
              <Image
                src="/icons/pint.svg"
                width={15}
                height={15}
                alt="fb"
                className="w-4 h-6.5"
              />
            </div>
          </div>
        </div>
        <p className="text-xs font-light">
          Copyright © 2024 rafflehut Company. All rights reserved.
        </p>
      </div>
    </div>
  );
}
