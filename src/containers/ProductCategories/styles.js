import styled from "styled-components";

export const Container = styled.div`

color: #0a122a;
font-family: "Lexend", sans-serif;


img {
    width: 250px;
}

a:visited {
    color: #0a122a;
}

section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    background-color: #F4F7F9;
    padding: 30px 30px 20px;
}

p {
    font-size: 20px;
    font-weight: 700;
    max-width: 230px;
    text-align: center;
}

.menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;
    padding: 10px 0 30px;
    background-color: #fff;
    border-radius: 15px;
}

h3 {
    font-size: 55px;
    font-weight: 800;
    margin: 100px 0 50px;
    text-align: center;
    padding: 0 30px;
}

span {
    height: 50px;
    width: 300px;
    background-color: #ba0000;
    margin-bottom: 100px;
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