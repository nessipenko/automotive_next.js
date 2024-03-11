const { default: PageContainer } = require("./pageContainer")
import Link from 'next/link';
import Image from "next/image";
import { Grid, Typography } from '@mui/material';

const FixedHeader = () => {
    return (
        <PageContainer>
            <Grid container spacing={3} alignItems="center">
                <Grid item>
                    <Link href='/' style={{ zIndex: '100', position: 'relative' }}>
                        <Image
                            src="/logo.svg"
                            alt="Automotive Logo"
                            width={100}
                            height={100}
                            priority

                        />
                    </Link>
                </Grid>
                <Grid item xs style={{ display: 'block', marginLeft: '-100px', zIndex: '0' }}>
                    <Typography variant="h3" component="h1" gutterBottom style={{ textShadow: '2px 2px 4px #000', color: '#fff', fontWeight: 'bold' }}>
                        Automotive Catalog
                    </Typography>
                </Grid>
            </Grid>
        </PageContainer >
    )
}

export default FixedHeader;
