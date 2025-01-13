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
            <Typography>
                Not Found Page
            </Typography>
        </Box>
    )
}
export default NotFound;