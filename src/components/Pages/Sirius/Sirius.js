import { Form, Button, Header, ButtonGroup, Grid } from "semantic-ui-react";
import React, { Component } from 'react';
import classes from './Sirius.module.css';
import axios from 'axios';
import Recomendacao from './Recomendacao/Recomendacao';
import socketIOClient from "socket.io-client";


class Sirius extends Component {

    constructor(props) {
        super(props)

        this.state = {
            question: "What do you want?",
            value: " ",
            cookie: null,
            answers: [" "],
            offset: 0,
            courses: [" "]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const socket = socketIOClient('https://4000-cadc0d02-8bcf-4120-9253-5a79a257a6be.ws-us02.gitpod.io/')
        socket.on('result', (payload) => {
            console.log('[PAYLOAD] -', payload)
        })
    }


    changeQuestionHandler(newQuestion) {
        this.setState({
            question: newQuestion
        })
    }

    handleChange(event) {
        this.setState({ value: event.target.value });

    }

    async handleSubmit(event) {
        console.log('nlpRequest: ' + this.state.value);
        const nlpReq = this.state.value
        let dados = {
            'Content-Type': 'application/json'
        }
        let params = {
            user: "frontEnd",
            text: nlpReq
        }
        this.setState({question: 'Just a second, Sirius is thinking'})
        let botRes = await axios.post('https://948f14be.ngrok.io/test/message', params, { headers: dados });
        console.log(botRes)

        const urlToBackend = 'http://132.145.163.158:5000/tag?tag=' + botRes.data.messagePayload.text;

        let res = await axios.get(urlToBackend, { withCredentials: true });
        let data = await res.data;
        let cookie = await res.data.sessionid;
        console.log(res.data)
        let tempArray = res.data.Resposta.map(igKey => igKey)
        console.log(tempArray)
        this.setState({ question: data.Pergunta, cookie: cookie, answers: tempArray })
        console.log(this.state.question, this.state.cookie, this.state.answers)
    }

    async handleQuestion(btValue) {

        console.log('Botão Escolhido: ' + btValue);
        console.log('[SESSION] -', this.state.cookie)
        let dados = {
            'Content-Type': 'application/json',
            'Set-Cookie': this.state.cookie
        }
        let params = { resposta: btValue }
        let res = await axios.post('http://132.145.163.158:5000/tag', params, { headers: dados }, { withCredentials: true })
        console.log(await res.data)
        if (res.data.offset === 0) {
            let tempArray = res.data.Respostas.map(igKey => igKey)
            console.log(tempArray)
            this.setState({ question: res.data.Pergunta, answers: tempArray })
            console.log(this.state.question, this.state.answers)
        }
        else {
            let courseArray = res.data.Recomendacao.map(igKey => igKey)
            this.setState({ courses: courseArray, offset: res.data.offset })
            console.log(this.state.courses, this.state.offset)
        }
    }

    render() {
        return (
            <div className={classes.Sirius}>
                {this.state.cookie ?
                    <> {!this.state.offset ?
                        <>
                            <Grid className={classes.Grid} >
                                <Grid.Row> 
                                    <h1 className={classes.Header}>{this.state.question}</h1>
                                </Grid.Row>
                                <Grid.Row>
                                    <ButtonGroup className={classes.ButtonGroup}>

                                        {this.state.answers.map(igKey => (
                                            <Button
                                                onClick={() => this.handleQuestion(igKey)}
                                                color='orange'>
                                                {igKey}</Button>
                                        ))}
                                    </ButtonGroup>
                                </Grid.Row>
                            </Grid></> :
                        <Recomendacao
                            courses={this.state.courses}
                        />}
                    </>
                    :
                    <Form onSubmit={this.handleSubmit}>
                        <Header as='h1' inverted>{this.state.question}</Header>
                        <Form.Input value={this.state.value} onChange={this.handleChange} />
                        <Button type="submit" color='orange' size="huge" circular>Start</Button>
                    </Form>
                }
            </div>
        )
    }
}


export default Sirius;