import { Box, Stack } from "@mui/material";
import { FunctionComponent } from "react";

interface ResponseTimesSmallProps {}

const ResponseTimesSmall: FunctionComponent<ResponseTimesSmallProps> = () => {
    return (
        <Stack
            spacing={1}
            direction="row"
            sx={{
                height: "2rem",
                opacity: 0.75,
            }}
        >
            {new Array(48).fill(0).map((_, i) => (
                <Box
                    key={i}
                    sx={{
                        flex: 1,
                        height: "100%",
                        backgroundColor: randomColor(),
                    }}
                />
            ))}
        </Stack>
    );
};

function randomColor() {
    return Math.random() > 0.5 ? "success.main" : "error.main";
}

export default ResponseTimesSmall;
