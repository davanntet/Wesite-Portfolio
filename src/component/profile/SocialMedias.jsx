import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Typography from "@mui/material/Typography";

export default function SocialMediasPortfolio(){
    return <>
        <div className="flex flex-row justify-center mt-10 font-bold">
            <a href={"https://www.linkedin.com/in/davanntet"} target="_blank" className="flex flex-col p-3">
                <LinkedInIcon className="mx-auto" fontSize="large"/>
                <Typography variant="overline">LinkedIn</Typography>
            </a>
            <a href={"https://github.com/davanntet"} className="flex flex-col p-3" target="_blank">
                <GitHubIcon className="mx-auto" fontSize="large"/>
                <Typography variant="overline">GitHub</Typography>
            </a>
            <a href={"https://t.me/davanntet"} className="flex flex-col p-3" target="_blank">
                <TelegramIcon className="mx-auto" fontSize="large"/>
                <Typography variant="overline">Telegram</Typography>
            </a>
            <a href={"mailto:davann.tet@student.cadt.edu.kh"} className="flex flex-col p-3" target="_blank">
                <EmailIcon className="mx-auto" fontSize="large"/>
                <Typography variant="overline">Email</Typography>
            </a>
            <a href={"tel:+855967960968"} className="flex flex-col p-3" target="_blank">
                <CallIcon className="mx-auto" fontSize="large"/>
                <Typography variant="overline">Call</Typography>
            </a>
        </div>
    </>
}