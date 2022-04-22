import React from "react";
// import {
//     Routes,
//     Route
// } from "react-router-dom";
// import ListaCursos from "./Cursos"

const cursos = [
    {
        id: "1",
        name: "Desayuno"
    },
    {
        id: "2",
        name: "Comida y Cena"
    },
    {
        id: "3",
        name: "Bebidas"
    },
    // {
    //     id: "4",
    //     name: "Desarrollo Front-end"
    // },
    // {
    //     id: "5",
    //     name: "Desarrollo Back-end"
    // }
]
// console.log(cursos)


export default function Menu () {
    return(
        <div className="cursos">
            <ul className="cursos1">
                {cursos.map((curso) => (
                <a href='./home'><li className="caja2" key={curso.id}><h3>{curso.name}</h3></li></a>
                ))}
            </ul>
        </div>
    )
}
