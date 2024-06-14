import { Container } from './styles'
import Estetoscopio from '../Estetoscopio'
import Luva from '../Luva'
import Mapa from '../Mapa'
import Mascara from '../Mascara'
import Garrote from '../Garrote'
import Espaçador from '../Espaçador'
import KitAcademico from '../KitAcademico'



function Products() {

    return (
        <Container>
            <h3>Todos produtos</h3>
            
            <main>
                <Estetoscopio showHeading={false} />
                <Luva showHeading={false} />
                <Mapa showHeading={false} />
                <Mascara showHeading={false} />
                <Garrote showHeading={false} />
                <Espaçador showHeading={false} />
                <KitAcademico showHeading={false} />

            </main>
        </Container>
    )
}

export default Products