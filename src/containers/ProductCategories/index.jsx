import { Container } from './styles'
import { Link, useLocation } from 'react-router-dom'

function ProductCategories() {

    const { pathname } = useLocation()

    return (
        <Container>
           <h3>Selecione a categoria desejada</h3>

            <section>
                <Link to={'/products/luva'}>
                    <div isActive={pathname.includes('luva')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/12/LUVA.webp' alt='Luva-de-procedimento' />
                        <p>Luvas de procedimento</p>
                    </div>
                </Link>

                <Link to={'/products/estetoscopio'}>
                    <div isActive={pathname.includes('estetoscopio')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/12/SIMPLES.webp' alt='Estetoscópio' />
                        <p>Estetoscópios</p>
                    </div>
                </Link>

                <Link to={'/products/m.a.p.a'}>
                    <div isActive={pathname.includes('m.a.p.a')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/01/MAPA_1.webp' alt='M.A.P.A' />
                        <p>M.A.P.A</p>
                    </div>
                </Link>

                <Link to={'/products/mascara'}>
                    <div isActive={pathname.includes('mascara')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/12/MASCARA_1.webp' alt='Máscara cirúrgica' />
                        <p>Máscara cirúrgica</p>
                    </div>
                </Link>
                <Link to={'/products/garrote'}>
                    <div isActive={pathname.includes('garrote')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/12/GARROTE_1.webp' alt='Garrote' />
                        <p>Garrote</p>
                    </div>
                </Link>
                
                <Link to={'/products/espaçador'}>
                    <div isActive={pathname.includes('espaçador')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/01/ESPACADOR_PVC_3.webp' alt='Espaçadores' />
                        <p>Espaçadores</p>
                    </div>
                </Link>

                <Link to={'/products/kit-academico'}>
                    <div isActive={pathname.includes('kit-academico')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/12/KIT_2.webp' alt='Kit acadêmico' />
                        <p>Kit acadêmico</p>
                    </div>
                </Link>

                <div className="menu-item">
                    <img src='https://accumed.com.br/wp-content/uploads/2023/01/ESFIGMOMANOMETRO_HOSPITALAR_2.webp' alt='Esfigmomanômetros' />
                    <p>Esfigmomanômetros</p>
                </div>

                <div className="menu-item">
                    <img src='https://accumed.com.br/wp-content/uploads/2023/12/BABY_DOPPLER_1.webp' alt='Monitor pré-natal' />
                    <p>Monitor pré-natal</p>
                </div>

                <div className="menu-item">
                    <img src='https://accumed.com.br/wp-content/uploads/2023/12/OLED_1.webp' alt='Oximetros' />
                    <p>Oximetros</p>
                </div>

                <div className="menu-item">
                    <img src='https://accumed.com.br/wp-content/uploads/2023/12/DUAL.webp' alt='Umidificadores de ar' />
                    <p>Umidificadores de ar</p>
                </div>

                <div className="menu-item">
                    <img src='https://accumed.com.br/wp-content/uploads/2023/01/GLASS_11_1.webp' alt='Balanças' />
                    <p>Balanças</p>
                </div>

                <div className="menu-item">
                    <img src='https://accumed.com.br/wp-content/uploads/2023/12/TENS_4.webp' alt='Tens' />
                    <p>Tens</p>
                </div>

                <div className="menu-item">
                    <img src='https://accumed.com.br/wp-content/uploads/2023/12/SMART_LCD_2.webp' alt='Bombas de leite materno' />
                    <p>Bombas de leite materno</p>
                </div>

                <div className="menu-item">
                    <img src='https://accumed.com.br/wp-content/uploads/2023/11/BPGP480BT_2.webp' alt='Aparelhos de pressão' />
                    <p>Aparelhos de pressão</p>
                </div>

                <div className="menu-item">
                    <img src='https://accumed.com.br/wp-content/uploads/2023/12/AUTOTESTE_2.webp' alt='Autoteste para Covid-19' />
                    <p>Autoteste para Covid-19</p>
                </div>

                <div className="menu-item">
                    <img src='https://accumed.com.br/wp-content/uploads/2023/12/GO_3.webp' alt='Termômetros' />
                    <p>Termômetros</p>
                </div>

                <div className="menu-item">
                    <img  src='https://accumed.com.br/wp-content/uploads/2023/11/LITE_SMART_1.webp' alt='Linha diabetes'/>
                    <p>Linha diabetes</p>
                </div>

                <div className="menu-item">
                    <img src='https://accumed.com.br/wp-content/uploads/2023/12/IR_1.webp' alt='Massageadores' />
                    <p>Massageadores</p>
                </div>

                <div className="menu-item">
                    <img src='https://accumed.com.br/wp-content/uploads/2023/11/NEBMESH2_4.webp' alt='Inaladores e nebulizadores' />
                    <p>Inaladores e nebulizadores</p>
                </div>
            </section>
        </Container>
    )
}

export default ProductCategories