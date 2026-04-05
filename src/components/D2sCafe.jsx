import { Button, Grid, Tooltip, Typography } from '@mui/material';
import D2S_Image from '../assets/d2s.png';
import Postgres_icon from '../assets/postgres_icon.png';
import TS_icon from '../assets/TS_icon.png';
import Express_icon from '../assets/expressjs_icon.png';
import Prisma_icon from '../assets/prisma.svg';

import Next_icon from '../assets/nextjs.svg';
import Tailwind_icon from '../assets/tailwind.png'


export const D2sCafe = ({ darkTheme }) => {
    return (
        <>
            <Grid item xs={12} sm={6} sx={{ marginTop: '50px' }}>
                <Typography sx={{ fontSize: '25px', fontWeight: 'bold', display: 'flex', justifyContent: 'left', color: darkTheme ? 'rgb(233, 177, 196)' : 'rgb(222,109,46)' }}>
                    D2S Dehradun Cafe (POS & CRM)<br /> <br />
                </Typography>
                <Typography sx={{ fontSize: '19px', display: 'flex', justifyContent: 'center' }}>
                    Designed and developed a full-stack Point of Sale (POS) and Customer Relationship Management (CRM) system tailored for a café environment to streamline daily operations, enhance customer engagement, and enable data-driven decision-making.
                    The POS system enables seamless order management, billing, and real-time transaction tracking, reducing manual effort and improving service efficiency. It supports dynamic menu handling, quick checkout workflows, and ensures accurate order processing during peak hours. Along with a detailed Admin Dashboard to provide insights and analyze data.
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
                <Tooltip title="Express">
                    <img
                        src={Express_icon}
                        title="Express"
                        alt="Express"
                        style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px' }}

                    />
                </Tooltip>
                <Tooltip title="Prisma">
                    <img
                        src={Prisma_icon}
                        title="Prisma"
                        alt="Prisma"
                        style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px', background: 'white' }}

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
                <Button variant="contained" sx={{ borderRadius: '25px', background: 'rgb(183,113,228)', color: 'rgb(177, 215, 233)', marginRight: '20px' }} onClick={() => window.open('https://d2scafe.shop', '_blank')} >See Live</Button>
                {/* <Button variant="contained" sx={{ borderRadius: '25px', background: 'rgb(183,113,228)', color: 'rgb(177, 215, 233)' }} onClick={() => window.open('https://github.com/Divyshekhar/Sommaire', '_blank')} >Source Code</Button> */}
            </Grid>
            <Grid item xs={12} sm={6} sx={{ marginTop: '50px' }}>
                <img
                    src={D2S_Image}
                    title="D2S Cafe"
                    alt="D2S Cafe"
                    style={{ width: '85%', borderRadius: '20px', marginLeft: '50px' }}
                />
            </Grid>
        </>
    )
}