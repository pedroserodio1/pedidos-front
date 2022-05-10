import { useEffect, useState } from "react";
import NavBar from "../../components/navbar";
import Table from "../../components/Tables";
import getOrder from "../../services/getOrders";

const Pedidos = () => {

    

    return (
        <>  
            <NavBar/>
            <Table/>
        </>
    )
}

export default Pedidos;