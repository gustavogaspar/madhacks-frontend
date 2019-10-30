import React from 'react'
import { Grid,Header, Button } from 'semantic-ui-react'
import classes from './Home.module.css'

const home = (props) => (
  <div className={classes.Home}>
  <Grid divided='vertically' container className={classes.Grid}>
    <Grid.Row columns={2} stretched verticalAlign="bottom">
      <Grid.Column>
        <Header as="h1" inverted>Welcome to Sirius</Header>
      </Grid.Column>
      <Grid.Column>
        
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2} stretched>
      <Grid.Column >
      This is your ultimate advisor.<br />
Here you will find all you need<br />
to improve your career, an your <br />
skills.
      </Grid.Column>
      <Grid.Column>
        test4
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2} stretched>
      <Grid.Column>
      <Button basic circular inverted size='huge' color='green'>
        Get Started
      </Button> 
      </Grid.Column>
      <Grid.Column>
        teste
      </Grid.Column>
    </Grid.Row>
    </Grid>
  </div>
)

export default home;