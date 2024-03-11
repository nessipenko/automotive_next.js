'use client'
import React from 'react';
import { useParams, Link } from 'next/navigation';
import useData from '../../api/autoData';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Button,
    Box,
    Card,
    CardContent
} from '@mui/material';
import PageContainer from '../../components/pageContainer';

const AutoDetails = () => {
    const params = useParams();
    const data = useData(params.id);

    let itemName = "Auto not found";
    let itemModel = "";
    let sales = [];
    let imageUrl = null;

    if (data) {
        const item = data.find(item => item.id === parseInt(params.id));
        if (item) {
            itemName = `${item.make} - ${item.model}`;
            itemModel = item.model;
            imageUrl = item.image;
            sales = item.sales ? item.sales.sort((a, b) => new Date(b.date) - new Date(a.date)) : [];
        }
    }

    return (
        <PageContainer>
            <Box position="absolute" top={0} right={10} mt={3} mr={2}>
                <Button variant="outlined" component={Link} href="/">Back to all autos</Button>
            </Box>
            <Card sx={{ display: 'flex', minWidth: 800 }}>
                {imageUrl && <img src={imageUrl} alt={itemName} style={{ width: 350, height: 'auto', objectFit: 'contain' }} />}
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" className="mb-3" style={{ textShadow: '1px 1px 3px #3f51b5', color: '#eff0f1', fontWeight: 'bold' }}>
                        {(itemName && itemModel) ? `${itemName} - ${itemModel}` : "Auto not found"}
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center' style={{ fontWeight: 'bold' }}>Date</TableCell>
                                    <TableCell align='center' style={{ fontWeight: 'bold' }}>Reseller</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sales.map((sale, index) => (
                                    <TableRow key={index}>
                                        <TableCell align='center'>{sale.date}</TableCell>
                                        <TableCell align='center'>{sale.reseller}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </PageContainer>
    );
};

export default AutoDetails;
