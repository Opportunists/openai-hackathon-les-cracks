import React from "react";
import NavBar from "~/components/NavBar";
import { GiStabbedNote } from 'react-icons/gi';
import { FaChrome, FaSafari, FaFirefox } from 'react-icons/fa';

const Explanation = () => {
    return (
        <div className="flex">
            <div className="w-1/6 hidden md:block"> </div>

            <div className="flex px-[30px] md:w-4/6">
                <div className="flex-auto text-center md:text-left text-[50px] lg:text-[90px] font-extrabold flex flex-col md:justify-center md:items-center">
                    <div>
                        <h1>Get all T&Cs explained </h1>
                        <h1 className="text-[#CF3A3A] drop-shadow-xl">FAST</h1>
                        <h2 className="font-medium text-[28px] -[20px] hidden md:block">
                            Please provide the source of the terms of use policy you want
                            to analyze by entering the URL
                            or pasting the text in the box below.
                        </h2>
                    </div>
                    <div className="flex justify-center items-center md:hidden">
                        <GiStabbedNote size={"20rem"}/>
                    </div>
                </div>
                <div className="flex-auto hidden md:flex justify-center items-center">
                    <GiStabbedNote size={"25rem"} className="md:block lg:hidden" />
                    <GiStabbedNote size={"32rem"} className="md:hidden lg:block" />
                </div>
            </div>

            <div className="w-1/6 hidden md:block"> </div>
        </div>
    )
}


const Plugins = () => {
    return (
        <div className="flex">
            <div className="flex-auto text-center text-[50px] md:text-[70px] font-extrabold space-y-[8rem]">
                <h1>Add to all browsers for free !</h1>
                <div className="hidden w-full justify-evenly space-x-5 md:flex">
                    <FaChrome size={"7rem"} />
                    <FaFirefox size={"7rem"} />
                    <FaSafari size={"7rem"} />
                </div>
                <div className="flex w-full justify-evenly space-x-5 md:hidden">
                    <FaChrome size={"5rem"} />
                    <FaFirefox size={"5rem"} />
                    <FaSafari size={"5rem"} />
                </div>
            </div>
        </div>
    )
}



function AboutPage() {
    return (
        <div className="bg-primary w-screen h-auto font-primary text-white flex flex-col space-y-20">
            <NavBar />
            <div className="flex h-1/3 md:h-1/6"></div>
            <Explanation />
            <div className="flex md:h-[10rem] h-1/6"></div>
            <Plugins />
            <div className="flex md:h-[10rem] h-1/6"></div>
        </div>
    );
}

export default AboutPage;