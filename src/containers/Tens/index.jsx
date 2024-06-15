import { Container } from '../ProductCategories/styles'

function Tens({showHeading = true}) {

    return(
        <Container>
            {showHeading && <h3>Tens</h3>}
            
            <section>
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/TENS_4.webp" alt="Tens-foto" />
                    <p>Eletroestimulador Tens G-Tech Alívio Já</p>
                </div>
            </section>
        </Container>
    )
}

export default Tens