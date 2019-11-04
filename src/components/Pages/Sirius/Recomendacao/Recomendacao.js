import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const recomendacao = (props) => (
    <Card.Group>
        {props.courses.map(course => (
            <Card>
                <Card.Content>
                    <Card.Header>{course.course_name}</Card.Header>
                    <Card.Meta>Type: {course.type}</Card.Meta>
                    <Card.Description>
                        Price: <strong>${course.price}</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green' as={Link} to={course.course_link} >
                            Purchase</Button>
                    </div>
                </Card.Content>
            </Card>

        ))}

    </Card.Group>
)

export default recomendacao