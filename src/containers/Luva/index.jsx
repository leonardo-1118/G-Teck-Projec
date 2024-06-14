import { Container } from '../ProductCategories/styles'

function Luva({showHeading = true}) {

    return(
        <Container>
            {showHeading && <h3>Luvas de procedimento</h3>}

            <section>
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/LUVA.webp" alt="Luvas-deprocedimento" />
                    <p>Luvas de procedimento com pó G-Tech</p>
                </div>
            </section>
        </Container>
    )
}

export default Luva