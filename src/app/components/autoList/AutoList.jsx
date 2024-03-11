import React from 'react';
import Link from 'next/link'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography
} from '@mui/material'

const AutoList = ({ data, noFilterResult }) => {
    const calculateTotalSales = (sales) => sales.length;

    return (
        <>
            {noFilterResult ? (
                <Typography variant='body3' color="primary" fontWeight="bold">No autos found with the selected filters.</Typography>
            ) : (
                <>
                    <Typography variant="h6" className="mb-3" style={{ textShadow: '1px 1px 3px #3f51b5', color: '#eff0f1', fontWeight: 'bold' }}>AutoList</Typography>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: '100vh' }} >
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {['ID', 'Make', 'Model', 'Type', 'Total Sold'].map((heading, index) => (
                                            <TableCell align={index === 0 ? 'right' : 'center'} key={index} style={{ fontWeight: 'bold' }}>{heading} </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data && data.map(({ id, make, model, type, sales }) => (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                                            <TableCell align='right' component="th" scope="row">
                                                <Link href={`/auto/${id}`} style={{ padding: '20px 5px', }}>
                                                    {id}
                                                </Link>
                                            </TableCell>
                                            {[make, model, type, calculateTotalSales(sales)].map((cellData, index) => (
                                                <TableCell align='center' key={index}>{cellData}</TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </>
            )}
        </>
    );
};

export default AutoList;
