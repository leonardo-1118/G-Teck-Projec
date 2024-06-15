import { Container } from '../ProductCategories/styles'

function Balanças({showHeading = true}) {

    return(
        <Container>
            {showHeading && <h3>Balanças</h3>}
            
            <section>
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/01/GLASS_10.webp" alt="balanças-foto" />
                    <p>Balança digital Glass 10 G-Tech</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/01/GLASS_11_1.webp" alt="balanças-foto" />
                    <p>Balança digital Glass 11 G-Tech</p>
                </div>
            
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/01/GLASS_200.webp" alt="balanças-foto" />
                    <p>Balança digital Glass 200 G-Tech</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/01/GLASS_PRO.webp" alt="balanças-foto" />
                    <p>Balança digital com bioimpedância Glass Pro G-Tech</p>
                </div>

                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/01/GLASS_7FW.webp" alt="balanças-foto" />
                    <p>Balança digital com bioimpedância Glass 7FW G-Tech</p>
                </div>
            </section>
        </Container> 
    )
}

export default Balanças 