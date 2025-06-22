import { Button, Grid, Tooltip, Typography } from '@mui/material';
import Sommaire_img from '../assets/Sommaire.png';
import Postgres_icon from '../assets/postgres_icon.png';
import TS_icon from '../assets/TS_icon.png';
import Next_icon from '../assets/nextjs.svg';
import Tailwind_icon from '../assets/tailwind.png'


export const Sommaire = ({ darkTheme }) => {
    return (
        <>
            <Grid item xs={12} sm={6} sx={{ marginTop: '50px' }}>
                <Typography sx={{ fontSize: '25px', fontWeight: 'bold', display: 'flex', justifyContent: 'left', color: darkTheme ? 'rgb(233, 177, 196)' : 'rgb(222,109,46)' }}>
                    Sommaire: An AI-PDF Summarizer<br /> <br />
                </Typography>
                <Typography sx={{ fontSize: '19px', display: 'flex', justifyContent: 'center' }}>
                    Sommaire is a free AI-powered web application designed to simplify and accelerate document processing. Get a summarized PDF in the form of Instagram Stories. Built using the latest Next.js 15 making use of SSR and modular design using Tailwind CSS. It is super secure with Clerk authentication which provides various ways to signup to the application. It also stores all your PDF Summaries and you can even download the summarized PDFs on your local machine.
                    <br />
                </Typography>
                <Typography sx={{ color: darkTheme ? 'rgb(254,246,179)' : 'rgb(21,94,149)', fontWeight: 'bold' }}>Tech stack used: </Typography><br />
               <Tooltip title="Next.js">
                <img
                    src={Next_icon}
                    title="Next.js"
                    alt="Next.js"
                    style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '8px', background: "white" }}
                />
                </Tooltip>
                <Tooltip title="Tailwind CSS">
                <img
                    src={Tailwind_icon}
                    title="Tailwind CSS"
                    alt="Tailwind CSS"
                    style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px', background: "white" }}
                />
                </Tooltip>
                <Tooltip title="Typescript">
                <img
                    src={TS_icon}
                    title="Typescript"
                    alt="Typescript"
                    style={{ height: 'auto', width: '5.3%', borderRadius: "20%", marginRight: '10px' }}
                />
                </Tooltip>
                <Tooltip title="Postgres">
               <img
                    src={Postgres_icon}
                    title="Postgres"
                    alt="Postgres"
                    style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px' }}

                />
                </Tooltip>
                <br />
                <br />
                <Button variant="contained" sx={{ borderRadius: '25px', background: 'rgb(183,113,228)', color: 'rgb(177, 215, 233)', marginRight: '20px' }} onClick={() => window.open('https://sommaireai.vercel.app/', '_blank')} >See Live</Button>
                <Button variant="contained" sx={{ borderRadius: '25px', background: 'rgb(183,113,228)', color: 'rgb(177, 215, 233)' }} onClick={() => window.open('https://github.com/Divyshekhar/Sommaire', '_blank')} >Source Code</Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ marginTop: '50px' }}>
                <img
                    src={Sommaire_img}
                    title="Sommaire"
                    alt="Sommaire"
                    style={{ width: '85%', borderRadius: '20px', marginLeft: '50px' }}
                />
            </Grid>
        </>
    )
}