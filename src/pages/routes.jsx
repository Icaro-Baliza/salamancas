import React from "react";
import {Route, BrowserRouter, Routes as RTS} from "react-router-dom";

import Home from "./Home/index.jsx";
import Curso from "./Curso/index.jsx";
import Message from "./Message/index.jsx";

const Routes = () => {
    return(
        <BrowserRouter>
            <RTS>
                <Route path="/" element={<Home />} />
                <Route path="/cursos" element={<Curso/>} />
                <Route path="/mensagens" element={<Message/>} />
            </RTS>
        </BrowserRouter>
    )
}

export default Routes;