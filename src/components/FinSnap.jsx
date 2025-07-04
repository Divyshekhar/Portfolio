import { Button, Grid, Tooltip, Typography } from '@mui/material';
import FinSnap_img from '../assets/FinSnap.png';
import Prisma_icon from '../assets/prisma.svg';
import TS_icon from '../assets/TS_icon.png';
import Go_icon from '../assets/golang.png';
import Node_icon from '../assets/Node_icon.png';
import Postgres_icon from '../assets/postgres_icon.png';
import Next_icon from '../assets/nextjs.svg';


export const FinSnap = ({ darkTheme }) => {
    return (
        <>
            <Grid item xs={12} sm={6} sx={{ marginTop: '50px' }}>
                <Typography sx={{ fontSize: '25px', fontWeight: 'bold', display: 'flex', justifyContent: 'left', color: darkTheme ? 'rgb(233, 177, 196)' : 'rgb(222,109,46)' }}>
                    FinSnap: A Finance Tracker<br /> <br />
                </Typography>
                <Typography sx={{ fontSize: '19px', display: 'flex', justifyContent: 'center' }}>
                    FinSnap is a finance-related web application designed for efficiently tracking and managing financial data. It leverages modern web technologies user interactions. The application includes a comprehensive user management system with authentication, authorization, and session management using tokens. providing a focus on performance, security, and user-friendly design.
                    <br />
                </Typography>
                <Typography sx={{ color: darkTheme ? 'rgb(254,246,179)' : 'rgb(21,94,149)', fontWeight: 'bold' }}>Tech stack used: </Typography><br />
                <Tooltip title="Golang">
                <img
                    src={Go_icon}
                    title="Golang"
                    alt="Golang"
                    style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px', background: 'white' }}

                />
                </Tooltip>
                <Tooltip title="Next.js">
                <img
                    src={Next_icon}
                    title="Next.js"
                    alt="Next.js"
                    style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '8px', background: "white" }}
                />
                </Tooltip>

                <Tooltip title="Node.js">

                <img
                    src={Node_icon}
                    title="Node JS"
                    alt="Node"
                    style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px' }}
                    
                    />
                </Tooltip>
                <Tooltip title="Typescript">
                <img
                    src={TS_icon}
                    title="Typescript"
                    alt="Typescript"
                    style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '7px' }}
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
                <Tooltip title="Prisma">
                <img
                    src={Prisma_icon}
                    title="Prisma"
                    alt="Prisma"
                    style={{ height: 'auto', width: '4.8%', borderRadius: "20%", marginLeft: '2px', background: "white" }}
                    
                    />
                    </Tooltip>

                <br />
                <br />
                <Button variant="contained" sx={{ borderRadius: '25px', background: 'rgb(183,113,228)', color: 'rgb(177, 215, 233)', marginRight: '20px' }} onClick={() => window.open('https://finsnap.vercel.app/', '_blank')} >See Live</Button>
                <Button variant="contained" sx={{ borderRadius: '25px', background: 'rgb(183,113,228)', color: 'rgb(177, 215, 233)' }} onClick={() => window.open('https://github.com/Divyshekhar/FinSnap_Front_TS', '_blank')} >Source Code</Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ marginTop: '50px' }}>
                <img
                    src={FinSnap_img}
                    title="FinSnap"
                    alt="FinSnap"
                    style={{ width: '85%', borderRadius: '20px', marginLeft: '50px' }}
                />
            </Grid>
        </>
    )
}