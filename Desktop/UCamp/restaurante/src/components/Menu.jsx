import React from "react";
import pdfLaunch from 'src/components/LaunchMenu.pdf'

// const menus = [
//     {
//         id: "1",
//         name: "Desayuno"
//     },
//     {
//         id: "2",
//         name: "Comida y Cena"
//     },
//     {
//         id: "3",
//         name: "Bebidas"
//     },
// ]


export default function Menu () {
    return(
        // <div className="cursos">
        //     <ul className="cursos1">
        //         {menus.map((menus) => (
        //         <a href='./home'><li className="caja2" key={menus.id}><h3>{menus.name}</h3></li></a>
        //         ))}
        //     </ul>
        // </div>

            <div className='cursos'>
            <ul className="cursos1">
                <a href={pdfLaunch} target="blank" download="LaunchMenu.pdf"><li className="caja2"><h3>Desayuno</h3></li></a>
                <a href="https://www.restauranteelbajio.com.mx/uploads/desayunos.pdf?uid=572bf0df8fb611881448cbc222ea149e"><li className="caja2"><h3>Comida y Cena</h3></li></a>
                <a href="https://www.restauranteelbajio.com.mx/uploads/aguas.pdf?uid=572bf0df8fb611881448cbc222ea149e"><li className="caja2"><h3>Bebidas</h3></li></a>
            </ul>
            </div>
    )
}
