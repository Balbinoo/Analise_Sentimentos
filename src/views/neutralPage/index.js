import React from 'react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

function NeutralPage() {
    let navigate = useNavigate()

    function navigateToPage() {
        navigate("/");
    }

    return (
        <S.Container>

            <S.title>
                Analisador de Sentimentos
            </S.title>
            <S.middleContainer>
                <p>Comentário analisádo com sucesso!</p>
                <textarea className="input"> </textarea>
                <S.graySpace> <p>Esse é um comentário neutro!</p> </S.graySpace>
                <button onClick={navigateToPage} className="button" type="textarea"> VOLTAR </button>
            </S.middleContainer>
        </S.Container >
    );
}

export default NeutralPage;
