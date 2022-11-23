import { Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from "@mui/material";
import { FunctionComponent } from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import ThumbGraph from "./ThumbGraph";

interface UltraSimpleOverviewProps {}

const UltraSimpleOverview: FunctionComponent<UltraSimpleOverviewProps> = () => {
    const theme = useTheme();

    return (
        <TableContainer component={Card}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                <TableBody>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <TableRow key={i} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell>API</TableCell>
                            <TableCell align="right">Operational</TableCell>
                            <TableCell width={24} align="right">
                                <BsCheckSquareFill
                                    size={24}
                                    color={Math.random() > 0.5 ? theme.palette.success.main : theme.palette.error.main}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UltraSimpleOverview;
