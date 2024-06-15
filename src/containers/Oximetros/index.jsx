import { Container } from '../ProductCategories/styles'

function Oximetros({showHeading = true}) {

    return(
        <Container>
            {showHeading && <h3>Oxímetros</h3>}
            
            <section>
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/OLED_2.webp" alt="oximetro-foto" />
                    <p>Oxímetro modelo OLED G-Tech</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/LED_2.webp" alt="oximetro-foto" />
                    <p>Oxímetro modelo LED G-Tech</p>
                </div>
            
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/PEDIATRICO_2.png" alt="oximetro-foto" />
                    <p>Oxímetro Pediátrico G-Tech</p>
                </div>
            </section>
        </Container>
    )
}

export default Oximetros