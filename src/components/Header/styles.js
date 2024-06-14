import styled from "styled-components";

export const Container = styled.div`
width: 100%;
background-color: #ba0000;
display: flex;
justify-content: space-between;
align-items: center;

img {
    width: 350px;
    border-radius: 85px;
    margin: 15px 0px 15px 3vw;
}

.exButton {
    display: flex;
    align-items: center;
}

@media (max-width: 1000px) {
    img {
        width: 47%;
    }
}

@media (max-width: 500px) {
    img {
        width: 57%;
    }
}
`