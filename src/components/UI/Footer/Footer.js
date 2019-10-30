import { Container, Segment } from "semantic-ui-react";
import React from 'react';
import classes from './Footer.module.css';

const footer = (props) => (
    <div className={classes.Footer}>
        <Container>{props.children}</Container>
    </div>
)

export default footer;