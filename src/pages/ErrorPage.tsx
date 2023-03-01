import React from "react";
import NavBar from "~/components/NavBar";


function ErrorPage() {
    return (
    <div className="bg-primary w-screen h-screen font-primary text-white flex flex-col justify-center items-center space-y-10">
        <NavBar/>
        <h1 className="text-6xl font-bold">Oops !</h1>
        <h2 className="text-2xl">Sorry, an unexpected error has occured</h2>

        <h2 className="text-3xl font-light mt-[100px]">404 Not Found</h2>
    </div>
    )

}

export default ErrorPage;