import { Button, ButtonBase, Card, CardContent, CardHeader, Divider, Stack, Typography, useTheme } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import ResponseTimeGraph from "./ResponseTimes";
import ResponseTimesSmall from "./ResponseTimesSmall";

interface StatusCardProps {}

const StatusCard: FunctionComponent<StatusCardProps> = () => {
    const theme = useTheme();

    const [expanded, setExpanded] = useState(false);

    return (
        <ButtonBase onClick={() => setExpanded(!expanded)}>
            <Card
                sx={{
                    width: "100%",
                }}
            >
                <CardHeader
                    title={
                        <Stack direction="row" spacing={2} alignItems="center">
                            <BsFillCheckSquareFill size={24} color={theme.palette.success.main} />
                            <Typography variant="body1" color="success">
                                {Math.random() > 0.5 ? "API" : "Website"}
                            </Typography>

                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{
                                    flex: 1,
                                    textAlign: "right",
                                }}
                            >
                                99.98% uptime - 7 days
                            </Typography>

                            <Divider orientation="vertical" flexItem />

                            <Typography variant="body1" color="text.secondary">
                                127ms avg
                            </Typography>

                            <Divider orientation="vertical" flexItem />

                            <Typography variant="body1" color="text.secondary">
                                checked 1m ago
                            </Typography>
                        </Stack>
                    }
                />

                <CardContent
                    sx={{
                        textAlign: "left",
                    }}
                >
                    {!expanded && <ResponseTimesSmall />}

                    {expanded && (
                        <Stack spacing={2}>
                            <Typography variant="subtitle1" color="text.secondary">
                                Response times
                            </Typography>

                            <ResponseTimeGraph />
                        </Stack>
                    )}
                </CardContent>
            </Card>
        </ButtonBase>
    );
};

export default StatusCard;
