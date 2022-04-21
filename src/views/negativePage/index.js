import React from 'react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

function NegativePage() {
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
                <textarea className="input"></textarea>
                <S.redSpace> <p>Esse é um comentário negativo!</p> </S.redSpace>
                <button onClick={navigateToPage} className="button" type="textarea"> VOLTAR </button>
            </S.middleContainer>
        </S.Container >
    );
}

export default NegativePage;
