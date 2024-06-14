import styled from 'styled-components'

export const Container = styled.div`

display: flex;
justify-content: center;
flex-wrap: wrap;
color: #0a122a;
font-family: "Lexend", sans-serif;

h3 {
    font-size: 55px;
    font-weight: 800;
    margin: 100px 0 50px;
    text-align: center;
    padding: 0 30px;  
}

main {
    background-color: #F4F7F9;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

@media(max-width: 1100px) {
    h3 {
        font-size: 45px;
    }
}

@media (max-width: 700px) {
    h3 {
        font-size: 35px;
    }
}
`