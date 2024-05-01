import styled from 'styled-components'

export const Container = styled.div`

z-index: 10;
margin-right: 3vw;
div:hover {
    cursor: pointer;
}

nav {
    background-color: #232530;
}

.menu {
    height: 30px;
    width: 30px;
    position: relative;
}

.menu span {
    height: 3.2px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: .3s ease;
}

.menu span:nth-child(1) {
    top: 25%;
}

.menu span:nth-child(3) {
    top: 75%;
}

.menu.active span:nth-child(3) {
    top: 50%;
    transform: translate(-50%, -50%)
    rotate(-45deg);
}

.menu.active span:nth-child(2) {
    opacity: 0;
}

.menu.active span:nth-child(1) {
    top: 50%;
    transform: translate(-50%, -50%)
    rotate(45deg);
}

@media (min-width: 500px) {

.menu {
    height: 40px;
    width: 40px;
    position: relative;
}
}

`