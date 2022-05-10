import { Login } from "@mui/icons-material"
import { Routes, Route, Link } from "react-router-dom"
import AlertDialog from "./components/Alert"
import NavBar from "./components/navbar"
import LoginPage from "./pages/login"
import Pedidos from "./pages/pedidos"

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                    
                <Route path="/home" element={<Pedidos />}/>
                <Route path="/alert" element={<AlertDialog />}/>
            </Routes>
        </>
    )
}

export default Routers