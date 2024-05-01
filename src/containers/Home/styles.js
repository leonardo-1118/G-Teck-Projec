import styled from 'styled-components'

export const Container = styled.div`

padding: 0 7% 0 7%;
max-width: 2100px;

@media (max-width: 1000px) {
    padding: 0 4% 0 4%;
}
`

export const Introduction = styled.div`

padding-top: 50px;
display: flex;
max-width: 2100px;

img {
    width: 45vw;
    min-width: 300px;
    max-width: 500px;
}

.accumed-introduction {
    color: #ffffff;
    background-color: #C3161C;
    width: 167px;
    height: 28.9px;
    font-size: 13px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}

h2 {
    color: #0a122a;
    font-family: "Lexend", sans-serif;
    font-size: 50px;
    font-weight: 700;
    line-height: 55px;
    margin: 20px 0 20px;
}

p {
    color: #7d868d;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    text-align: left;
}

.paragraph-introduction {
    max-width: 480px;
    justify-content: center;
}

.text-introduction {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    max-width: 600px;
    margin-bottom: 220px;
}

@media (max-width: 1000px) {

    margin: 50px 5% 0 0;
    padding: 0;
    
    h2 {
        font-size: 40px;
        line-height: 40px;
    }

    .text-introduction {
        min-width: 50%;
        margin-left: 3%;
        width: 50%;

    }

    img {
        width: 100%;
    }
}

@media (max-width: 880px) {

    h2 {
        font-size: 34px;
        line-height: 35px;
    }
}


@media (max-width: 770px) {

    margin-top: 15px;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    text-align: center;

    .text-introduction {
        align-items: center;
        width: 100%;
        max-width: 100%;
        margin-bottom: 0;

    }

    h2 {
        font-size: 24px;
        line-height: 25px;
        margin-bottom: 20px;
    }

    .paragraph-introduction {
        max-width: 100%;
    }

    p {
        text-align: center;
    }

    img {
        align-items: center;
        margin-top: 30px;
    }
}
`

export const MainLink = styled.div`

display: flex;
justify-content: center;

a {
    font-family: "Lexend", sans-serif;
    font-size: 30px;
    color: #0a122a;
    font-weight: 700;
    line-height: 30px;
    cursor: pointer; 
    text-align: end;
}
`