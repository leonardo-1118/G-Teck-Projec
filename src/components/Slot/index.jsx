import { Container } from './styles'

function Slot() {

    return (
        <Container>
            <div className='slot-one slot'>
                <img src='https://accumed.com.br/wp-content/uploads/2023/11/ICON_MAE_1.svg' 
                className='first-image'
                alt='logo-de-um-coração' />
                <h3>Cuidados <br/> pessoais</h3>
                <div className='line'></div>
                <p>Cuide com praticidade, confiabilidade e segurança da sua saúde em qualquer lugar ou momento do seu dia</p>
            </div>

            <div className='slot-two slot'>
                <img src='https://accumed.com.br/wp-content/uploads/2023/11/ICON_SEGURANCA_1.svg' 
                className='second-image'
                alt='logo-de-um-escudo' />
                <h3>Facilidade e <br/> segurança</h3>
                <div className="line"></div> 
                <p>Nossos produtos são fáceis de transportar e manusear, garantindo o controle da sua saúde em qualquer ocasião</p>
            </div>

            <div className='slot-three slot'>
                <img src='https://accumed.com.br/wp-content/uploads/2023/11/ICON_CUIDADO_1.svg' 
                className='third-image'
                alt='logo-de-uma-estrela' />
                <h3>Certificação <br/>reconhecida</h3>
                <div className="line"></div>
                <p>Somos a empresa com o maior número de certificações de qualidade e regulação do segmento no Brasil</p>
            </div>

            <div className='slot-four slot'>
                <img src='https://accumed.com.br/wp-content/uploads/2023/11/ICON_PREMIO_1.svg' 
                className='forth-image'
                alt='logo-de-um-trofeu' />
                <h3>Suporte <br/> premiado</h3>
                <div className="line"></div>
                <p>Nosso suporte ao cliente possui o RA1000, selo de excelência em atendimento do ReclameAQUI</p>
            </div>
        </Container>
    )
}

export default Slot