import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    background-color: #a13866;
    height: 100vh;
    overflow-x: hidden;
    align-items: center;
    justify-content:center;
    flex-direction: column;
`

export const title = styled.div`
    font-weight: bold;
    font-size: 32px;
    text-shadow: 2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black, 1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
    color: white;
    margin-bottom: 10px;
`


export const middleContainer = styled.div`
    display: column;
    background-color: #3499BE;
    height: 313px;
    width: 618px;
    border-radius: 30px;
    
    p{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: bold;
        font-size: 25px;
    }

    .input{
        margin-left: 55px;    
        width: 490px;
        height: 137px;
        border-radius: 10px;

    }

    .button{
        margin-top: 10px;
        margin-left: 185px;    
        width: 252px;
        height: 45px;
        border-radius: 30px;
        background-color: #FA6632;
        font-weight: bold;
        font-size: 20px;
        color: white;
        
    }

`
/*margin: 0;
background: url(${ background });
background - repeat: no - repeat;
background - position: center;
background - size: cover;
border: 1px solid #000;
height: 770px;
width: 100 %;
*/