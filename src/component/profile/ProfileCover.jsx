import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import image_prifle from "../../assets/profile.png";
import type_1 from "../../assets/type_1.png";
import image_frame from "../../assets/frame.png";
export default function ProfileCover() {
    return (
        <div id="header" className="flex p-9 flex-row border-b-2 border-primary">
            <img src={image_prifle} className="frame w-72"/>
            {/*<div className="relative flex justify-center w-1/3">*/}
            {/*    <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 mt-2.5" src={image_prifle} alt="random"/>*/}
            {/*    <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={image_frame} alt="frame"/>*/}
            {/*</div>*/}

            <div className="p-3 text-center w-full h-full flex flex-col">
                <h1 className="text-5xl font-bold">Davann TET</h1>
                <div className="text-center my-7">
                    <img src={type_1} className="w-2/3 mx-auto"/>
                </div>

                <div className="h-full">
                    <p className="text-3xl text-gray-500">Data Scientist</p>
                    <p className="text-3xl text-gray-500">&</p>
                    <p className="text-3xl text-gray-500">Software Developer</p>
                </div>

            </div>
        </div>
    );
}