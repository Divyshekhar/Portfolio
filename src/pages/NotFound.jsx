import { Box, Typography } from "@mui/material";

function NotFound({darkTheme}) {
    return (
        <Box
            display={"flex"}
            marginTop={'60px'}
            justifyContent={"center"}
            sx={{
                p: "20px",
                color: darkTheme ? 'rgb(177, 215, 233)' : 'rgb(37,38,69)'

            }}>
            <Typography sx={{height: "50vh", fontSize: '30px', fontFamily: 'sans-serif'}}>
                Uh oh! Looks like you're lost.
            </Typography>
        </Box>
    )
}
export default NotFound;