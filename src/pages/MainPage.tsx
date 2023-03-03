import React from "react"
import NavBar from "~/components/NavBar"
import "~/styles/MainPage.css";


function MainPage() {
  return (
    <div className="bg-primary w-screen h-screen font-primary text-white flex flex-col justify-center items-center">
      <NavBar />

      <div className="absolute top-[100px] left-0 semi-triangle"></div>

      <div className="flex flex-col px-[10px] md:px-[40px] z-10">
        <h1 className="text-[40px] md:text-[70px] lg:[90px] text-center font-bold" datatype="title">
          Streamline Your Legal Research
        </h1>

        <h3 className="text-[20px] md:text-[25px] lg:[45px] line-clamp-3 text-center pt-[30px]">
          AI-Powered Analysis of Terms & Conditions
        </h3>
      </div>

      <div className="flex space-x-5 md:space-x-[120px] pt-[70px] justify-center items-center z-10">
        <button className="text-[20px] md:text-[30px] px-3 py-3 border-white border-[4px] rounded-[10px] font-bold
          hover:text-primary hover:bg-white hover:animate-none animate-wiggle-start
        ">START NOW</button>
        <button className="text-[20px] md:text-[30px] px-3 py-3 text-primary border-[4px] rounded-[10px] font-bold bg-white
          hover:text-white hover:bg-transparent transition ease-in-out duration-100 poo
        ">LEARN MORE</button>
      </div>

      <div className="absolute bottom-0 right-0 semi-circle"></div>

    </div>
  )
}

export default MainPage
