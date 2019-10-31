import React from 'react';
import { Card, Image, Icon, Form, Header } from 'semantic-ui-react';
import classes from './Question.module.css';
import { prependToMemberExpression } from '@babel/types';

const question = (props) => (
    <div>
        <Header as='h2'>{props.question}</Header>
    </div>
)

export default question;