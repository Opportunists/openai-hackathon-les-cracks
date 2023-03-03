import React, { useEffect, useState } from "react";
import NavBar from "~/components/NavBar";
import { Store } from 'react-notifications-component';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

// Link to BAC api
const API_URL = "192.168.52.83:8000";

function TextArea(props) {
    /*
    <ul class="list-disc">
        <li>Now this is a story all about how, my life got flipped-turned upside down</li>
        <!-- ... -->
    </ul>
    */
    console.log(props.text);
    const arrayText = props.text;
    return (
        <ul className={`w-7/12 mb-4 bg-white/[25%] py-[25px] px-[25px] ${props.show ? '' : 'hidden'} list-disc h-auto`} >
            {
                arrayText.map((elt) => {
                    return <li className="font-medium">{elt.replace("-", "")}</li>
                })
            }
        </ul>
    )
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlText: "",
            showText: false,
            processedText: []
        };
        this.fetchData = this.fetchData.bind(this);
    }

    sendNotification(title, message, type) {
        Store.addNotification({
            title: title,
            message: message,
            type: type,
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 2000,
                onScreen: true
            }
        });
    }


    fetchData() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({
            //     url: this.state.urlText
            // })
        };

        fetch(`http://192.168.52.83:8000/websites/detail/${encodeURIComponent(this.state.urlText)}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({ processedText: data.content })
                this.setState({ showText: true });
                this.sendNotification("Success", "Url processed", "success");
            }
            ).catch(err => {
                console.log(err);
                this.sendNotification("Oops!", "Can't process URL", "danger");
            });
    }

    render() {
        return (
            <div className="flex justify-center items-center h-auto w-screen flex-col space-y-[4rem] min-h-screen">
                <div className="h-auto flex w-2/3 text-center text-white flex-col justify-center items-center space-y-5">
                    <h1 className="text-[90px] font-bold">Analyze Terms of Use</h1>
                    <h2 className="text-[25px] w-2/3">
                        Please provide the source of the terms of use
                        policy you want to analyze by entering the URL
                        or pasting the text in the box below.
                    </h2>

                </div>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium  sr-only dark:text-white">Search</label>
                <div className="relative w-7/12">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-black border focus:border-secondary border-gray-300 rounded-lg bg-white opacity-[25%] font-medium focus:ring-1 focus:ring-secondary focus:ring-opacity-50"
                        placeholder="Put terms and use URL ..."
                        required
                        onChange={(e) => this.setState({ urlText: e.target.value })} />
                    <button className="text-white absolute right-2.5 bottom-2.5 bg-secondary hover:bg-secondary font-medium rounded-lg text-sm px-4 py-2" onClick={(e) => this.fetchData()}>Search</button>
                </div>


                <TextArea text={this.state.processedText} show={this.state.showText} />
                <ReactNotifications />
            </div>
        )
    }
}


class StartPage extends React.Component {
    public render() {
        return (
            <div className="bg-primary w-full h-screen font-primary text-white flex flex-col justify-center items-center md:pt-[4rem] lg:pt-[0rem]">
                <NavBar />
                <Form />
            </div>
        );
    }
}

export default StartPage;
