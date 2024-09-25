import Typography from '@mui/material/Typography';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function SkillsPortfolio(){
    return <>
        <div className="w-full py-12 border-b-2 border-primary">
            <Typography variant="h4" className="text-center pb-4 font-bold">Technical Skills</Typography>
            <div className="w-4/5 mx-auto">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid size={4}>
                            <Item>Machine Learning</Item>
                        </Grid>
                        <Grid size={4}>
                            <Item>Data Analytics</Item>
                        </Grid>
                        <Grid size={4}>
                            <Item>Pytorch</Item>
                        </Grid>
                        <Grid size={4}>
                            <Item>PowerBI</Item>
                        </Grid>
                        <Grid size={4}>
                            <Item>R Studio</Item>
                        </Grid>
                        <Grid size={4}>
                            <Item>Flutter</Item>
                        </Grid>
                        <Grid size={4}>
                            <Item>ReactJS</Item>
                        </Grid>
                        <Grid size={4}>
                            <Item>SpringBoot</Item>
                        </Grid>
                        <Grid size={4}>
                            <Item>DJango</Item>
                        </Grid>
                        <Grid size={2}>
                            <Item>R</Item>
                        </Grid>
                        <Grid size={2}>
                            <Item>SQL</Item>
                        </Grid>
                        <Grid size={2}>
                            <Item>Ruby</Item>
                        </Grid>
                        <Grid size={2}>
                            <Item>Python</Item>
                        </Grid>
                        <Grid size={2}>
                            <Item>Java</Item>
                        </Grid>
                        <Grid size={2}>
                            <Item>C</Item>
                        </Grid>
                        <Grid size={2}>
                            <Item>JavaScript</Item>
                        </Grid>
                        <Grid size={2}>
                            <Item>HTML</Item>
                        </Grid>
                        <Grid size={2}>
                            <Item>CSS</Item>
                        </Grid>
                        <Grid size={2}>
                            <Item>Dart</Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    </>
}



