import { Container } from './styles'
import Estetoscopio from '../Estetoscopio'
import Luva from '../Luva'
import Mapa from '../Mapa'
import Mascara from '../Mascara'
import Garrote from '../Garrote'
import Espaçador from '../Espaçador'
import KitAcademico from '../KitAcademico'
import Esfigmomanometros from '../Esfigmomanometros'
import BombaDeLeiteMaterno from '../BombaLeiteMaterno'
import MonitorPreNatal from '../MonitorPreNatal'
import Umidificadores from '../Umidificadores'
import Termometros from '../Termometros'
import Oximetros from '../Oximetros'
import Balanças from '../Balanças'
import Tens from '../Tens'



function Products() {

    return (
        <Container>
            <h3>Todos produtos</h3>
            
            <main>
                <Estetoscopio showHeading={false} />
                <Umidificadores showHeading={false} />
                <Termometros showHeading={false} />
                <BombaDeLeiteMaterno showHeading={false} />
                <Esfigmomanometros showHeading={false} />
                <Oximetros showHeading={false} />
                <Luva showHeading={false} />
                <Mascara showHeading={false} />
                <Mapa showHeading={false} />
                <MonitorPreNatal showHeading={false} />
                <Espaçador showHeading={false} />
                <KitAcademico showHeading={false} />
                <Garrote showHeading={false} />
                <Tens showHeading={false} />
                <Balanças showHeading={false} />
            </main>
        </Container>
    )
}

export default Products