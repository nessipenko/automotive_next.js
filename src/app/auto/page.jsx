'use client'
import { useState } from "react";
import useData from "../api/page";
import AutoFilter from "../components/autoFilter/AutoFilter";
import AutoList from "../components/autoList/AutoList";
import {
    Grid,
    Paper
} from '@mui/material';
import PageContainer from "../components/pageContainer";


export default function Home() {
    const data = useData();

    const [filteredData, setFilteredData] = useState(data);
    const [noFilterResult, setNoFilterResult] = useState(false);

    const handleFilterChange = (filteredData, noFilterResult) => {
        setFilteredData(filteredData);
        setNoFilterResult(noFilterResult);
    };

    return (
        <PageContainer>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper style={{ padding: 16 }}>
                        <AutoFilter onFilterChange={handleFilterChange} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper style={{ padding: 16 }}>
                        <AutoList data={filteredData} noFilterResult={noFilterResult} />
                    </Paper>
                </Grid>
            </Grid>
        </PageContainer>
    );
}
