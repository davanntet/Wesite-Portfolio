import Typography from "@mui/material/Typography";
import {useState} from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function InternshipsPortfolio(){
    const [expanse1, collape1] = useState(true);
    const toggleContent1 = () => {
        console.log("toggleContent1");
        collape1(!expanse1);
    };
        return <div className={"border-primary border-b-2"}>
        <div className="py-12 w-4/5 mx-auto ">
            <Typography variant="h4" className="text-center pb-4 font-bold">Internships</Typography>
            <div className="text-left py-2">
                During my studies at <a href="https://www.cadt.edu.kh/">CADT</a>, I have had the opportunity to participate in internships at various
                companies. Here are some of the companies where I have worked:
            </div>
            <ol className={"list-inside text-left"}>
                <li className="font-semibold text-base" >
                    {expanse1?<ArrowRightIcon fontSize={"large"}  onClick={toggleContent1} />:<ArrowDropDownIcon fontSize={"large"}  onClick={toggleContent1}/>}
                    <span className="py-2" onClick={toggleContent1}>Institute of Digital Technology of Cambodia Academy of Digital
                    Technology</span>
                    <ul className={`list-disc pl-4 ml-8 font-medium transition-all ${expanse1?"hidden":""}`}>
                        <li className="py-2">Internship in the field of Data Science.</li>
                        <li className={"py-2"}> Project is related to Learning Analytics</li>
                        <li className="py-2">Developed predictive models to forecast student performance using data from
                            Moodle, BacII, Entra exams, and personal data.
                        </li>
                        <li className="py-2"> Created predictions at both course and program levels to enhance academic
                            planning and student success.
                        </li>
                        <li className="py-2">Duration: 3 months</li>
                        <div className="text-center">
                            <Typography variant="overline">January 15, 2024 – April 11, 2024</Typography>
                        </div>
                    </ul>
                </li>

            </ol>
        </div>
    </div>
}