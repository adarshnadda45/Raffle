"use client";
import React, { useState, useEffect } from "react";
import { Country, State } from 'country-state-city';
import { getStatesOfCountry } from "country-state-city/lib/state";

export default function Page() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:");
        console.log("Country:", selectedCountry);
        console.log("State:", selectedState);
        console.log("Street Address:", streetAddress);
        console.log("City:", city);
        console.log("Postal Code:", postalCode);
        console.log("Phone Number:", `+${countryCode} ${phoneNumber}`);

        setSelectedCountry("");
        setSelectedState("");
        setStreetAddress("");
        setCity("");
        setPostalCode("");
        setPhoneNumber("");

    };


    const [selectedCountry, setSelectedCountry] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [states, setStates] = useState([]);
    const countries = Country.getAllCountries();

    const [selectedState, setSelectedState] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    useEffect(() => {
        if (selectedCountry) {
            const countryStates = State.getStatesOfCountry(selectedCountry);
            setStates(countryStates);

            const countryDetails = Country.getCountryByCode(selectedCountry);
            if (countryDetails) {
                setCountryCode(countryDetails.phonecode);
            } else {
                setCountryCode('');
            }
        } else {
            setStates([]);
            setCountryCode('');
        }
    }, [selectedCountry]);

    return (
        <div className=" font-jakarta text-xl flex min-h-screen items-center flex-col gap-4 justify-center bg-pink-100 bg-[url('/background_image.svg')]">
            <img src="/faffel_img.svg" width={300} height={300} alt="raffle_image" />

            <div className="text-black bg-white rounded-3xl mt-4 w-140 h-120 shadow-[15px_20px_0px_5px_rgba(255,10,10,10)] ">
                <h2 className=" flex justify-center mt-5 text-bold text-3xl font-bold">
                    Shipping Addrees 
                </h2>
                <div className="text-black mt-2 bg-pink-100 w-65 h-10 mx-auto flex justify-center place-items-center border-pink-100 rounded-3xl ">
                    <h3 className="text-red-600 text-bold text-sm font-bold">
                        FOR YOUR FUTURE WINNINGS!
                    </h3>
                </div>
                <form className="space-y-4 " onSubmit={handleSubmit}>

                    <div className="relative">

                        <select
                            onChange={(e) => setSelectedCountry(e.target.value)}
                            className="w-60 rounded-3xl border border-gray-300 px-3 py-2 mt-5 ml-5 focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                            <option value="" className="">Select Country</option>
                            {countries.map((country) => (
                                <option key={country.isoCode} value={country.isoCode}>
                                    {country.name}
                                </option>
                            ))}
                        </select>


                        <select
                            className="w-60 rounded-3xl border border-gray-300 px-3 py-2 mt-5 ml-5 focus:outline-none focus:ring-2 focus:ring-red-400 "
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                        >
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option key={state.isoCode} value={state.name}>
                                    {state.name}
                                </option>
                            ))}
                        </select>


                        <input
                            type="text"
                            placeholder="Street Address"
                            value={streetAddress}
                            className="w-124 border rounded-3xl border-gray-300 px-8 py-2 mt-4 ml-5 focus:outline-none focus:ring-2 focus:ring-red-400"
                            onChange={(e) => setStreetAddress(e.target.value)}
                        />
                        <img src="location.png" alt="location" className="absolute top-22 left-8 " />

                        <input
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="border rounded-3xl border-gray-300 px-8 py-2 mt-4 ml-5 w-60 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                        <img src="location.png" alt="location" className="absolute top-38 left-8" />

                        <input
                            type="text"
                            placeholder="Postal Code"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            className="border border-gray-300 px-9 py-2 rounded-3xl w-60 ml-5 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                        <img src="postal_icon.png" alt="Postal_code" className="absolute top-38 right-62" />

                        <div className="flex items-center mt-4 ml-5 w-125 border border-gray-300 rounded-3xl focus-within:ring-2 focus-within:ring-red-400">
                            <span className="px-4 text-gray-500">+{countryCode}</span>
                            <input
                                type="text"
                                placeholder="(756)-002-2002"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="flex-1 py-2 px-1 rounded-r-3xl focus:outline-none"
                            />
                        </div>


                        <input
                            type="submit"
                            value="Submit"
                            className="border border-gray-300 mt-4 ml-5 rounded-3xl py-2 text-center w-125 bg-red focus:outline-none focus:ring-2 focus:ring-black-400 bg-red-600 text-2xl"
                        />
                        <img src="side_arrow.png" alt="right arrow" className=" absolute top-72 right-55" />
                    </div>
                </form>
            </div>
        </div>
    );
}
