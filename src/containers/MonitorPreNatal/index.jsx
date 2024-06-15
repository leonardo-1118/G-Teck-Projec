import { Container } from '../ProductCategories/styles'

function MonitorPreNatal({showHeading = true}) {

    return(
        <Container>
            {showHeading && <h3>Monitor pré-natal</h3>}
            
            <section>
                <div className='menu-item'>
                    <img src="https://accumed.com.br/wp-content/uploads/2023/12/BABY_DOPPLER_2.webp" alt="monitor-pre-natal-foto" />
                    <p>Monitor pré-natal de batimentos cardíacos G-Tech • Baby Doppler</p>
                </div>
            </section>
        </Container>
    )
}

export default MonitorPreNatal