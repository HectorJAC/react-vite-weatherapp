import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: (theme) =>
                theme.palette.grey[300],
                p: 4,
                marginTop: "auto",
            }}
            component="footer"
            >
            <Container maxWidth="sm">
                <Typography variant="body2" color="text.secondary" align="center">
                {"Copyright © "}
                <Link color="inherit">
                    Hector Aramboles
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
                </Typography>
            </Container>
        </Box>
    );
}