import { Container } from '../ProductCategories/styles'

function Garrote({showHeading = true}) {

    return(
        <Container>
            {showHeading && <h3>Espaçadores</h3>}
            
            <section>
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/01/ESPACADOR_1.webp" alt="espaçador-foto" />
                    <p>Espaçador para aerossol G-Tech Clear</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/01/ESPACADOR_PVC_1.webp" alt="espaçador-foto" />
                    <p>Espaçador para aerossol em PVC G-Tech Clear</p>
                </div>
            </section>
        </Container>
    )
}



export default Garrote