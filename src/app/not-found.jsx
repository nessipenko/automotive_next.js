import Link from 'next/link'
import { Typography, Button } from '@mui/material';
import PageContainer from './components/pageContainer';

export default function NotFound() {
    return (
        <PageContainer>
            <Typography variant="h4" >
                Oops! Something went wrong.
            </Typography>
            <Link href="/">
                <Button variant="contained" color="error" >
                    Return Home
                </Button>
            </Link>
        </PageContainer>
    )
}