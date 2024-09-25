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

export default function ProjectsPortfolio(){
    return <div className="border-b-2 border-primary">
        <div className="w-full py-12 ">
            <Typography variant="h4" className="text-center pb-4 font-bold">Projects</Typography>
            <div className="w-4/5 mx-auto">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid size={8}>
                            <a target="_blank" href={"https://github.com/davanntet/Data-Driven-in-learning-management-system.git"}><Item>Forecasting Student Performance (Internship I) </Item></a>
                        </Grid>
                        <Grid size={4}>
                            <a target="_blank" href={"https://github.com/davanntet/CADT-CAPSTONE-PROJECT-II-GEN-8-.git"}>
                                <Item>Chatbot (Capstone II)</Item>
                            </a>
                        </Grid>
                        <Grid size={4}>
                            <a target="_blank" href={"https://github.com/davanntet/Job-Hunter.git"}><Item>Find Jobs Web Application (Capstone I)</Item></a>
                        </Grid>
                        <Grid size={4}>
                            <a target="_blank" href={"https://github.com/davanntet/emotion-detection.git"}><Item>Face Emotion Recognition 1</Item></a>
                        </Grid>
                        <Grid size={4}>
                            <a target="_blank" href={"https://github.com/davanntet/emotion-detection.git"}><Item>Face Emotion Recognition 2</Item></a>
                        </Grid>
                        <Grid size={4}>
                            <a target="_blank" href={"https://github.com/davanntet/Movie-Search-Engine.git"}><Item>Movie Search Engine</Item></a>
                        </Grid>
                        <Grid size={4}>
                            <a target="_blank" href={"https://github.com/davanntet/Build-SQL-CLI-to-manage-CSV-file.git"}><Item>Build SQL CLI for CSV file</Item></a>
                        </Grid>
                        <Grid size={4}>
                            <a target="_blank" href={"https://github.com/davanntet/Hotel Management System.git"}><Item>Hotel Management System</Item></a>
                        </Grid>
                        <Grid size={4}>
                            <a target="_blank" href={"https://github.com/davanntet/final-automata.git"}><Item>Convert NFA to DNA (Automata)</Item></a>
                        </Grid>
                        <Grid size={4}>
                            <a target="_blank" href={"https://github.com/davanntet/final_project_news_app-with-flutter.git"}><Item>News App</Item></a>
                        </Grid>
                        <Grid size={4}>
                            <a target="_blank" href={"https://github.com/davanntet/Restaurant-Website.git"}><Item>Phnom Penh Restaurants Website</Item></a>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    </div>
}



