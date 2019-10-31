import React from 'react';
import { Button } from 'semantic-ui-react';


const answer = (props) => {
    let newQuestion = "Nova Pergunta"
    return (<Button onClick={props.changeQuestion(newQuestion)} />)
}

export default answer;