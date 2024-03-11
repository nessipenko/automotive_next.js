import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import PageContainer from '../../components/pageContainer';

const Loading = () => {
    return (
        <PageContainer>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress color="primary" variant="indeterminate" />
            </Box>
        </PageContainer>
    );
}

export default Loading;