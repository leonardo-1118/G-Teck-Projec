import { Container } from './styles'
import { FaHome } from 'react-icons/fa'
import { RiContactsFill, RiCloseLargeLine } from 'react-icons/ri'
import { BiBarChartSquare, BiSolidBasket } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'


function Menu({menuTransition, closeMenu}) {

    const { pathname } = useLocation()

    return (
        <Container menuTransition={menuTransition}>
            <nav className='navBar'>
                <div className='close-button'>
                    <RiCloseLargeLine onClick={closeMenu} className='ico-close' />
                </div>
                <section>
                    <ul>
                        <Link to={'/'}>
                            <li isActive={pathname === '/'}><FaHome className='ico-menu' />Home</li>
                        </Link>

                        <Link to={'/contactUs'}>
                            <li isActive={pathname.includes('contactUs')}><RiContactsFill className='ico-menu' />Contatos</li>
                        </Link>

                        <Link to={'/table'}>
                            <li isActive={pathname.includes === 'table'}><BiBarChartSquare className='ico-menu' /> Tabelas</li>
                        </Link>

                        <Link to={'/products'}>
                            <li isActive={pathname.includes('produtos')}> <BiSolidBasket className='ico-menu' /> Produtos</li>
                        </Link>
                    </ul>
                </section>
            </nav>
        </Container>
    )
}

export default Menu