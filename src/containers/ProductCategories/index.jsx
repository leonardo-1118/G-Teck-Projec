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
                
                <Link to={'/products/esfigmomanometros'}>
                    <div isActive={pathname.includes('esfigmomanometros')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/01/ESFIGMOMANOMETRO_HOSPITALAR_2.webp' alt='Esfigmomanômetros' />
                        <p>Esfigmomanômetros</p>
                    </div>
                </Link>

                <Link to={'/products/monitor-pre-natal'}>
                    <div isActive={pathname.includes('monitor-pre-natal')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/12/BABY_DOPPLER_1.webp' alt='Monitor pré-natal' />
                        <p>Monitor pré-natal</p>
                    </div>
                </Link>

                <Link to={'/products/oximetros'}>
                    <div isActive={pathname.includes('oximetros')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/12/OLED_1.webp' alt='Oximetros' />
                        <p>Oximetros</p>
                    </div>
                </Link>

                <Link to={'/products/umidificadores'}>
                    <div isActive={pathname.includes('umidificadores')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/12/DUAL.webp' alt='Umidificadores de ar' />
                        <p>Umidificadores de ar</p>
                    </div>
                </Link>

                <Link to={'/products/balanças'}>
                    <div isActive={pathname.includes('balanças')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/01/GLASS_11_1.webp' alt='Balanças' />
                        <p>Balanças</p>
                    </div>
                </Link>

                <Link to={'/products/tens'}>
                    <div isActive={pathname.includes('tens')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/12/TENS_4.webp' alt='Tens' />
                        <p>Tens</p>
                    </div>
                </Link>

                <Link to={'/products/bomba-de-leite-materno'}>
                    <div isActive={pathname.includes('bomba-de-leite-materno')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/12/SMART_LCD_2.webp' alt='Bombas de leite materno' />
                        <p>Bombas de leite materno</p>
                    </div>
                </Link>

                <Link to={'/products/aparelhos-de-pressao'}>
                    <div isActive={pathname.includes('aparelhos-de-pressao')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/11/BPGP480BT_2.webp' alt='Aparelhos de pressão' />
                        <p>Aparelhos de pressão</p>
                    </div>
                </Link>

                <Link to={'/products/autoteste-para-covid-19'}>
                    <div isActive={pathname.includes('autoteste-para-covid-19')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/12/AUTOTESTE_2.webp' alt='Autoteste para Covid-19' />
                        <p>Autoteste para Covid-19</p>
                    </div>
                </Link>

                <Link to={'/products/termometros'}>
                    <div isActive={pathname.includes('termometros')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/12/ICOLOR_1.webp' alt='Termômetros' />
                        <p>Termômetros</p>
                    </div>
                </Link>

                <Link to={'/products/linha-diabetes'}>
                    <div className="menu-item">
                        <img  src='https://accumed.com.br/wp-content/uploads/2023/11/LITE_SMART_1.webp' alt='Linha diabetes'/>
                        <p>Linha diabetes</p>
                    </div>
                </Link>

                <Link to={'/products/massageadores'}>
                    <div isActive={pathname.includes('massageadores')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/12/IR_1.webp' alt='Massageadores' />
                        <p>Massageadores</p>
                    </div>
                </Link>

                <Link to={'/products/inaladores-e-nebulizadores'}>
                    <div isActive={pathname.includes('inaladores-e-nebulizadores')} className="menu-item">
                        <img src='https://accumed.com.br/wp-content/uploads/2023/11/NEBMESH2_4.webp' alt='Inaladores e nebulizadores' />
                        <p>Inaladores e nebulizadores</p>
                    </div>
                </Link>
            </section>
        </Container>
    )
}

export default ProductCategories