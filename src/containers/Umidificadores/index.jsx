import { Container } from '../ProductCategories/styles'

function Umidificadores({showHeading = true}) {

    return(
        <Container>
            {showHeading && <h3>Umidificadores de ar</h3>}
            
            <section>
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/HM.webp" alt="umidificador-foto" />
                    <p>Umidificador de ar ultrassônico Allergy Free HM G-Tech</p>
                </div>
        
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/DUAL.webp" alt="umidificador-foto" />
                    <p>Umidificador de ar ultrassônico Allergy Free Dual G-Tech</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/TIMER.webp" alt="umidificador-foto" />
                    <p>Umidificador de ar ultrassônico com ionizador Allergy Free Timer G-Tech</p>
                </div>
            
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/FILTER.webp" alt="umidificador-foto" />
                    <p>Umidificador de ar ultrassônico Allergy Free Filter 2 G-Tech</p>
                </div>
            </section>
        </Container>
    )
}

export default Umidificadores