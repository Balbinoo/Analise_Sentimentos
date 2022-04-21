import React from 'react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

function PositivePage() {
    let navigate = useNavigate()

    function navigateToPage() {
        navigate("/")
    }

    return (
        <S.Container>
            <S.title>
                Analisador de Sentimentos
            </S.title>
            <S.middleContainer>
                <p>Comentário analisádo com sucesso!</p>
                <textarea className="input"></textarea>
                <S.greenSpace> <p>Esse é um comentário positivo!</p> </S.greenSpace>
                <button onClick={navigateToPage} className="button" type="textarea"> VOLTAR </button>
            </S.middleContainer>
        </S.Container >
    );
}

export default PositivePage;
