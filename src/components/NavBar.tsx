import React from "react";
import PropTypes from 'prop-types';

class NavBarButton extends React.Component {
    render() {
        return (
            <button className="text-white font-primary font-semibold text-[20px] hidden md:block
                hover:bg-white hover:bg-opacity-[20%] px-2 py-2 rounded-md
            ">
                {this.props.text}
            </button>
        )
    };
}

NavBarButton.propTypes = {
    text: PropTypes.string
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
                <NavBarButton text={"About"} />
                <NavBarButton text={"Home"} />
                <NavBarButton text={"Start"} />

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