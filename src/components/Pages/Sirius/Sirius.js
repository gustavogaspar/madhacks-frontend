import { Form, Button, Header, ButtonGroup } from "semantic-ui-react";
import React, { Component } from 'react';
import classes from './Sirius.module.css';
import axios from 'axios';
import Recomendacao from './Recomendacao/Recomendacao';
//import socketIOClient from "socket.io-client";


class Sirius extends Component {

    constructor(props) {
        super(props)

        this.state = {
            question: "What do you want to be?",
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
        //IMPLEMENTAR BUSCA NO BOT COM SOCKET.IO
        //const socket = socketIOClient('https://4000-cadc0d02-8bcf-4120-9253-5a79a257a6be.ws-us1.gitpod.io/')
        //socket.emit('teste', (this.state.value))
        const tags = this.state.value
        console.log(this.state.tags)
        const url = 'http://132.145.163.158:5000/tag?tag=' + tags;
        let res = await axios.get(url, {withCredentials:true});
        let data =  await res.data;
        let cookie = await res.data.sessionid;
        console.log(res.headers)
        console.log(res.data)
        let tempArray = res.data.Resposta.map(igKey => igKey)
        console.log(tempArray)
        this.setState({ question: data.Pergunta, cookie: cookie, answers: tempArray })
        console.log(this.state.question, this.state.cookie, this.state.answers)
    }

    async handleQuestion(btValue) {
        
        console.log('Botão Escolhido: ' + btValue);
        console.log('[SESSION] -',this.state.cookie)
        let dados = {
            'Content-Type': 'application/json',
            'Cookie': this.state.cookie
          }
        let  params = {resposta: btValue}
        let res = await axios.post('http://132.145.163.158:5000/tag', {
            method: "post",
            data: params,
            headers: dados,
            withCredentials: true
          })
        console.log( await res.data)
        if (res.data.offset === 0 ){
        let tempArray = res.data.Respostas.map(igKey => igKey)
        console.log(tempArray)
        this.setState({ question: res.data.Pergunta, answers: tempArray })
        console.log(this.state.question, this.state.answers)
        }
        else {
            let courseArray = res.data.Recomendacao.map(igKey => igKey)
            this.setState({ courses: courseArray, offset: res.data.offset})
            console.log(this.state.courses,this.state.offset)
        }
       }

    render() {
        return (
            <div className={classes.Sirius}>
                {this.state.cookie ?
                    <> {!this.state.offset ?
                    <>
                    <Header as='h1' inverted className={classes.Header}>{this.state.question}</Header>
                    <ButtonGroup className={classes.ButtonGroup}>
                        {this.state.answers.map(igKey => (
                            <Button
                                onClick={() => this.handleQuestion(igKey)}>
                                {igKey}</Button>
                        ))}
                    </ButtonGroup></>: 
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