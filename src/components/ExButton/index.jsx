import { Container } from '../ExButton/styles'
import { useEffect, useRef } from 'react'

function ExButton() {

    const menuRef = useRef(null)

    useEffect(() => {
        const menu = menuRef.current

        const handleMenuClick = () => {
            menu.classList.toggle('active')
        }

        menu.addEventListener('click', handleMenuClick)

        return () => {
            menu.removeEventListener('click', handleMenuClick)
        }
    }, [])

    return (
        <Container>
            <div ref={menuRef} className='menu'>
                <nav>
                    <span></span>
                    <span></span>
                    <span></span>
                </nav>
            </div>
        </Container>
    )
}

export default ExButton