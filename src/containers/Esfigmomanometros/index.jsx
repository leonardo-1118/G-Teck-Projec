import { Container } from '../ProductCategories/styles'

function Esfigmomanometros({showHeading = true}) {

    return(
        <Container>
            {showHeading && <h3>Esfigmomanômetros</h3>}
            
            <section>
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/01/ESFIGMOMANOMETRO_1.webp" alt="esfigmomanometros-foto" />
                    <p>Esfigmomanômetro aneroide Premium</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/01/ESFIGMOMANOMETRO_ESTETOSCOPIO.webp" alt="esfigmomanometros-foto" />
                    <p>Esfigmomanômetro aneroide com estetoscópio Premium</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/01/ESFIGMOMANOMETRO_HOSPITALAR_1.webp" alt="esfigmomanometros-foto" />
                    <p>Esfigmomanômetro hospitalar de mesa, parede ou rodízios Premium</p>
                </div>
            </section>
        </Container>
    )
}

export default Esfigmomanometros