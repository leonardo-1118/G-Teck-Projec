import { Container } from '../ExButton/styles'
import { useEffect, useRef } from 'react'
import { BsList } from "react-icons/bs";

function ExButton({onClick}) {

    

    return (
        <Container>
            <div className='menu'onClick={onClick}>
               <BsList />
            </div>
        </Container>
    )
}

export default ExButton