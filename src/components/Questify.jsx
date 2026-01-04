import { Button, Grid, Tooltip, Typography } from '@mui/material';
import FinSnap_img from '../assets/FinSnap.png';
import questify_img from '../assets/questify.png';
import Prisma_icon from '../assets/prisma.svg';
import TS_icon from '../assets/TS_icon.png';
import Go_icon from '../assets/golang.png';
import Postgres_icon from '../assets/postgres_icon.png';
import Next_icon from '../assets/nextjs.svg';


export const Questify = ({ darkTheme }) => {
    return (
        <>
            <Grid item xs={12} sm={6} sx={{ marginTop: '50px' }}>
                <Typography sx={{ fontSize: '25px', fontWeight: 'bold', display: 'flex', justifyContent: 'left', color: darkTheme ? 'rgb(233, 177, 196)' : 'rgb(222,109,46)' }}>
                    Questify: An AI-Powered Interview Prep Guide<br /> <br />
                </Typography>
                <Typography sx={{ fontSize: '19px', display: 'flex', justifyContent: 'center' }}>
                    Questify is a technical interview preparation platform designed to help users practice subject-wise interview questions and answers. The application allows users to select specific topics such as data structures, algorithms, databases, and system design, and provides curated questions with detailed answers for effective learning. It includes a tailored section to ask you questions based on your resume.
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
                {/* <Tooltip title="Prisma">
                <img
                    src={Prisma_icon}
                    title="Prisma"
                    alt="Prisma"
                    style={{ height: 'auto', width: '4.8%', borderRadius: "20%", marginLeft: '2px', background: "white" }}
                    
                    />
                    </Tooltip> */}

                <br />
                <br />
                <Button variant="contained" sx={{ borderRadius: '25px', background: 'rgb(183,113,228)', color: 'rgb(177, 215, 233)', marginRight: '20px' }} onClick={() => window.open('https://questify-lac-eight.vercel.app/', '_blank')} >See Live</Button>
                <Button variant="contained" sx={{ borderRadius: '25px', background: 'rgb(183,113,228)', color: 'rgb(177, 215, 233)' }} onClick={() => window.open('https://github.com/Divyshekhar/Questify', '_blank')} >Source Code</Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ marginTop: '50px' }}>
                <img
                    src={questify_img}
                    title="Questify"
                    alt="Questify"
                    style={{ width: '85%', borderRadius: '20px', marginLeft: '50px' }}
                />
            </Grid>
        </>
    )
}