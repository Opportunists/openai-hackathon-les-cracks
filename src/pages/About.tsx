import React from "react";
import NavBar from "~/components/NavBar";


function AboutPage() {
    return (
        <div className="bg-primary w-screen h-screen font-primary text-white flex flex-col justify-center items-center space-y-10">
            <NavBar />

            <div className="flex px-[30px]">
                <div className="flex-auto text-left text-[75px] font-extrabold">
                    <h1>Get all T&Cs explained </h1>
                    <h1 className="text-[#CF3A3A] drop-shadow-xl">FAST</h1>
                    <h2 className="font-medium text-[28px]">
                        Please provide the source of the terms of use policy you want
                        to analyze by entering the URL
                        or pasting the text in the box below.
                    </h2>
                </div>
                <div className="flex-auto">
                    <svg width="411" height="411" viewBox="0 0 611 611" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M305.5 134.98V543.077C301.172 543.077 296.59 542.313 293.025 540.277L292.007 539.768C243.127 513.036 157.842 485.032 102.597 477.649L95.2141 476.631C70.7741 473.576 50.9166 450.663 50.9166 426.223V118.687C50.9166 88.3914 75.6112 65.4788 105.907 68.0247C159.369 72.3526 240.327 99.3384 285.642 127.597L292.007 131.416C295.826 133.707 300.663 134.98 305.5 134.98Z" fill="white" fill-opacity="0.75" />
                        <path d="M560.083 118.89V426.172C560.083 450.612 540.226 473.525 515.786 476.58L507.385 477.598C451.885 484.981 366.345 513.24 317.465 540.226C314.156 542.262 310.083 543.026 305.5 543.026V134.929C310.337 134.929 315.174 133.656 318.993 131.365L323.321 128.565C368.637 100.051 449.849 72.8108 503.311 68.2283H504.839C535.134 65.6825 560.083 88.3404 560.083 118.89ZM197.302 235.184H140.021C129.583 235.184 120.927 226.528 120.927 216.09C120.927 205.652 129.583 196.997 140.021 196.997H197.302C207.74 196.997 216.396 205.652 216.396 216.09C216.396 226.528 207.74 235.184 197.302 235.184ZM216.396 311.559H140.021C129.583 311.559 120.927 302.903 120.927 292.465C120.927 282.027 129.583 273.372 140.021 273.372H216.396C226.834 273.372 235.49 282.027 235.49 292.465C235.49 302.903 226.834 311.559 216.396 311.559Z" fill="#CF3A3A" />
                    </svg>
                </div>
            </div>



        </div>
    );
}

export default AboutPage;