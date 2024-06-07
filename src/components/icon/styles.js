import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

export const StyledIoIosArrowForward = styled(IoIosArrowForward)`
color: #ffff;
background-color: #C3161C;
width: 50px;
height: 50px;
padding: 5px;
border-radius: 50%;
margin-left: 20px;
cursor: pointer;
transition: background-color 0.5s ease;

&:hover {
    background-color: black;
}

@media (max-width: 700px) {
    width: 45px;
    height: 45px;
    margin-left: 15px;
    margin-top: 5px;
}

@media (max-width: 400px) {
    width: 40px;
    height: 40px;
    margin-left: 10px;
}
`
