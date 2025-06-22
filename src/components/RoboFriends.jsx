import { Button, Grid, Toolbar, Tooltip, Typography } from "@mui/material";
import HTML_icon from '../assets/Html_icon.png';
import RoboFriends_img from '../assets/RoboFriends.jpeg';
import CSS_icon from '../assets/css_icon.png';
import React_icon from '../assets/react_icon.png';
import JS_icon from '../assets/JS_icon.png';
export const RoboFriends = ({ darkTheme }) => {
    return (
        <>
            <Grid item xs={12} sm={6} sx={{ marginTop: '50px' }}>
                <Typography sx={{ fontSize: '25px', fontWeight: 'bold', display: 'flex', justifyContent: 'left', color: darkTheme ? 'rgb(233, 177, 196)' : 'rgb(222,109,46)' }}>
                    Robofriends<br /> <br />
                </Typography>
                <Typography sx={{ fontSize: '19px', display: 'flex', justifyContent: 'center' }}>
                    Robofriends is a single-page application that allows users to search through a list of robot profiles. Each robot is displayed with a name and unique details, and the search feature dynamically filters the displayed robots based on the user's input.
                    <br />
                </Typography>
                <Typography sx={{ color: darkTheme ? 'rgb(254,246,179)' : 'rgb(21,94,149)', fontWeight: 'bold' }}>Tech stack used: </Typography><br />
                <Tooltip title="React.js">
                <img
                    src={React_icon}
                    title="React"
                    alt="React"
                    style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '8px' }}
                />
                </Tooltip>
                <Tooltip title="Javascript">
                <img
                    src={JS_icon}
                    title="Javascript"
                    alt="Javascript"
                    style={{ height: 'auto', width: '5.3%', borderRadius: "20%", marginRight: '10px' }}

                />
                </Tooltip>
                <Tooltip title="HTML">
                <img
                    src={HTML_icon}
                    title="HTML"
                    alt="HTML"
                    style={{ height: 'auto', width: '4.5%', borderRadius: "20%", marginRight: '10px' }}

                />
                </Tooltip>
                <Tooltip title="CSS">
                <img
                    src={CSS_icon}
                    title="CSS"
                    alt="CSS"
                    style={{ height: 'auto', width: '5.3%', borderRadius: "20%", marginRight: '10px' }}

                />
                </Tooltip>
                <br />
                <br />
                <Button variant="contained" sx={{ borderRadius: '25px', background: 'rgb(183,113,228)', color: 'rgb(177, 215, 233)', marginRight: '20px' }} onClick={() => window.open('https://divyshekhar.github.io/Robofriends/', '_blank')} >See Live</Button>
                <Button variant="contained" sx={{ borderRadius: '25px', background: 'rgb(183,113,228)', color: 'rgb(177, 215, 233)' }} onClick={() => window.open('https://github.com/Divyshekhar/Robofriends', '_blank')} >Source Code</Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ marginTop: '50px' }}>
                <img
                    src={RoboFriends_img}
                    title="Robofriends"
                    alt="Robofriends"
                    style={{ width: '85%', borderRadius: '20px', marginLeft: '50px' }}
                />
            </Grid>
        </>
    )
}