import React from 'react';
import { Button, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import classes from './Home.module.css';
import sideImage from '../../../assets/images/Picture1.jpg'
 
const home = (props) => (
  <div className={classes.Home}>
    <div className={classes.Left}>
      <p>
        <Header as='h1' inverted>Welcome to Sirius</Header>
        The A.I. based advisor, that helps you improve your skills according to your career objectives.
        Ask Sirius what you want to be, and he will help you by recomending courses, soft skills, communities and more...
        <p>
          <div className={classes.Button}>
            <Button as={Link} to='/sirius'
              floated="right"
              color="orange"
              size="huge"
              circular
            >Get Started</Button>
          </div>
        </p>
      </p>

    </div>
    <div className={classes.Right}>
        <Image src={sideImage} size="large" floated="right"/>
    </div>
  </div>
)

export default home;