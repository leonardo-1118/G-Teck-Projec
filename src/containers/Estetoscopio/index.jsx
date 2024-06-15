import { Container } from '../ProductCategories/styles'

function Estetoscopio({showHeading = true}) {

    return(
        <Container>
            {showHeading && <h3>Estetoscópio</h3>}
            
            <section>
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/RAPPAPORT_1.webp" alt="Estetoscópio-foto" />
                    <p>Estetoscópios Rappaport Premium</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/SIMPLES.webp" alt="Estetoscópio-foto" />
                    <p>Estetoscópio simples Premium</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/DUPLO.webp" alt="Estetoscópio-foto" />
                    <p>Estetoscópio duplo Premium</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/CARDIOLOGICO.webp" alt="Estetoscópio-foto" />
                    <p>Estetoscópio cardiológico profissional Premium</p>
                </div>
            </section>
        </Container>
    )
}

export default Estetoscopio