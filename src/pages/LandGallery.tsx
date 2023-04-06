import React from 'react'
import Lcard from '../components/Lcard'
import { Box, Grid } from '@mui/material'

function LandGallery() {
    return (
        <Box>
            <Grid container>
                <Grid item>
                    <Lcard />
                </Grid>
                <Grid item>
                    <Lcard />
                </Grid>
                <Grid item>
                    <Lcard />
                </Grid>
            </Grid>

        </Box>
    );

}

export default LandGallery