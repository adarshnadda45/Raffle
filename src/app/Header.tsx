"use client";
import BlankModel from "@/components/BlankModel";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { colors, H1, images, P_LABEL } from "@/styles/assets";
import { useAuth } from "@/utils/Auth";
import api from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Country, State, ICountry, IState } from "country-state-city";
import Dropdown from "@/components/Dropdown";
import { useRouter } from "next/navigation";

interface Option<T> {
  label: string;
  value: string;
  raw: T;
}

export default function Header() {
  const { user, setUser } = useAuth() as any;
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [country, setCountry] = useState<ICountry | null>(null);
  const [state, setState] = useState<IState | null>(null);
  const [stateList, setStateList] = useState<Option<IState>[]>([]);
  const router = useRouter();

  const countries: Option<ICountry>[] = Country.getAllCountries().map((c) => ({
    label: c.name,
    value: c.isoCode,
    raw: c,
  }));

  // Fetch user data
  const { data: userData } = useQuery({
    queryKey: ["user-data"],
    queryFn: async () => {
      const res = await api.get(`/user/user-data`);
      return res.data.data;
    },
  });

  // Map API country name to ICountry object
  useEffect(() => {
    if (userData?.country) {
      const matchedCountry = Country.getAllCountries().find(
        (c) => c.name === userData.country
      );
      setCountry(matchedCountry || null);
    }
  }, [userData?.country]);

  // Map API state name to IState object whenever country changes
  useEffect(() => {
    if (country?.isoCode) {
      const states = State.getStatesOfCountry(country.isoCode).map((s) => ({
        label: s.name,
        value: s.isoCode,
        raw: s,
      }));
      setStateList(states);

      if (userData?.state) {
        const matchedState = states.find((s) => s.label === userData.state);
        setState(matchedState?.raw || null);
      } else {
        setState(null);
      }
    }
  }, [country, userData?.state]);

  console.log("userData1111", userData);
  return (
    <div className="flex flex-col gap-6 relative">
      <div className="bg-[#222222] mx-2">
        <p className="text-sm text-[#FFFFFF] w-full text-center py-2">
          Use promo code WIN10 for 10% off.
        </p>
      </div>

      <div className="flex justify-between flex-wrap mx-20">
        <Image
          src={images.raffle_logo}
          alt="logo"
          width={100}
          height={100}
          onClick={() => router.push("/user")}
        />
        <div
          className="bg-white flex gap-1 justify-center items-center rounded-4xl px-4 cursor-pointer"
          onClick={() => setModal1(true)}
        >
          <Image src="/icons/user.svg" alt="logo" width={20} height={20} />
          {user?.userName}
          <Image
            src="/icons/down-arrow.svg"
            alt="logo"
            width={20}
            height={20}
            className="mb-1"
          />
        </div>
      </div>

      {modal1 && (
        <div
          className="h-screen w-screen  fixed right-0 top-0 z-90 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setModal1(false);
          }}
        >
          <div className="w-80 p-4 bg-[white] rounded-lg z-100 absolute top-[120px] right-10 flex flex-col gap-4">
            <div
              style={{ background: colors.bg3 }}
              onClick={() => router.push("/user/redeem")}
              className="p-3 rounded-[10px] flex items-center justify-between text-base font-semibold text-[#464646]"
            >
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #FFF8E7 0%, #FFE4A3 100%)",
                  borderImage: "linear-gradient(90deg, #F27B00, #FFCA46) 1",
                }}
                className="flex rounded-4xl justify-start items-center gap-1 px-4 py-2.5  outline-2 outline-offset-[-2px] outline-amber-400 "
              >
                <Image
                  src="/icons/star.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
                <span className="text-Black-000 text-base font-semibold ">
                  {userData?.totalPoints || 0}
                </span>
              </div>
              Redeem Rewards
            </div>
            <div
              onClick={() => router.push("/user/reward")}
              className="text-base font-semibold text-[#464646] flex items-center gap-2"
            >
              <Image
                src="/icons/myreward.svg"
                width={30}
                height={30}
                alt="icon"
              />
              My Rewards
            </div>
            <div
              onClick={() => router.push("/user/bucks")}
              className="text-base font-semibold text-[#464646] flex items-center gap-2"
            >
              <Image src="/icons/cart.svg" width={30} height={30} alt="icon" />
              Raffle Bucks
            </div>
            <div
              onClick={() => {
                setModal1(false);
                setModal(true);
              }}
              className="text-base font-semibold text-[#464646] flex items-center gap-2"
            >
              <Image src="/icons/user.svg" width={30} height={30} alt="icon" />
              My Profile
            </div>
            <hr />
            <div
              onClick={() => {
                localStorage.clear();
                setUser(null);
              }}
              className="text-base font-semibold text-[#464646] flex items-center gap-2"
            >
              <Image src="/icons/Frame.svg" width={30} height={30} alt="icon" />
              Logout
            </div>
          </div>
        </div>
      )}

      {modal && (
        <BlankModel onClose={() => setModal(false)} userModal={true}>
          <h1 className={`${H1} text-start w-full`}>My Profile</h1>

          <div className="flex w-full items-start justify-start gap-2">
            <div
              style={{ background: colors.bg3 }}
              className="bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center border-1 border-white"
            >
              <span className="text-black text-[14px] p-2">
                {user.userName?.split("").slice(0, 2).join("").toUpperCase()}
              </span>
            </div>
            <p className="text-2xl font-bold w-full"> @{user.userName}</p>
          </div>

          <div className="flex flex-col w-full gap-2">
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 w-80">
                <div className="flex gap-2">
                  <p className={P_LABEL}>Email Address</p>
                  <div className="flex gap-2 bg-[#E8F4FF] rounded-[99px] px-2 py-[2px]">
                    <Image
                      width={20}
                      height={20}
                      src="/icons/verified.svg"
                      alt="verified"
                    />
                    <p className="text-[#0993F5] font-normal text-sm">
                      Verified
                    </p>
                  </div>
                </div>
                <Input placeholder="Email" value={userData?.email} disabled />
              </div>

              <div className="flex flex-col gap-2 w-80">
                <div className="flex gap-2">
                  <p className={P_LABEL}>Phone Number</p>
                  {userData?.isVerifiedPhone ? (
                    <div className="flex gap-2 bg-[#E8F4FF] rounded-[99px] px-2 py-[2px]">
                      <Image
                        width={20}
                        height={20}
                        src="/icons/verified.svg"
                        alt="verified"
                      />
                      <p className="text-[#0993F5] font-normal text-sm">
                        Verified
                      </p>
                    </div>
                  ) : (
                    <div className="flex gap-2 bg-[#FFE7E7] rounded-[99px] px-2 py-[2px]">
                      <Image
                        width={20}
                        height={20}
                        src="/icons/not-verified.svg"
                        alt="not verified"
                      />
                      <p className="text-[#f50927] font-normal text-sm">
                        Not Verified
                      </p>
                    </div>
                  )}
                </div>
                <Input
                  placeholder="Phone Number"
                  value={userData?.phoneNumber || ""}
                  disabled={userData?.isVerifiedPhone}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col gap-2 w-80">
                <p className={P_LABEL}>Home Address</p>
                <Input placeholder="Address" value={userData?.address || ""} />
              </div>

              <div className="flex flex-col gap-2 w-80">
                <p className={P_LABEL}>Country</p>
                <Dropdown
                  options={countries}
                  placeholder="Country"
                  value={country?.isoCode || ""}
                  onSelect={(option) => setCountry(option.raw || null)}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col gap-2 w-80">
                <p className={P_LABEL}>State</p>
                <Dropdown
                  options={stateList}
                  placeholder="State"
                  value={state?.isoCode || ""}
                  onSelect={(option) => setState(option.raw || null)}
                />
              </div>

              <div className="flex flex-col gap-2 w-80">
                <p className={P_LABEL}>Postal Code</p>
                <Input
                  placeholder="Postal Code"
                  value={userData?.postalCode || ""}
                />
              </div>
            </div>
          </div>

          <Button text="Save Details" onClick={() => setModal(false)} />
        </BlankModel>
      )}
    </div>
  );
}
