import { Container } from './styles'
import ExButton from '../ExButton'
import logoAccumed from '../../assets/accumedLogo.png'
import Menu from '../Menu/index'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    
    const { pathname } = useLocation()
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
                <Link to={'/'}>
                    <img isActive={pathname.includes('/')} src={logoAccumed} alt='logo-Accumed-Glicomed' />
                </Link>

                <ExButton onClick={handleButtonClick} className="exButton" />
            </Container>
            {showMenu && <Menu menuTransition={showMenu} closeMenu={closeMenu} />}
        </>
    )
}

export default Header