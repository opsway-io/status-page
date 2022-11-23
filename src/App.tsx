import { Box, Card, Container, Divider, Link, Stack, Typography } from "@mui/material";
import StatusCard from "./components/StatusCard";
import TableOverview from "./components/Table";
import UltraSimpleOverview from "./components/UltraSimple";

function App() {
    return (
        <Box
            sx={{
                backgroundColor: "background.default",
                height: "fit-content",
                width: "100%",
            }}
        >
            <Container maxWidth="lg">
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
                            <Typography fontSize={18}>All checks are passing</Typography>
                        </Card>

                        <Divider />

                        <Typography variant="body1" color="text.secondary">
                            Overview style 1
                        </Typography>

                        <StatusCard />
                        <StatusCard />
                        <StatusCard />

                        <Divider />

                        <Typography variant="body1" color="text.secondary">
                            Overview style 2
                        </Typography>

                        <TableOverview />

                        <Divider />

                        <Typography variant="body1" color="text.secondary">
                            Overview style 3
                        </Typography>

                        <UltraSimpleOverview />

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
