import { styled, Theme } from "@mui/material";
import { FunctionComponent, memo } from "react";
import * as falso from "@ngneat/falso";

const Container = styled("div")(({ theme }) => ({
    display: "flex",
    height: "40px",
    justifyContent: "space-between",
}));

const LineContainer = styled("div")(({ theme }) => ({
    cursor: "pointer",
    height: "100%",
    alignItems: "flex-end",
    display: "flex",
    transition: "transform 0.2s",
    "&:hover": {
        transform: "translate(0, -4px)",
    },
}));

const Line = styled("div")(({ theme, value }: { theme?: Theme; value: number }) => ({
    height: `${value}%`,
    width: 8,
    backgroundColor: theme?.palette.success.main,
}));

interface ResultThumbGraphProps {
    onClick?: (key: number) => void
}

const ResultThumbGraph: FunctionComponent<ResultThumbGraphProps> = (props) => {
    return (
        <Container>
            {new Array(24).fill(1).map((_, i) => (
                <LineContainer key={i}>
                    <Line value={falso.randNumber({ min: 0, max: 100 })} onClick={() => props.onClick?.(i)}/>
                </LineContainer>
            ))}
        </Container>
    );
};

export default memo(ResultThumbGraph);
