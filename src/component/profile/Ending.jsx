import Typography from "@mui/material/Typography";
import ending_img from "../../assets/ending.png";
import * as React from "react";

export default function EndingPortfolio(){
    return <>
        <div className="w-full mt-12">
            <img className="w-1/4 mx-auto pb-7 filter brightness-0 contrast-100 sepia" src={ending_img}/>
            <div className="w-4/5 mx-auto">
                <Typography variant="inherit" className="text-center">
                    Thank you for taking the time to review my portfolio. I am excited to continue my journey as a data
                    scientist and software developer. I am eager to apply my skills to solve complex problems and make a
                    positive impact on the world. I am looking forward to new opportunities and challenges that will
                    help me grow both personally and professionally. I am confident that my passion for data science and
                    software development will drive me to succeed in any role I take on. I am excited to see what the
                    future holds and am ready to take on whatever comes my way.
                </Typography>
            </div>
        </div>
    </>
}