import { Box, Card, Container, Link, Stack, Typography } from "@mui/material";
import StatusCard from "./StatusCard";

function App() {
    return (
        <Box
            sx={{
                backgroundColor: "background.default",
                height: "100%",
                width: "100%",
            }}
        >
            <Container maxWidth="xl">
                <header
                    style={{
                        paddingTop: "2rem",
                        marginBottom: "2rem",
                    }}
                >
                    <a href="">
                        <img
                            alt="logo"
                            style={{
                                maxHeight: "2.5rem",
                            }}
                            src="https://opsway.io/img/logo_wide.svg"
                        />
                    </a>
                </header>

                <main>
                    <Stack spacing={2}>
                        <Card
                            sx={{
                                backgroundColor: "success.main",
                                color: "success.contrastText",
                                textAlign: "center",
                                padding: 1,
                            }}
                        >
                            <Typography variant="body1">All checks are passing</Typography>
                        </Card>

                        <StatusCard />
                        <StatusCard />
                        <StatusCard />

                        <Link href="https://opsway.io" target="_blank" rel="noopener noreferrer">
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    textDecoration: "none",
                                    opacity: 0.25,
                                    textAlign: "right",
                                }}
                            >
                                powered by <b>opsway</b>
                            </Typography>
                        </Link>
                    </Stack>
                </main>
            </Container>
        </Box>
    );
}

export default App;
