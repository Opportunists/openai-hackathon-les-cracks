import React from "react"
import NavBar from "~/components/NavBar"
import "~/styles/UseIt.css";

export function UseIt(){
    return <div id="useit-pages">
        <NavBar/>
        <div id="useit-core">
            <div id="useit-input">
                <h1>Use it now !</h1>
                <p>Please provide the source of the terms
                 of use policy you want to analyze by
                  entering the URL or pasting the text
                   in the box below.
                </p>
                <input type="text" placeholder="https://url-of-t&cs-example.com"/>
                <div>
                    <span id="span-line">OR</span>
                </div>
                <textarea placeholder="Copy the T&C's tou want to expect here">

                </textarea>
                <button className="button-process">Process</button>
            </div>
        </div>
    </div>
}