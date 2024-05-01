import {Route, Routes} from 'react-router-dom'
import Home from '../containers/Home/index.jsx'
import DefaultLayout from '../layout/DefaultLeyout.jsx'
import Products from '../containers/Products/index.jsx'

function Router() {

    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
            </Route>
        </Routes>
    )
}

export default Router