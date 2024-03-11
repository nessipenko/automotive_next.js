'use client'
import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import {
    Button,
    Box,
} from '@mui/material';
import Link from 'next/link'
import useData from '../../api/autoData';
import PageContainer from '../../components/pageContainer';

const SalesChart = () => {
    const data = useData();

    const getMonthFromDate = (date) => {
        return new Date(date).toLocaleString('en-US', { month: 'short' });
    };

    const calculateSalesByMonth = (data) => {
        const salesByMonth = {};
        data.forEach(salesArray => {
            salesArray.forEach(sale => {
                const month = getMonthFromDate(sale.date);
                salesByMonth[month] = (salesByMonth[month] || 0) + 1;
            });
        });
        return salesByMonth;
    };

    const getSortedMonths = (salesByMonth) => {
        const monthsOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return Object.keys(salesByMonth).sort((a, b) => monthsOrder.indexOf(a) - monthsOrder.indexOf(b));
    };

    const getSalesDataArray = (sortedMonths, salesByMonth) => {
        return sortedMonths.map(month => salesByMonth[month]);
    };

    const salesByMonth = calculateSalesByMonth(data.map(item => item.sales));
    const sortedMonths = getSortedMonths(salesByMonth);
    const salesDataArray = getSalesDataArray(sortedMonths, salesByMonth);


    return (
        <PageContainer>
            <Box position="absolute" top={0} right={10} mt={3} mr={2}>
                <Button variant="outlined" component={Link} href="/">Back to filters</Button>
            </Box>

            <LineChart
                width={800}
                height={400}
                series={[
                    { data: salesDataArray, label: 'Autos Sold' },
                ]}
                xAxis={[{ scaleType: 'point', data: sortedMonths }]}
                yAxis={[{ scaleType: 'linear', label: 'number of sales' }]}
            />

        </PageContainer>
    );
};

export default SalesChart;
