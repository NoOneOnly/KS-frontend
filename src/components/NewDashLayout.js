import { Outlet } from 'react-router-dom'



const NewDashLayout = () => {
    return (
        <>


            <div className="dash-container">
                <Outlet />
            </div>


        </>
    )
}

export default NewDashLayout