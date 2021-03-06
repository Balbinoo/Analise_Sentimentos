import * as S from './styles'
import React, { useState } from 'react';
import happy from '../assets/happy.png'
import mad from '../assets/mad.png'
import indifferent from '../assets/neutral.png'
import LoadingAnimation from '../components/Loading'

function MainPage() {
  const [userInput, setUserInput] = useState('');
  const [sentiment, setSentimentValue] = useState(null);
  const [loading, setLoading] = useState(false)
  let color;
  let message;
  let image;

  function defineSentiment(sentimentValue) {

    if (sentimentValue > 0.6) {
      setSentimentValue("positive")
    } else if (sentimentValue < 0.6 && sentimentValue > 0.4) {
      setSentimentValue("neutral")
    } else if (sentimentValue < 0.4) {
      setSentimentValue("negative")
    }
  }

  function handleResponse(response) {
    // setSentimentValue(response)
    setLoading(false)
    console.log('Value from bert :' + response);
    defineSentiment(response)
  }

  function SendText() {
    setLoading(true)
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT"
      },
      body: JSON.stringify({ 'text': userInput })
    };
    fetch('https://d2cc-189-50-95-214.sa.ngrok.io/nlpapp/sentiment-analises', requestOptions)
      .then(response => response.json())
      .then(response => handleResponse(response))
  }

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };


  if (sentiment === "neutral") {
    color = "gray"
    image = indifferent
    message = "Esse é um comentário neutro!"

  } else if (sentiment === "positive") {
    color = "#17C69B"
    image = happy
    message = "Esse é um comentário positivo!"

  } else if (sentiment === "negative") {
    color = "#FB3640"
    image = mad
    message = "Esse é um comentário negativo!"

  } else {
    message = "Que tipo de comentário será?"
    image = null
  }

  const middleBar = {
    backgroundColor: loading ? '#3499BE' : color
  };

  const containerGeneral = {
    backgroundImage: 'url(' + (loading ? null : image) + ')',
    backgroundColor: loading ? 'gray' : color,
  }

  return (
    <S.Container style={containerGeneral}>
      <S.title>
        Analisador de Sentimentos
      </S.title>
      <S.middleContainer>
        <p> {loading ? 'Analisando comentário...' : 'Digite um comentário para ser analisado'} </p>
        <textarea className="input" value={userInput} onChange={handleChange} ></textarea>
        <S.sentimentSpace style={middleBar}> <p> {loading ? <LoadingAnimation /> : message} </p> </S.sentimentSpace>
        <button onClick={SendText} className="button" type="textarea"> ANALISAR </button>
      </S.middleContainer>
    </S.Container >
  );
}

export default MainPage;
