import styled from "styled-components"

export const Container = styled.div`

position: fixed;
right: ${props => (props.menuTransition? '0' : '-100%')};
z-index: 2;
list-style-type: none;
font-family: "Lexend", sans-serif;
font-weight: 600;
font-style: normal;
display: flex;
justify-content: end;
margin-top: -70px;

nav {
    border-radius: 20px 15px 20px 15px;
    background-color: #ba0000;
    justify-content: end;
    flex-direction: column;
    width: 350px;
    max-width: 70%;
    min-width: 200px;
    padding: 0 0 15px 1%;
}



.close-button {
    padding: 20px 20px 0;
    margin-bottom: 15px;
    display: flex;
    justify-content: end;
    color: #fff;
    font-size: 35px;
}

.ico-close {
    cursor: pointer;
}

li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    height: 70px;
    color: #fff;
    font-size: 20px;
    padding-left: 20px;
    border-radius: 35px 0 0 35px;
    transition: background-color 0.5s ease;
}

.ico-menu {
    margin-right: 10px;
    cursor: pointer;
}

li:hover {
    background-color: #fff;
    color: #ba0000;
}

@media (max-width: 750px) {

    li {
        font-size: 15px;
    }
}
`