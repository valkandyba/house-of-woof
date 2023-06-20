import React from 'react';

import classes from './Banner.module.scss'
import {Container, Typography} from "@mui/material";

const Banner: React.FC = () => {
    return (
        <div className={classes.banner}>
            <Container maxWidth="md" className={classes["banner-container"]}>
                <Typography
                    variant="h2"
                    component="h1"
                    lineHeight={1}
                    color={"inherit"}
                >
                    What is Lorem Ipsum?
                </Typography>
                <Typography component="p" color={"inherit"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book. </Typography>
            </Container>
        </div>
    );
};

export default Banner;
