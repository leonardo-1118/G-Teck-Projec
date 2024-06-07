import styled from "styled-components"

export const Container = styled.footer`

background-color: #0a122a;
color: white;
padding: 0 40px 70px;

.contacts {
    display: flex;
    justify-content: center;
    gap: 5%;
    margin-top: 100px;
}


.image-contact {
    width: 120px; 
    cursor: pointer;
}

.whatsapp {
  background-image: url('https://accumed.com.br/wp-content/uploads/2023/11/ICON_WHATSAPP_A.svg');
  transition: background-image 0.5s; 
}

.whatsapp:hover {
  background-image: url('https://accumed.com.br/wp-content/uploads/2023/11/ICON_WHATSAPP_B.svg');
}

.telefone {
    background-image: url('https://accumed.com.br/wp-content/uploads/2023/11/ICON_FONE_A.svg');
    transition: background-image 0.5s;
}

.telefone:hover {
    background-image: url('https://accumed.com.br/wp-content/uploads/2023/11/ICON_FONE_B.svg');
}

.square {
    cursor: pointer;
    width: 120px;
    height: 120px;
    border: 6px solid #ffff;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center
}

.instagram-logo {
    font-size: 70px;
    transition: transform 0.3s ease;
}

.instagram-logo:hover {
    transform: rotate(20deg);
}

h3 {
    font-family: "Lexend", sans-serif;
    font-size: 50px;
}

h6 {
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
    font-family: "Poppins", sans-serif;
}

section {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 15px;
    padding-top: 70px;
}

.colum {
    background-color: #253258;
    width: 1px;
    height: 310px;
    }

.box {
    width: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

a {
    color: #fff;
    background-color: #C3161C;
    width: 100%;
    font-family: "Lexend", sans-serif;
    padding: 15px 5px;
    border-radius: 10px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s ease;
    max-width: 250px;
}

p {
    font-family: "Lexend", sans-serif;
    font-size: 16px;
    color: #7d868d;
    text-align: center;
}

.plus {
    font-size: 25px;
    font-weight: 200px;
    margin-left: 15px;
}

a:hover {
    color: red;
    background-color: #fff;
}

@media (max-width: 900px) {

    h3 {
        font-size: 36px;
    }
}

@media (max-width: 700px) {
    
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 24px;
    }

    .contacts {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        gap: 30px;
    }

    .colum {
        height: 1px;
        width: 90%;
    }

    .box {
        width: 90%;
    }
}
`