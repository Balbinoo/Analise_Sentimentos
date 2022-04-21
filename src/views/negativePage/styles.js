import styled from 'styled-components'
import mad from '../../assets/mad.png'

export const Container = styled.div`
    display: flex;
    background-color: #FB3640;
    
    height: 100vh;
    overflow-x: hidden;
    align-items: center;
    justify-content:center;
    flex-direction: column;

    border: 1px solid #000;
    background-image: url(${mad});
    width: 100vw;
    height:100vh;
    
`

export const title = styled.div`
    font-weight: bold;
    font-size: 32px;
    text-shadow: 2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black, 1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
    color: white;
    margin-bottom: 10px;
    border-color: black;
    
`


export const middleContainer = styled.div`
    display: column;
    background-color: #3499BE;
    height: 488px;
    width: 618px;
    border-radius: 30px;    
    border-style: solid;
    border-width: 1px;
    border-color: black;

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: bold;
        font-size: 32px;
    }

    .input{
        margin-left: 55px;    
        width: 490px;
        height: 137px;
        border-radius: 10px;

    }
    .button{
        margin-top: 25px;
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

export const redSpace = styled.div`
    background-color:#FB3640;    
    height: 118px;
    display: flex;
    align-items:  center;
    justify-content: center;
    margin-top: 30px;

    p{
        color:black;
    }
    
`