import { Container } from '../ProductCategories/styles'

function Termometros({showHeading = true}) {

    return(

        <Container>
            {showHeading && <h3>Termometros</h3>}
            
            <section>
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/11/TERMOMETRO.webp" alt="termometro-foto" />
                    <p>Termômetro digital G-Tech</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/ICOLOR_1.webp" alt="termometro-foto" />
                    <p>Termômetro digital iColor G-Tech</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/TERMOMETRO_FLEXIVEL.webp" alt="termometro-foto" />
                    <p>Termômetro digital de ponta flexível G-Tech</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/FUN_1.webp" alt="termometro-foto" />
                    <p>Termômetro digital de ponta flexível G-Tech Fun</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/SEM_CONTATO_1.webp" alt="termometro-foto" />
                    <p>Termômetro digital infravermelho sem contato G-Tech</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/GO_1.webp" alt="termometro-foto" />
                    <p>Termômetro infravermelho ultracompacto de testa G-Tech Go!</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/TERMOMETRO_PREMIUM.webp" alt="termometro-foto" />
                    <p>Termômetro digital sem contato Premium</p>
                </div>
            </section>
        </Container>
    )
}

export default Termometros