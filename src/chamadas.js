import axios from 'axios';

async function botCall(nlpReq) {

    let dados = {
        'Content-Type': 'application/json'
      }
    let params = {
        user: "frontEnd",
        text: nlpReq
      }
    let res = await axios.post('https://948f14be.ngrok.io/test/message', params, {headers: dados});

    return res
}

/* async function makeGetRequest(code) {

    const url= 'http://192.168.56.1:5000/tag?tag='+ code;
    let res = await axios.get(url);
  
    let data = res.data;
    let headers = res.headers['set-cookie'][0];
    let cookie = headers.split(";")[0];
  
    return (data, cookie);
  }

  async function makePostRequest(resposta, session) {

    let dados = {
      'Content-Type': 'application/json',
      'Cookie': session
    }
    params = {resposta: resposta}

    let res = await axios.post('http://192.168.56.1:5000/tag', params, {headers: dados});    
    let pergunta = res.data;

    return pergunta;
} */

export default botCall;
