import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
color: #0a122a;
font-family: "Lexend", sans-serif;

h3 {
    font-size: 55px;
    font-weight: 800;
    margin: 100px 0 50px;
    text-align: center;
    padding: 0 30px;
}

img {
    width: 250px;
}

section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    background-color: #F4F7F9;
    padding: 100px 30px;
}

p {
    font-size: 20px;
    font-weight: 700;
    max-width: 230px;
    text-align: center;
}

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;
    padding-bottom: 30px;
    background-color: #fff;
    border-radius: 15px;
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