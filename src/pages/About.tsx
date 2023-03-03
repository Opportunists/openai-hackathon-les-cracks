import React from "react";
import NavBar from "~/components/NavBar";
import { GiStabbedNote } from 'react-icons/gi';
import { FaChrome, FaSafari, FaFirefox } from 'react-icons/fa';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import "~/styles/About.css"
import { JSONTeam } from "~/utils/dataJSON";

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
    type AvatarProps = {
        imageUrl: any;
        name: string;
        job: string;
        linkedinUrl: string;
        githubURL ?: string;
    }

    const Avatar: React.FC<AvatarProps> = (props) => {
        return (
            <div className="w-full md:w-[25%] lg:w-[25%] lg:mb-0 mb-12 px-8">
                <div className="px-6">
                    <img alt="..." src={props.imageUrl} className="shadow-lg rounded-full mx-auto max-w-90-px" />
                    <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold text-blueGray-700">{props.name}</h5>
                        <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold uppercase">{props.job}</p>
                        <div className="mt-6 space-x-5 lg:pb-[5rem]">
                            <a className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" href={props.linkedinUrl}>
                                <BsLinkedin size={"2rem"} color={"#0072b1"} />
                            </a>
                            {
                                props.githubURL
                                    ? <a className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" href={props.githubURL}>
                                        <BsGithub size={"2rem"} />
                                    </a>
                                    : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex z-10 h-auto mg:h-screen justify-center items-center">
            <div className="flex flex-col px-[10px] md:px-[40px] text-left pt-[50px] md:pt-[0px]">
                <div className="flex flex-col px-[10px] text-left pt-[50px] md:pt-[0px] justify-center items-center">
                    <h1 className="text-[40px] md:text-[70px] lg:[90px] text-center font-bold lg:text-left pb-[5rem]" datatype="title">
                        Meet the team
                    </h1>
                    <div className="flex flex-wrap justify-center items-center lg:px-[10rem]">
                        {
                            JSONTeam.map((elt) => {
                                return <Avatar imageUrl={elt.imageUrl} job={elt.job} name={elt.name} linkedinUrl={elt.linkedinUrl} githubURL={elt.githubURL}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


const GetProduct = () => {
    return (
        <div className="flex z-10 h-auto justify-center items-center">
            <div className="flex flex-col px-[10px] md:px-[40px] text-left pt-[50px] md:pt-[0px]">
                <div className="flex flex-col px-[10px] text-left md:pt-[50px] md:pt-[0px]">
                    <h1 className="text-[40px] md:text-[70px] lg:[90px] lg:pb-[2rem] text-center font-bold lg:text-left" datatype="title">
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

            <Team />

            <GetProduct />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#932421" fill-opacity="1" d="M0,128L24,149.3C48,171,96,213,144,224C192,235,240,213,288,181.3C336,149,384,107,432,112C480,117,528,171,576,186.7C624,203,672,181,720,186.7C768,192,816,224,864,197.3C912,171,960,85,1008,64C1056,43,1104,85,1152,106.7C1200,128,1248,128,1296,133.3C1344,139,1392,149,1416,154.7L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
            </svg>
        </div>
    );
}

export default AboutPage;