import { Container } from './styles'
import ExButton from '../ExButton'
import logoAccumed from '../../assets/accumedLogo.png'

function Header() {

    return (
        <Container>
            <img src={logoAccumed} />
            <ExButton className="exButton" />
        </Container>
    )
}

export default Header