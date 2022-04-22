import React from "react";

const menus = [
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
]


export default function Menu () {
    return(
        <div className="cursos">
            <ul className="cursos1">
                {menus.map((menus) => (
                <a href='./home'><li className="caja2" key={menus.id}><h3>{menus.name}</h3></li></a>
                ))}
            </ul>
        </div>
    )
}
