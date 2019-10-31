import { Container, Segment } from "semantic-ui-react";
import React from 'react';
import classes from './Footer.module.css';

const footer = (props) => (
    <div className={classes.Footer}>
        {props.children}
    </div>
)

export default footer;