import React from "react";
import NavBar from "~/components/NavBar";
import {GiStabbedNote} from 'react-icons/gi';
import {FaChrome, FaSafari, FaFirefox} from 'react-icons/fa';

function AboutPage() {
    return (
        <div className="bg-primary w-screen h-auto font-primary text-white flex flex-col space-y-20 px-[30px]">
            <NavBar />
            <div className="flex h-1/3"></div>

            <div className="flex">
                <div className="flex-auto text-left text-[50px] font-extrabold">
                    <h1>Get all T&Cs explained </h1>
                    <h1 className="text-[#CF3A3A] drop-shadow-xl">FAST</h1>
                    <GiStabbedNote size={"20rem"}/>
                    <h2 className="font-medium text-[28px] mt-[20px]">
                        Please provide the source of the terms of use policy you want
                        to analyze by entering the URL
                        or pasting the text in the box below.
                    </h2>
                </div>
                <div className="flex-auto hidden">
                    <GiStabbedNote size={"20rem"}/>
                </div>
            </div>

            <div className="flex">
                <div className="flex-auto text-center text-[50px] font-extrabold space-y-10">
                    <h1>Add to all browsers for free !</h1>
                    <div className="flex w-full justify-between">
                        <FaChrome size={"5rem"}/>
                        <FaFirefox size={"5rem"}/>
                        <FaSafari size={"5rem"}/>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default AboutPage;