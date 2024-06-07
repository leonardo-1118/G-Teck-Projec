import { Container } from './styles'
import { FaInstagram } from "react-icons/fa"

function Footer() {
    
    return (
        <Container>
            <section>
                <h6>ENTRE EM CONTATO</h6>
                <h3>Tem alguma dúvida? <br/> Fale com a gente!</h3> 
            </section>

            <div className='contacts'>

                <div className='box'>
                    <img src='https://accumed.com.br/wp-content/uploads/2023/11/ICON_WHATSAPP_A.svg' alt='whatsapp-logo' className='image-contact whatsapp' />
                    <p>Envie sua mensagem no WhatsApp e converse com um de nossos representantes</p>
                    <a href='https://api.whatsapp.com/send?phone=5511933264738&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20representante%20da%20%60Accumed%20Glicomed%60'>Nosso Whatsapp <span className='plus'>+</span></a>
                </div>

                <div className='colum'></div>

                <div className='box'>
                    <img src='https://accumed.com.br/wp-content/uploads/2023/11/ICON_FONE_A.svg' alt='telefone-logo' className='image-contact telefone' />
                    <p>Se preferir, fique à vontade para falar com nossos atendentes pelo telefone</p>
                    <a href='tel:5511933264738'>(11) 93326-4738 <span className='plus'>+</span></a>
                </div>

                <div className='colum'></div>

                <div className='box'>
                    <div className='square'>
                        <FaInstagram className='instagram-logo' />
                    </div>
                    <p>Siga a gente nas redes sociais para ficar por dentro das novidades e promoções</p>
                    <a href='https://www.instagram.com/gtech_valcimar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='blank'>Nosso Instagram <span className='plus'>+</span></a>
                </div>
            </div>
        </Container>
    )
}

export default Footer