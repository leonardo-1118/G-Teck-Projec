import { Container } from '../ProductCategories/styles'

function Mascara({showHeading = true}) {

    return(
        <Container>
            {showHeading && <h3>Máscara cirúrgica</h3>}
            
            <section>
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/MASCARA_1.webp" alt="máscara-cirúrgica-foto" />
                    <p>Máscara cirúrgica <br />G-Tech</p>
                </div>
            </section>
        </Container>
    )
}



export default Mascara