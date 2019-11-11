import { Header, List, Image } from "semantic-ui-react";
import React from 'react';
import classes from './About.module.css'
import sideImage from '../../../assets/images/Picture1.jpg'

const about = (props) => (
    <div className={classes.About}>
        <div className={classes.Left}>
            <span>
            <Header as='h3' inverted>About</Header>
            We created Sirius to introduce a new way of thinking about the online learning market. 
            <p>Most of the online learning platforms focus mostly on a topic, leaving aside the user's needs or objectives.
            Sirius not only validates your knowledge, but also gives you multiple sources of knowledge like books, communities, courses and etc...</p>
                <Header as='h3' inverted>How to use Sirius<br /></Header>
                Sirius is a project under construction, today we can advise you in the following paths:
                <List inverted>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
                        <List.Content>
                            <List.Header>Sales Reps</List.Header>
                            <List.Description>
                                Ask sirius something like "I want to be a sales rep" to access this path.
        </List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
                        <List.Content>
                            <List.Header>Autonomous</List.Header>
                            <List.Description>
                                Ask Sirius something like "learn Autonomous" to access this path.
        </List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/matthew.png' />
                        <List.Content>
                            <List.Header>Financial Advisor</List.Header>
                            <List.Description>
                                Ask Sirius something like "I want to be a financial advisor" to access this path.
        </List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                        <List.Content>
                            <List.Header>Machine Learning</List.Header>
                            <List.Description>
                                Ask Sirius something like "learn machine learning" to access this path.
        </List.Description>
                        </List.Content>
                    </List.Item>
                </List>
            </span>
        </div>
        <div className={classes.Right}>
            <Image src={sideImage} size="large" floated="right" />
        </div>
    </div>
)

export default about;