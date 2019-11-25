import React from 'react';
import { Card, Button } from 'semantic-ui-react';


const recomendacao = (props) => (
    <Card.Group>
        {props.courses.map((course,index) => (
            <Card>
                <Card.Content>
        <Card.Header>{index}. {course.course_name}</Card.Header>
                    <Card.Meta>Type: {course.type}</Card.Meta>
                    <Card.Description>
                        Price: <strong>${course.price}</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button  color='orange' icon='shop' as='a' href={course.course_link} target='_blank' >
                            Purchase</Button>
                    </div>
                </Card.Content>
            </Card>

        ))}

    </Card.Group>
)

export default recomendacao