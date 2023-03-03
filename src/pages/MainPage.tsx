import React, { useEffect } from "react"
import SplitType from "split-type";
import NavBar from "~/components/NavBar"
import "~/styles/MainPage.css";
import ReactRevealText from 'react-reveal-text';

class MainPage extends React.Component {

  constructor() {
    super();
    this.state = { showTitle: false };
  }

  toggleShow() {
    console.log(!this.state.showTitle);
    this.setState({
      showTitle: true,
    });
  }

  componentDidMount() {
    this.toggleShow();
    console.log("23:", this.state.showTitle);
    setTimeout(() => {
      console.log("POPO");
      this.setState({ show: true });
    }, 100);
  }

  render() {
    return (
      <div className="bg-primary w-screen h-screen font-primary text-white flex flex-col justify-center items-center">
        <NavBar />
        <div className="absolute top-[100px] left-0 semi-triangle"></div>

        <div className="flex flex-col px-[10px] md:px-[40px] z-10">

          <ReactRevealText show={this.state.show} delayMax={800} className="text-[40px] md:text-[70px] lg:[90px] text-center font-bold">
            Streamline Your Legal Research
          </ReactRevealText>

          <ReactRevealText show={this.state.show} delayMin={800} className="text-[20px] md:text-[25px] lg:[45px] line-clamp-3 text-center pt-[30px]">
            AI-Powered Analysis of Terms & Conditions
          </ReactRevealText>
        </div>

        <div className="flex space-x-5 md:space-x-[120px] pt-[70px] justify-center items-center z-10">
          <a className="text-[20px] md:text-[30px] px-3 py-3 border-white border-[4px] rounded-[10px] font-bold
          hover:text-primary hover:bg-white hover:animate-none animate-wiggle-start" href="/start">
            START NOW
          </a>
          <button className="text-[20px] md:text-[30px] px-3 py-3 text-primary border-[4px] rounded-[10px] font-bold bg-white
          hover:text-white hover:bg-transparent transition ease-in-out duration-100 poo">
            LEARN MORE
          </button>
        </div>

        <div className="absolute bottom-0 right-0 semi-circle"></div>

      </div>
    )
  }
}

export default MainPage
