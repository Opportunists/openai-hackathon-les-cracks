import React from "react";
import PropTypes from 'prop-types';

class NavBarButton extends React.Component {
    render() {
        return (
            <a className="text-white font-primary font-semibold text-[40px] hidden md:block
                hover:bg-white hover:bg-opacity-[20%] px-2 py-2 rounded-md
            " href={this.props.url}>
                {this.props.text}
            </a>
        )
    };
}

NavBarButton.propTypes = {
    text: PropTypes.string,
    url: PropTypes.string,
}

function NavBar() {
    return (
        <div className="w-full flex absolute top-0 justify-between text-white px-[50px] pt-[35px] z-10">
            <div className="text-white font-primary font-extrabold flex justify-center items-center" datatype="logo">
                <div className="bg-white h-[35px] w-[5px] rounded-xl mr-3"></div>
                <div className="flex flex-col h-auto">
                    <h3>KRY</h3>
                    <h3>LEGAL</h3>
                </div>
            </div>

            <div className="space-x-5 flex justify-center items-center" datatype="buttons">
                <NavBarButton text={"About"} url={"/about"} />
                <NavBarButton text={"Home"} url={"/"}/>
                <NavBarButton text={"Start"} url={"/start"}/>

                <button className="space-y-2 md:hidden">
                    <div className="w-8 h-0.5 bg-white"></div>
                    <div className="w-8 h-0.5 bg-white"></div>
                    <div className="w-8 h-0.5 bg-white"></div>
                </button>
            </div>
        </div>
    );
}

export default NavBar;