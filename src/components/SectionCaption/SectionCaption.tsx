import React from 'react';
import { Typography, Container} from "@mui/material";
import classes from './SectionCaption.module.scss'

type SectionCaptionProps = {
    title: string;
    text: string;
};

const SectionCaption: React.FC<SectionCaptionProps> = ({title, text}) => {
    return (
        <div className={classes.caption}>
            <Container maxWidth="md">
                <Typography
                    fontWeight={"bold"}
                    variant="h3"
                    component="h2">
                    {title}
                </Typography>
                <Typography
                    lineHeight={1}
                    variant="body1"
                    component="p">
                    {text}
                </Typography>
            </Container>
        </div>
    );
};

export default SectionCaption;
