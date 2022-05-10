import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import getOrder from '../../services/getOrders';
import getProduct from '../../services/getProduct';
import getUser from '../../services/getUser';

interface IOrder {
    id: string;
    productsId: string[];
    client: string;
    status: string;
    observation: string;
    userChange: string;
    edit: string;
}
let token = localStorage.getItem('token');

const Table = () => {

    const [orders, setOrders] = useState<IOrder[]>([{
        id: 'string',
        productsId: [],
        client: 'string;',
        status: 'string;',
        observation: 'string;',
        userChange: 'tring',
        edit: '✍️'
    }]);

    useEffect(() => {

        getOrder(token).then((response) => {
            setOrders(response)
        })

    }, [])


    useEffect(() => {

        orders.map(async (order) => {
            if (order.userChange !== 'tring') {
                await getUser(token, order.userChange).then((response) => {
                    order.userChange = response.name;
                });
            }

        })


        
        orders.map(async (order) => {
                order.productsId.map(async (productId) => {
                    await getProduct(token, productId).then((response) => {
                        if(productId === response.id){
                            order.productsId[order.productsId.indexOf(productId)] = `${response.name} - R$${response.price}`;
                        }
                    }).catch((err) => {
                        console.log(err.response.data.message)
                    })
                })
        })

    }, [orders])




    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'productsId', headerName: 'Produtos', width: 450 },
        { field: 'client', headerName: 'Cliente', width: 130 },
        {
            field: 'status',
            headerName: 'Status',
            width: 130,
            editable: true,
            type: 'select'
        },
        {
            field: 'observation',
            headerName: 'Observaçoes',
            width: 350
        },
        {
            field: 'userChange',
            headerName: 'Usuario',
            width: 130
        },
        
    ];

    const rows = [...orders];

    return (
        <div style={{ height: 623, width: '100%' }}>
            {<DataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[20]}
                onCellEditStop={(e) =>{
                    console.log(e.rowNode)
                }}
                checkboxSelection
            />}
        </div>
    );

}

export default Table