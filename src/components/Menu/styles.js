import styled from "styled-components"

export const Container = styled.div`

z-index: 2;
list-style-type: none;
font-family: "Roboto", sans-serif;
font-weight: 600;
font-style: normal;
display: flex;
justify-content: end;
font-size: large;

nav {
    background-color: blue;
    justify-content: end;
    flex-direction: column;
    width: 30%;
    max-width: 250px;
    min-width: 27%;
    padding: 10px 0 10px 3%;
}

li {
    cursor: pointer;
}
`