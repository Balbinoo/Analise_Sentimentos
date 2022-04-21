// import React from 'react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import React, {  useEffect, useState  } from 'react';

function MainPage() {
  const [userInput, setUserInput] = useState('');
  // const [sentimentValue, setSentimentValue] = useState('');

  let navigate = useNavigate()

  let value = getRandom()

  function navigateToPage(sentimentValue) {

    if (sentimentValue > 0.6) {
      navigate("/positive");
    } else if ( sentimentValue < 0.6  &&  sentimentValue > 0.4) {
      navigate("/neutral");
    } else if (sentimentValue < 0.4){
      navigate("/negative");
    }

  }

  function getRandom() {
    let max = 1;
    let min = 0;
    return Math.random() * (max - min) + min;
  }

  function handleResponse(response){
    // setSentimentValue(response)
    console.log('Value from bert :' + response);
    navigateToPage(response)
  }

  function SendText() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 
                        "Access-Control-Allow-Origin": "*" ,
                        "Access-Control-Allow-Credentials": "true" ,
                        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT" ,
                        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept,Authorization"
          },
            body: JSON.stringify({ 'text': userInput })
        };
        fetch('http://127.0.0.1:8000/nlpapp/sentiment-analises', requestOptions)
        .then(response => response.json())
        .then(response => handleResponse(response ))
  }
  const handleChange = (event) => {
      setUserInput(event.target.value);
  };

  return (
    <S.Container>

      <S.title>
        Analisador de Sentimentos {value}
      </S.title>

      <S.middleContainer>
        <p>Digite um comentário para ser analisado:</p>
        <textarea className="input" value={userInput} onChange={handleChange} ></textarea>
        <button onClick={SendText} className="button" type="textarea"> ANALISAR </button>
      </S.middleContainer>
    </S.Container >
  );
}

export default MainPage;
