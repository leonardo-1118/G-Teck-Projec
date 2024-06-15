import {Route, Routes} from 'react-router-dom'
import Home from '../containers/Home/index.jsx'
import DefaultLayout from '../layout/DefaultLeyout.jsx'
import Products from '../containers/Products/index.jsx'
import Contact from '../containers/Contact/index.jsx'
import ProductCategories from '../containers/ProductCategories'
import Glove from '../containers/Luva/index.jsx'
import Estetoscopio from '../containers/Estetoscopio/index.jsx'
import Mapa from '../containers/Mapa/index.jsx'
import Mascara from '../containers/Mascara/index.jsx'
import Garrote from '../containers/Garrote/index.jsx'
import Espaçador from '../containers/Espaçador/index.jsx'
import KitAcademico from '../containers/KitAcademico/index.jsx'
import Esfigmomanometros from '../containers/Esfigmomanometros'
import MonitorPreNatal from '../containers/MonitorPreNatal/index.jsx'
import BombaDeLeiteMaterno from '../containers/BombaLeiteMaterno/index.jsx'
import Umidificadores from '../containers/Umidificadores/index.jsx'
import Oximetros from '../containers/Oximetros/index.jsx'
import Balanças from '../containers/Balanças/index.jsx'
import Tens from '../containers/Tens/index.jsx'
import Termometros from '../containers/Termometros/index.jsx'


function Router() {

    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/contactUs' element={<Contact />} />
                <Route path='/table' element={<ProductCategories />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/luva' element={<Glove />} />
                <Route path='/products/estetoscopio' element={<Estetoscopio />} />
                <Route path='/products/m.a.p.a' element={<Mapa />} />
                <Route path='/products/mascara' element={<Mascara />} />
                <Route path='/products/garrote' element={<Garrote />} />
                <Route path='/products/espaçador' element={<Espaçador />} />
                <Route path='/products/esfigmomanometros' element={<Esfigmomanometros />} />
                <Route path='/products/kit-academico' element={<KitAcademico />} />
                <Route path='/products/monitor-pre-natal' element={<MonitorPreNatal />} />
                <Route path='/products/umidificadores' element={<Umidificadores />} />
                <Route path='/products/oximetros' element={<Oximetros />} />
                <Route path='/products/balanças' element={<Balanças />} />
                <Route path='/products/tens' element={<Tens />} />
                <Route path='/products/bomba-de-leite-materno' element={<BombaDeLeiteMaterno />} />
                <Route path='/products/termometros' element={<Termometros />} />
            </Route>
        </Routes>
    )
}

export default Router