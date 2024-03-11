import { Container } from '@mui/material';

const PageContainer = ({ children }) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            {children}
        </Container>
    );
};

export default PageContainer;
