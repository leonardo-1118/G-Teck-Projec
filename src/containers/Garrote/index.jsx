import { Container } from '../ProductCategories/styles'

function Garrote({showHeading = true}) {

    return(
        <Container>
            {showHeading && <h3>Garrote</h3>}
            
            <section>
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/GARROTE_1.webp" alt="garrote-foto" />
                    <p>Garrote Premium</p>
                </div>
            </section>
        </Container>
    )
}

export default Garrote