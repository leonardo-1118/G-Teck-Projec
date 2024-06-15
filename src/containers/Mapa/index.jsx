import { Container } from '../ProductCategories/styles'

function Mapa({showHeading = true}) {

    return(
        <Container>
            {showHeading && <h3>M.A.P.A</h3>}
            
            <section>
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/01/MAPA_1.webp" alt="m.a.p.a-foto" />
                    <p>M.A.P.A. G-Tech <br /> BP3MZ1</p>
                </div>
            </section>
        </Container>
    )
}
export default Mapa