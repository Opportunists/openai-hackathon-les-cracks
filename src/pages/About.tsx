import React from "react";
import NavBar from "~/components/NavBar";
import { GiStabbedNote } from 'react-icons/gi';
import { FaChrome, FaSafari, FaFirefox } from 'react-icons/fa';

import "~/styles/About.css"

const ProductDescription = () => {
    return (
        <div className="flex z-10 h-screen justify-center items-center">
            <div className="flex flex-col px-[10px] text-left pt-[50px] md:pt-[0px]">
                <h1 className="text-[40px] md:text-[70px] lg:[90px] text-center font-bold lg:text-left" datatype="title">
                    Get all T&Cs explained
                </h1>

                <div className="flex flex-auto lg:hidden justify-center items-center w-full">
                    <GiStabbedNote size={"20rem"} className="md:hidden" />
                    <GiStabbedNote size={"15rem"} className="hidden md:block" />
                </div>

                <h3 className="text-[20px] md:text-[25px] lg:[45px] md:px-[40px] lg:px-[0] line-clamp-3 text-center pt-[30px] md:w-[50rem] lg:w-[40rem] px-[30px] md:px-[0px] lg:text-left">
                    Please provide the source of the terms of use policy you want
                    to analyze by entering the URL
                    or pasting the text in the box below.
                </h3>
            </div>

            <div className="flex-auto hidden lg:flex justify-center items-center w-full">
                <GiStabbedNote size={"20rem"} />
            </div>

        </div>
    )
}

const Team = () => {
    return (
        <div className="flex z-10 h-screen justify-center items-center">

            <div className="flex flex-col px-[10px] md:px-[40px] text-left pt-[50px] md:pt-[0px]">
                <div className="flex flex-col px-[10px] text-left pt-[50px] md:pt-[0px]">
                    POPO
                </div>
            </div>
        </div>
    )
}


const GetProduct = () => {
    return (
        <div className="flex z-10 h-screen justify-center items-center">
            <div className="flex flex-col px-[10px] md:px-[40px] text-left pt-[50px] md:pt-[0px]">
                <div className="flex flex-col px-[10px] text-left pt-[50px] md:pt-[0px]">
                    <h1 className="text-[40px] md:text-[70px] lg:[90px] text-center font-bold lg:text-left" datatype="title">
                        Add to all browsers for free !
                    </h1>

                    <div className="flex flex-auto justify-center items-center w-full flex-col">
                        <h3 className="text-[20px] md:text-[25px] lg:[45px] md:px-[40px] lg:px-[0] line-clamp-3 text-center pt-[30px] md:w-[50rem] lg:w-[70rem] px-[30px] md:px-[0px]">
                            Please provide the source of the terms of use policy you want
                            to analyze by entering the URL
                            or pasting the text in the box below.
                        </h3>
                        <div className="flex justify-evenly w-full pt-[5rem]">
                            <FaChrome size={"8rem"} />
                            <FaFirefox size={"8rem"} />
                            <FaSafari size={"8rem"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AboutPage() {
    return (
        <div className="bg-primary w-full h-auto font-primary text-white flex flex-col justify-center items-center md:pt-[4rem] lg:pt-[0rem]">
            <NavBar />

            <div className="absolute top-[100px] left-0 semi-triangle"></div>

            <ProductDescription />

            <div className="absolute bottom-0 right-0 semi-circle1"></div>

            <Team/>

            <GetProduct />
        </div>
    );
}

export default AboutPage;