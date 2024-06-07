import { Container, Introduction, MainLink } from './styles'
import Menu from '../../components/Menu' //colocar menu      colocar link do MainLink
import familyPhoto from '../../assets/familia-home.webp'
import Slot from '../../components/Slot'
import { StyledIoIosArrowForward } from '../../components/icon/styles'
import Footer from '../../components/Footer/Footer'

function Home () {

    return (
        <>
            <Container>
                <Introduction>
                    <div className="text-introduction">
                        <p className="accumed-introduction">ACCUMED-GLICOMED</p>
                        <h2>Líder brasileira em produtos para a saúde e o bem-estar</h2>
                        <p className="paragraph-introduction">Há mais de 30 anos — a partir de nossas marcas </p>
                        <p className="paragraph-introduction"><strong>G-Tech</strong> e <strong>Premium</strong> — desenvolvemos, fabricamos e distribuímos equipamentos de saúde e bem-estar para cuidar de você e de sua família em todos os momentos.</p>
                    </div>
                    <div>
                        <img src={familyPhoto} alt="Foto-de-uma-familia-sorrindo" />
                    </div>
                </Introduction>
                <Slot />
                <MainLink>
                    <a href="https://api.whatsapp.com/send?phone=5511933264738&text=Ol%C3%A1,%20estou%20interessado%20nos%20produtos%20da%20Accumed%20Glicomed!">Fale com um representante<br />  agora mesmo</a> 
                    <a href='https://api.whatsapp.com/send?phone=5511933264738&text=Ol%C3%A1,%20estou%20interessado%20nos%20produtos%20da%20Accumed%20Glicomed!'><StyledIoIosArrowForward /></a>
                </MainLink>
            </Container>
            <Footer />
        </>
    )
}

export default Home