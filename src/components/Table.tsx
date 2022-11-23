import { Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from "@mui/material";
import { FunctionComponent } from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import ThumbGraph from "./ThumbGraph";

interface TableOverviewProps {}

const TableOverview: FunctionComponent<TableOverviewProps> = () => {
    const theme = useTheme();

    return (
        <TableContainer component={Card}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Status</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell></TableCell>
                        <TableCell align="right">25H</TableCell>
                        <TableCell align="right">7D</TableCell>
                        <TableCell align="right">AVG</TableCell>
                        <TableCell align="right">Last check</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <TableRow key={i} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell width={24}>
                                <BsCheckSquareFill
                                    size={24}
                                    color={Math.random() > 0.5 ? theme.palette.success.main : theme.palette.error.main}
                                />
                            </TableCell>
                            <TableCell>API</TableCell>
                            <TableCell>
                                <ThumbGraph />
                            </TableCell>
                            <TableCell align="right">100%</TableCell>
                            <TableCell align="right">99%</TableCell>
                            <TableCell align="right">120ms</TableCell>
                            <TableCell align="right">1 minute ago</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableOverview;
