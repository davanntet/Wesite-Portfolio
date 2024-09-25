import Typography from '@mui/material/Typography';
import SocialMediasPortfolio from "./SocialMedias.jsx";

export default function AboutPortfolio(){
    return <>
        <div className="w-full py-12 border-b-2 border-primary">
            <Typography variant="h4" className="text-center pb-4 font-bold filter">About Me</Typography>
            <div className="w-4/5 mx-auto">
                <Typography variant="inherit" className="text-center">
                    As a student studying computer science at CADT, I have developed a solid foundation in programming, data analysis, machine learning, mathematics, project management, and software development. I am eager to apply these skills professionally, particularly at the intersection of data science and software development.
                </Typography>
            </div>
            <SocialMediasPortfolio/>
        </div>
    </>
}