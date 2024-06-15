import { Container } from '../ProductCategories/styles'

function KitAcademico({showHeading = true}) {

    return(
        <Container>
            {showHeading && <h3>Kit Acadêmico</h3>}
            
            <section>
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/KIT_1.webp" alt="kit-academico-foto" />
                    <p>Kit acadêmico Premium</p>
                </div>
            </section>
        </Container>
    )
}

export default KitAcademico