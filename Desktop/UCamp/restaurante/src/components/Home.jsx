import React from "react";
import comida from './ChileEnNogada.png'
import sandwich from './SandwichBrioche.jpeg'
import ComidaCena from './Brunch-1.webp'
import Bebidas from './MenuBebidas.png'
import { Link } from 'react-router-dom';

export default function Home () {
    return (
        <div className="HomeMain">
            <div className="JumboTron">
                <div className="left">
                    <h1>Picabira, un deleite al paladar</h1>
                    <p className="p-jumbo">Ofrecemos un espacio en el que convive lo más diverso de la cocina internacional, incluyendo los Pintxos y las delicias de Veracruz como las gorditas de anís, el pescado a la veracruzana y los tamales papantecos y hasta platillos típicos del norte de México, pasando por las carnitas estilo Michoacán, así como otras delicias de Yucatán, Puebla y Oaxaca, por mencionar algunos otros.</p>
                </div>
                    <img className="imgMain" src={comida} alt=""></img>
            </div>
            <div className="catalogo">
                <h3 className="h3-catalogo">Descubre</h3>
                <h2 className="h2-catalogo">Nuestros Menús</h2>
                <p className="p-catalogo">Alimentos preparados al momento</p>
                <div className="container-catalogo">
                    <div className="item div-catalogo">
                        <a href="#"><img className="img1-catalogo" src={sandwich} alt=""></img></a>
                        <h3 className="h3-catalogo2">Desayunos</h3>
                        <div><p className="p-catalogo2">Prueba nuestros desayunos recién hechos con ingredientes frescos y saludables para comenzar bien el día disfrutando de los sabores tradicionales de México.</p></div>
                        <section className="container2-catalogo">
                        <div className="botonMenu"><p className="p-catalogo3"><a className="nombre" href="#">Ver más</a></p></div></section>
                    </div>
                    <div class="item div-catalogo">
                        <a href="#"><img class="img1-catalogo" src={ComidaCena} alt=""></img></a>
                        <h3 class="h3-catalogo2">Comida y Cena</h3>
                        <div><p className="p-catalogo2">Preparamos los mejores platillos mexicanos con muy buenos y frescos ingredientes, según nuestras recetas tradicionales para deleitarte.</p></div>
                        <section className="container2-catalogo">
                        <div className="botonMenu"><p className="p-catalogo3"><a className="nombre" href="#">Ver más</a></p></div></section>
                    </div>
                    <div class="item div-catalogo">
                        <a href="#"><img className="img1-catalogo" src={Bebidas} alt=""></img></a>
                        <h3 class="h3-catalogo2">Bebidas</h3>
                        <div><p className="p-catalogo2">Aguas frescas hechas con fruta de temporada; amplia selección de destilados, cervezas, coctelería, vinos y refrescos para acompañar tus alimentos.</p></div>
                        <section className="container2-catalogo">
                        <div className="botonMenu"><p className="p-catalogo3"><a className="nombre" href="#">Ver más</a></p></div></section>
                    </div>
                </div>
            </div>
        </div>
    )
}
