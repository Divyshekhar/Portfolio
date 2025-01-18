import { Box, Typography, Grid, Button, Tooltip } from "@mui/material";
import profile from '../assets/profile.jpg';
import TS_icon from '../assets/TS_icon.png';
import React_icon from '../assets/react_icon.png';
import JS_icon from '../assets/JS_icon.png';
import Html_icon from '../assets/Html_icon.png';
import Css_icon from '../assets/css_icon.png';
import Node_icon from '../assets/Node_icon.png';
import Express_icon from '../assets/expressjs_icon.png';
import Postman_icon from '../assets/postman_icon.svg';
import Mongo_icon from '../assets/mongo_icon.png';
import Postgres_icon from '../assets/postgres_icon.png';
import Linkedin_icon from '../assets/linkedin_icon.png';
import Twitter_icon from '../assets/X_icon.svg';
import Git_icon from '../assets/git_icon.jpg'
import Redux_icon from '../assets/redux_icon.png';
import { Memories } from "../components/Memories";
import { SmartBrains } from "../components/SmartBrains";
import { RoboFriends } from "../components/RoboFriends";

function Home({ darkTheme }) {
    return (

        <Box
            display={"flex"}
            marginTop={'60px'}
            marginLeft={'0px'}
            justifyContent={"center"}
            sx={{
                p: "20px",
                color: darkTheme ? 'rgb(177, 215, 233)' : 'rgb(37,38,69)'

            }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={profile}
                        alt="Profile Picture"
                        style={{ width: "400px", height: '400px', paddingBottom: 0, marginTop: "-60px", borderRadius: "50%", objectFit: "cover", overflow: "hidden" }}
                    />

                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: 'center', marginBottom: '155px' }}>
                    <Typography sx={{ fontSize: '20px', marginLeft: "20px" }}>
                        Hi! I'm Divyshekhar Sinha, <br /> A third year Computer Science student at KIIT University, India.<br />
                        I am a Fullstack Developer.<br />
                        My current Tech Stack include: <br />
                        <br />
                        <Tooltip title="Typescript" enterDelay={10} leaveDelay={30}>
                            <img
                                src={TS_icon}
                                alt="Typescript"
                                style={{ height: 'auto', width: '5%', borderRadius: '20%', marginRight: '10px' }}
                            />
                        </Tooltip>
                        <Tooltip title="React" enterDelay={10} leaveDelay={30}>
                            <img
                                src={React_icon}
                                alt="React"
                                style={{ height: 'auto', width: '5%', borderRadius: '20%', marginRight: '8px' }}
                            />
                        </Tooltip>
                        <Tooltip title="Redux" enterDelay={10} leaveDelay={30}>
                            <img
                                src={Redux_icon}
                                alt="Redux"
                                style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '5px' }}
                            />
                        </Tooltip>
                        <Tooltip title="Javascript" enterDelay={10} leaveDelay={30}>
                            <img
                                src={JS_icon}
                                alt="Javascript"
                                style={{ height: 'auto', width: '5.3%', borderRadius: '20%', marginRight: '10px' }}
                            />
                        </Tooltip>

                        <Tooltip title="HTML" enterDelay={10} leaveDelay={30}>
                            <img
                                src={Html_icon}
                                alt="HTML"
                                style={{ height: 'auto', width: '3.6%', borderRadius: '20%', marginRight: '10px' }}
                            />
                        </Tooltip>
                        <Tooltip title="CSS" enterDelay={10} leaveDelay={30}>
                            <img
                                src={Css_icon}
                                alt="CSS"
                                style={{ height: 'auto', width: '5%', borderRadius: '20%', marginRight: '10px' }}
                            />
                        </Tooltip>
                        <Tooltip title="Node JS" enterDelay={10} leaveDelay={30}>
                            <img
                                src={Node_icon}
                                alt="Node JS"
                                style={{ height: 'auto', width: '5%', borderRadius: '20%', marginRight: '10px' }}
                            />
                        </Tooltip>
                        <Tooltip title="Express JS" enterDelay={10} leaveDelay={30}>
                            <img
                                src={Express_icon}
                                alt="Express JS"
                                style={{ height: 'auto', width: '5%', borderRadius: '20%', marginRight: '0px' }}
                            />
                        </Tooltip>
                        {/* NEED TO CHANGE THE POSTMAN ICON */}
                        <Tooltip title="Postman" enterDelay={10} leaveDelay={30}>
                            <img
                                src={Postman_icon}
                                alt="Postman"
                                style={{ height: 'auto', width: '6%', borderRadius: '40%', marginRight: '10px' }}
                            />
                        </Tooltip>
                        <Tooltip title="MongoDB" enterDelay={10} leaveDelay={30}>
                            <img
                                src={Mongo_icon}
                                alt="MongoDB"
                                style={{ height: 'auto', width: '5%', borderRadius: '20%', marginRight: '10px' }}
                            />
                        </Tooltip>
                        <Tooltip title="Postgres" enterDelay={10} leaveDelay={30}>
                            <img
                                src={Postgres_icon}
                                alt="Postgres"
                                style={{ height: 'auto', width: '5%', borderRadius: '20%', marginRight: '10px' }}
                            />
                        </Tooltip>
                        <br />
                        <br />
                        Connect With Me : <br />
                        <br />
                        <Tooltip title="Linkedin" enterDelay={10} leaveDelay={30}>
                            <img
                                src={Linkedin_icon}
                                alt="Linkedin"
                                onClick={() => (window.open('https://www.linkedin.com/in/divyshekhar-sinha-3208851b2/', '_blank'))}
                                style={{ height: 'auto', width: '5.5%', marginRight: '20px', cursor: 'pointer' }}
                            />
                        </Tooltip>
                        <Tooltip title="Twitter" enterDelay={10} leaveDelay={30}>
                            <img
                                src={Twitter_icon}
                                alt="Twitter"
                                onClick={() => (window.open('https://x.com/DivyshekharSin', '_blank'))}
                                style={{ height: 'auto', width: '5.5%', borderRadius: '10px', marginRight: '20px', cursor: 'pointer' }}
                            />
                        </Tooltip>
                        <Tooltip title="Github" enterDelay={10} leaveDelay={30}>
                            <img
                                src={Git_icon}
                                alt="Github"
                                onClick={() => (window.open('https://github.com/Divyshekhar', '_blank'))}
                                style={{ height: 'auto', width: '5.5%', borderRadius: '10px', marginRight: '20px', cursor: 'pointer' }}
                            />
                        </Tooltip>
                        <br />
                        <br />
                        <Tooltip title="Open Resume" enterDelay={10} leaveDelay={30}>
                            <Button variant="contained" onClick={() => (window.open('https://docs.google.com/document/d/199QyyJGVAamPPLna4R3UF4IYlvTMWlyk/edit', '_blank'))} sx={{ borderRadius: "25px", background: 'rgb(255,82,82)' }}>Resume</Button>
                        </Tooltip>
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={12} sx={{ marginTop: "50px" }}>
                    <Typography sx={{ fontSize: '30px', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>
                        Projects
                    </Typography>
                </Grid>
                <Memories darkTheme={darkTheme} />
                <SmartBrains darkTheme={darkTheme} />
                <RoboFriends darkTheme={darkTheme} />
            </Grid>
        </Box>
    )
}
export default Home;