import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import SeatPage from "../pages/SeatPage";
import PayPage from "../pages/PayPage";
import Header from "../components/Header";
function Routers() {
    return(
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route index element={<HomePage/>}></Route>
                <Route path="detail" element={<DetailPage/>}></Route>
                <Route path="seat" element={<SeatPage/>}></Route>
                <Route path="pay" element={<PayPage/>}></Route>
            </Route>
        </Routes>
    )
}

export default Routers;