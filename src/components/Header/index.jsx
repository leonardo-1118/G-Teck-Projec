import { Container } from './styles'
import ExButton from '../ExButton'
import logoAccumed from '../../assets/accumedLogo.png'
import Menu from '../Menu/index'
import { useState } from 'react'

function Header() {

    const [showMenu, setShowMenu] = useState(false)
    
    const handleButtonClick = () => {
        setShowMenu(!showMenu)
    }

    const closeMenu = () => {
        setShowMenu(false)
    }

    return (
        <>
            <Container>
                <img src={logoAccumed} alt='logo-Accumed-Glicomed' />
                <ExButton onClick={handleButtonClick} className="exButton" />
            </Container>
            {showMenu && <Menu menuTransition={showMenu} closeMenu={closeMenu} />}
        </>
    )
}

export default Header