import React from "react"
import NavBar from "~/components/NavBar"
import "~/styles/App.css";


function App() {
  return (
    <div className="bg-primary w-screen h-screen font-primary text-white flex flex-col">
      <NavBar />

      <div className="flex flex-col px-[10px] md:px-[40px] pt-[150px]">
        <h1 className="text-[50px] md:text-[70px] text-center font-bold" datatype="title">
          Streamline Your Legal Research
        </h1>

        <h3 className="text-[20px] md:text-[25px] line-clamp-3 text-center pt-[30px]">
          AI-Powered Analysis of Terms & Conditions
        </h3>
      </div>

      <div className="flex space-x-5 md:space-x-[120px] pt-[100px] justify-center items-center">
        <button className="text-[20px] md:text-[30px] px-3 py-3 border-white border-[4px] rounded-[10px] font-bold">START NOW</button>
        <button className="text-[20px] md:text-[30px] px-3 py-3 text-primary border-[4px] rounded-[10px] font-bold bg-white">LEARN MORE</button>
      </div>

    </div>
  )
}

export default App
