import { Box, Grid } from "@mui/material"
import './AdminDashboard.css'
const Dashboard = () => {
    const dashItems = [
        {
            title: "Total User Register",
            count: 3,
            bgColor: 'blue' 
        },
        {
            title: "Total Property Register",
            count: 1,
            bgColor: 'skyblue'

        },
        {
            title: "Total Property Transfered",
            count: 0,
            bgColor: 'orange'

        },
    ]
    return (
        <div className="container">
            {
                dashItems.map(({ title, count, bgColor }) => (

                    <div style={{ backgroundColor: `${bgColor}` }} className="box">
                        <h1>{count}</h1>
                        <h1>{title}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default Dashboard