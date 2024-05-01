import { Outlet } from 'react-router-dom'
import Header from '../components/Header/index'

function DefaultLayout() {

    return (
        <>
            <Header />
            <Outlet />  
        </>
    )
}

export default DefaultLayout