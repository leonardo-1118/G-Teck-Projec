import styled from "styled-components"

export const Container = styled.div`

z-index: 2;
display: flex;
width: 100%;
margin-top: -190px;
gap: 35px;
margin-bottom: 50px;

.line {
    width: 40px;
    height: 1.1px;
    background-color: #c3161c;
    margin: 25px 0;
}

.slot {
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, .25);
    border-radius: 10px;
    background-color: #ffff;
    padding: 3vw;
}

img {
    width: 140px;
    margin-bottom: 10px;
}

h3 {
    font-family: "Poppins", sans-serif;
    color: #0a122a;
    font-weight: 400;
    font-size: 21px;
    line-height: 28px;
}

p {
    font-family: "Lexend", sans-serif;
    color: #7d868d;
    line-height: 28px;
}

@media (max-width: 1080px) {

    gap: 10px;

    img {
        width: 100px;
    }

    h3 {
        font-size: 16px;
        line-height: 20px;
    }

    .slot {
        padding: 2vw;
    }

    p {
        font-size: 15px;
    }
}

@media (max-width: 770px) {

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 35px;

    .slot {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 30px;
    }
}
`