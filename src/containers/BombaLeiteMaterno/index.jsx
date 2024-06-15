import { Container } from '../ProductCategories/styles'

function BombaDeLeiteMaterno({showHeading = true}) {

    return(
        <Container>
            {showHeading && <h3>Bombas de leite</h3>}
            
            <section>
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/SMART.webp" alt="Bomba-de-leite-materno-foto" />
                    <p>Bomba tira-leite materno automática Smart G-Tech</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/ELETRICA.webp" alt="Bomba-de-leite-materno-foto" />
                    <p>Bomba tira-leite materno elétrica G-Tech</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/MANUAL.webp" alt="Bomba-de-leite-materno-foto" />
                    <p>Bomba tira-leite materno manual Confort G-Tech</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/MANUAL_COMFORT_1.webp" alt="Bomba-de-leite-materno-foto" />
                    <p>Bomba tira-leite materno manual Comfort II G-Tech</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/SMART_LCD_1.webp" alt="Bomba-de-leite-materno-foto" />
                    <p>Bomba tira-leite materno automática Smart LCD G-Tech</p>
                </div>
            </section>
        </Container>
    )
}

export default BombaDeLeiteMaterno