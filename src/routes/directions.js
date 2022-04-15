import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../views/main/index'
import PositivePage from '../views/positivePage/index'
import NegativePage from '../views/negativePage/index'
import NeutralPage from '../views/neutralPage/index'

function Directions() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/positive" element={<PositivePage />} />
                <Route path="/negative" element={<NegativePage />} />
                <Route path="/neutral" element={<NeutralPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Directions