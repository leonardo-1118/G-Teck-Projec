import {Route, Routes} from 'react-router-dom'
import Home from '../containers/Home/index.jsx'
import DefaultLayout from '../layout/DefaultLeyout.jsx'
import Products from '../containers/Products/index.jsx'
import Contact from '../containers/Contact/index.jsx'
import Table from '../containers/Table/index.jsx'

function Router() {

    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/contactUs' element={<Contact />} />
                <Route path='/table' element={<Table />} />
                <Route path='/products' element={<Products />} />
            </Route>
        </Routes>
    )
}

export default Router