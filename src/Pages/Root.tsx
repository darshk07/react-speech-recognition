import { Header } from "../Components/Header"
import { Outlet } from "react-router-dom"
import "./Root.scss"

export const RootLayout = () => {
    return (
        <div className="main-container">
            <div className="main-container__header">
                <Header />
            </div>
            <div className="main-container__hero">
                <Outlet />
            </div>
        </div>
    )
}