import { Button, Grid, Typography } from '@mui/material';
import Memories_img from '../assets/Memories.png';
import Redux_icon from '../assets/redux_icon.png';
import React_icon from '../assets/react_icon.png';
import JS_icon from '../assets/JS_icon.png';
import Node_icon from '../assets/Node_icon.png';
import Express_icon from '../assets/expressjs_icon.png';
import Mongo_icon from '../assets/mongo_icon.png';


export const Memories = ({ darkTheme }) => {
    return (
        <>
            <Grid item xs={12} sm={6} sx={{ marginTop: '50px' }}>
                <Typography sx={{ fontSize: '25px', fontWeight: 'bold', display: 'flex', justifyContent: 'left', color: darkTheme ? 'rgb(233, 177, 196)' : 'rgb(222,109,46)' }}>
                    Memories: A Social Media App<br /> <br />
                </Typography>
                <Typography sx={{ fontSize: '19px', display: 'flex', justifyContent: 'center' }}>
                    Memories is a fullstack web application that allows users to upload photos and descriptions to create a record of their moments. Users can like posts, edit them, or delete them as needed. The app provides a simple interface for managing and viewing posts, making it easy to keep track of personal memories and interactions.
                    <br />
                </Typography>
                <Typography sx={{ color: darkTheme ? 'rgb(254,246,179)' : 'rgb(21,94,149)', fontWeight: 'bold' }}>Tech stack used: </Typography><br />
                <img
                    src={Mongo_icon}
                    title="MongoDB"
                    alt="MongoDB"
                    style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px' }}

                />
                <img
                    src={Express_icon}
                    title="Express JS"
                    alt="Express"
                    style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px' }}

                />
                <img
                    src={React_icon}
                    title="React"
                    alt="React"
                    style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '8px' }}
                />
                <img
                    src={Node_icon}
                    title="Node JS"
                    alt="Node"
                    style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px' }}

                />
                <img
                    src={JS_icon}
                    title="Javascript"
                    alt="Javascript"
                    style={{ height: 'auto', width: '5.3%', borderRadius: "20%", marginRight: '7px' }}

                />
                <img
                    src={Redux_icon}
                    title="Redux"
                    alt="Redux"
                    style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px', background: "white" }}

                />
                <br />
                <br />
                <Button variant="contained" sx={{ borderRadius: '25px', background: 'rgb(183,113,228)', color: 'rgb(177, 215, 233)', marginRight: '20px' }} onClick={() => window.open('https://memories-frontend-yv72.onrender.com/', '_blank')} >See Live</Button>
                <Button variant="contained" sx={{ borderRadius: '25px', background: 'rgb(183,113,228)', color: 'rgb(177, 215, 233)' }} onClick={() => window.open('https://github.com/Divyshekhar/Memories_Frontend', '_blank')} >Source Code</Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ marginTop: '50px' }}>
                <img
                    src={Memories_img}
                    title="Memories"
                    alt="Memories"
                    style={{ width: '85%', borderRadius: '20px', marginLeft: '50px' }}
                />
            </Grid>
        </>
    )
}