import React from 'react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

function MainPage() {
  let navigate = useNavigate()

  let value = getRandom()

  function navigateToPage() {

    if (value > 0.6) {
      navigate("/positive");
    } else if ( value < 0.6  &&  value > 0.4) {
      navigate("/neutral");
    } else if (value < 0.4){
      navigate("/negative");
    }

  }

  function getRandom() {
    let max = 1;
    let min = 0;
    return Math.random() * (max - min) + min;
  }

  return (
    <S.Container>

      <S.title>
        Analisador de Sentimentos {value}
      </S.title>

      <S.middleContainer>
        <p>Digite um comentário para ser analisado:</p>
        <textarea className="input"> </textarea>

        <button onClick={navigateToPage} className="button" type="textarea"> ANALISAR </button>
      </S.middleContainer>
    </S.Container >
  );
}

export default MainPage;
