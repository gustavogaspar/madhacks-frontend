import React from 'react';
import { Menu, Segment, Container } from 'semantic-ui-react';
import {Link } from 'react-router-dom';
import classes from './Menu.module.css';

const menu = (props) => (
<Segment inverted>
        <Container>
        <Menu inverted pointing secondary>
            <Menu.Item
            name="Home" as={Link} to="/">
                <div className={classes.Logo} color='purple'>Sirius</div>

            </Menu.Item>
        <Menu.Menu position='right'>
                <Menu.Item
                    name='Get Started' as={Link} to='/sirius'
                />
                <Menu.Item
                    name='About' as={Link} to='/about'
                />
            </Menu.Menu>
        </Menu>
        </Container>
        </Segment>
)

export default menu;