import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios';

let MovieContainer = styled.div`
padding: 2rem 3rem;
display:grid;
grid-template-columns: auto auto auto auto;
// justify-content:space-between;
grid-gap:2rem;

@media(max-width: 680px){
    display:grid;
    grid-template-columns: auto;
    justify-content:center;
}
@media(max-width: 788px){
    display:grid;
    grid-template-columns: auto auto;
    justify-content:center;
}

.container-section{
    width:16rem;
    height: 22rem;
    // margin:2rem;
    box-shadow: 2px 3px 6px blue;
    // text-align:center;
    border-radius: 6px;
    
}
.movies-image{
    border-radius: 6px;
    width:100%;
    height:12rem;
}
.movie-name{
    margin:0;
    padding:0 0.9rem;
    font-size: 1.5rem;
    font-weight:bold;

}
.movies-desc{
    padding:0 0.9rem;
    margin:0.2rem 0;
    font-size:1rem;
    font-weight:600;
   

}
`;

export default function MovieList() {
    // const [movielist, setMovieList] = useState({});


    let movielist = {
        "status": 200,
        "success": true,
        "messageStatus": "OK",
        "results": [
            {
                "actors": [],
                "directors": [],
                "escritors": [],
                "otherTitles": [],
                "_id": "61e8a4c5f2eb8ced20633f4f",
                "image": "https://image.tmdb.org/t/p/w300/c0p6YAhrl5tLNqXydVUotJiEufR.jpg",
                "title": "El gurú de las bodas",
                "rating": "6.4/10",
                "year": "2015",
                "titleOriginal": "The Wedding Ringer",
                "uuid": "el-guru-de-las-bodas",
                "description": "A menos de dos semanas de casarse con Gretchen (Kaley Cuoco), la chica de sus sueños, Doug Harris (Josh Gad) no encuentra siquiera a un conocido que pueda hacer de padrino en su boda, por lo que termina contratando a Jimmy Callahan (Kevin Hart), propietario de una empresa que provee de falsos padrinos a novios solitarios como él.\n.",
                "genres": [
                    {
                        "name": "Comedia",
                        "uuid": "comedia"
                    }
                ],
                "countries": [
                    {
                        "name": "USA",
                        "uuid": "usa"
                    }
                ],
                "release": "16 Jan 2015",
                "embedUrls": [
                    {
                        "server": "fembed",
                        "url": "https://dutrag.com/v/1ezegcjmn787gd6",
                        "priority": 4
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.to/e/v6rhoz3aj7c7",
                        "priority": 3
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-7ilwdesm2b3m.html",
                        "priority": 2
                    },
                    {
                        "server": "upstream",
                        "url": "https://upstream.to/embed-vvdz20lgyd8v.html",
                        "priority": 1
                    },
                    {
                        "server": "streamsb",
                        "url": "https://pelistop.co/embed-ttjg6v72bta1.html",
                        "priority": 0
                    },
                    {
                        "server": "mystream",
                        "url": "https://embed.mystream.to/ugut1vxfcmkc",
                        "priority": 0
                    },
                    {
                        "server": "streamsb",
                        "url": "https://streamsb.net/embed-8vy5k529w312.html",
                        "priority": 5
                    }
                ],
                "index": 40,
                "episodes": [],
                "createdAt": "2022-01-19T23:54:45.509Z",
                "updatedAt": "2022-06-28T19:34:59.870Z"
            },
            {
                "actors": [],
                "directors": [],
                "escritors": [],
                "otherTitles": [],
                "_id": "61e8a4c4f2eb8ced20633f4d",
                "image": "https://image.tmdb.org/t/p/w300/aa08r4t2u1esemG2sP7K5rcqJYF.jpg",
                "title": "Metegol",
                "rating": "6.1/10",
                "year": "2013",
                "titleOriginal": "Metegol",
                "uuid": "metegol",
                "description": "Amadeo es un fenómeno jugando al futbolín y está enamorado de Laura, su mejor amiga, aunque nunca se ha atrevido a decírselo. Desde pequeño se ha pasado la vida jugando al futbolín en el bar que su padre regenta en un pueblo pequeño, donde el tiempo pasa sin sobresaltos. Su vida tranquila se termina el día en el que \"el Crack\", un joven del pueblo convertido en el mejor futbolista del mundo, vuelve dispuesto a vengarse de la única derrota de su vida: la que sufrió frente a Amadeo jugando al futbolín siendo niños. Con el futbolín, el bar y su corazón hechos pedazos, Amadeo descubre algo mágico: los jugadores de su querido futbolín hablan ¡y mucho! Guiados por su líder, el carismático Capi, los jugadores del futboliín y Amadeo se embarcarán en una fantástica aventura para salvar a Laura y al pueblo. En este camino se convertirán en un verdadero equipo y conocerán el amor, el respeto, la amistad y la pasión. Pero, ¿hay en el mundo y en el fútbol lugar para los milagros?.",
                "genres": [
                    {
                        "name": "Animación",
                        "uuid": "animacion"
                    },
                    {
                        "name": "Aventura",
                        "uuid": "aventura"
                    },
                    {
                        "name": "Romance",
                        "uuid": "romance"
                    }
                ],
                "countries": [
                    {
                        "name": "Argentina",
                        "uuid": "argentina"
                    },
                    {
                        "name": "Spain",
                        "uuid": "spain"
                    }
                ],
                "release": "18 Jul 2013",
                "embedUrls": [
                    {
                        "server": "fembed",
                        "url": "https://dutrag.com/v/360dqcme0y6kj8j",
                        "priority": 4
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.to/e/gi58jtglcs4r",
                        "priority": 3
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-nm9ks884c47u.html",
                        "priority": 2
                    },
                    {
                        "server": "streamsb",
                        "url": "https://pelistop.co/embed-haa4dmeeo6pf.html",
                        "priority": 0
                    },
                    {
                        "server": "vip",
                        "url": "https://jawcloud.co/embed-clzcuwkj2w0k.html",
                        "priority": 0
                    },
                    {
                        "server": "mystream",
                        "url": "https://embed.mystream.to/0mvlybbt8fu9",
                        "priority": 0
                    },
                    {
                        "server": "streamsb",
                        "url": "https://streamsb.net/embed-kwju3wxpprj9.html",
                        "priority": 5
                    },
                    {
                        "server": "streamtape",
                        "url": "https://streamtape.com/e/1R1aKv6GoZseYB6/",
                        "priority": 5
                    },
                    {
                        "server": "userscloud",
                        "url": "https://userscloud.com/embed-new6lcinmqqw.html",
                        "priority": 5
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.ws/e/eundh540l4xq",
                        "priority": 5
                    }
                ],
                "index": 38,
                "episodes": [],
                "createdAt": "2022-01-19T23:54:44.486Z",
                "updatedAt": "2022-06-28T19:33:11.795Z"
            },
            {
                "actors": [],
                "directors": [],
                "escritors": [],
                "otherTitles": [],
                "_id": "61e8a4c3f2eb8ced20633f4a",
                "image": "https://image.tmdb.org/t/p/w300/6zUkjB5OtiFhN2DiqdT1IllNJTa.jpg",
                "title": "Fast & Furious 6 (A todo gas 6)",
                "rating": "6.7/10",
                "year": "2013",
                "titleOriginal": "Fast & Furious 6",
                "uuid": "fast-furious-6-a-todo-gas-6-",
                "description": "Desde que Dom y Brian destruyeron el imperio de un mafioso y se hicieron con cien millones de dólares, se encuentran en paradero desconocido; no pueden regresar a casa porque la ley los persigue. Entretanto, Hobbs ha seguido la pista por una docena de países a una banda de letales conductores mercenarios, cuyo cerebro cuenta con la inestimable ayuda de la sexy Letty, un viejo amor de Dom que éste daba por muerta. La única forma de detenerlos es enfrentarse a ellos en las calles, así que Hobbs le pide a Dom que reúna a su equipo en Londres. ¿Qué obtendrán a cambio? Un indulto para que todos puedan volver a casa con sus familias..",
                "genres": [
                    {
                        "name": "Acción",
                        "uuid": "accion"
                    },
                    {
                        "name": "Crimen",
                        "uuid": "crimen"
                    },
                    {
                        "name": "Suspense",
                        "uuid": "suspense"
                    }
                ],
                "countries": [
                    {
                        "name": "USA",
                        "uuid": "usa"
                    }
                ],
                "release": "24 May 2013",
                "embedUrls": [
                    {
                        "server": "fembed",
                        "url": "https://dutrag.com/v/mrlrqi5-m6qzk88",
                        "priority": 4
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.to/e/5nxo5aln90jk",
                        "priority": 3
                    },
                    {
                        "server": "streamtape",
                        "url": "https://streamtape.com/e/yPKdlj73rLS1YVB/",
                        "priority": 3
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-59u590xxarvw.html",
                        "priority": 2
                    },
                    {
                        "server": "upstream",
                        "url": "https://upstream.to/embed-4tcvp9tf3wuo.html",
                        "priority": 1
                    },
                    {
                        "server": "streamsb",
                        "url": "https://pelistop.co/embed-pift9qy6zank.html",
                        "priority": 0
                    },
                    {
                        "server": "mystream",
                        "url": "https://embed.mystream.to/bl331lli54oz",
                        "priority": 0
                    },
                    {
                        "server": "mobile",
                        "url": "https://fastplay.to/embed-hsx6107ppq8g.html",
                        "priority": 0
                    },
                    {
                        "server": "streamsb",
                        "url": "https://streamsb.net/embed-fijczkxxdqc9.html",
                        "priority": 5
                    }
                ],
                "index": 39,
                "episodes": [],
                "createdAt": "2022-01-19T23:54:43.646Z",
                "updatedAt": "2022-01-23T01:18:46.318Z"
            },
            {
                "actors": [],
                "directors": [],
                "escritors": [],
                "otherTitles": [],
                "_id": "61e8a4bdf2eb8ced20633f45",
                "image": "https://image.tmdb.org/t/p/w300/9WjYm3meBE2hSHtAB7EvhvxPlfA.jpg",
                "title": "Socios por Accidente",
                "rating": "2/10",
                "year": "2014",
                "titleOriginal": "Socios por Accidente",
                "uuid": "socios-por-accidente",
                "description": "Matías es un traductor de lengua rusa. Rody, un agente de Interpol que requiere sus servicios para esclarecer un caso. Una serie de imprevistos los envuelven en una huída desesperada para proteger sus vidas.",
                "genres": [
                    {
                        "name": "Comedia",
                        "uuid": "comedia"
                    }
                ],
                "countries": [
                    {
                        "name": "Argentina",
                        "uuid": "argentina"
                    }
                ],
                "release": "17 Jul 2014",
                "embedUrls": [
                    {
                        "server": "fembed",
                        "url": "https://dutrag.com/v/7qv7482kwvg",
                        "priority": 4
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.to/e/3qhjmhv3ir7z",
                        "priority": 3
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-d9ivdzsbhsrc.html",
                        "priority": 2
                    },
                    {
                        "server": "streamsb",
                        "url": "https://pelistop.co/embed-6a424u2he539.html",
                        "priority": 0
                    },
                    {
                        "server": "vip",
                        "url": "https://jawcloud.co/embed-z6twtiyktftf.html",
                        "priority": 0
                    },
                    {
                        "server": "mystream",
                        "url": "https://embed.mystream.to/9az1sana08zu",
                        "priority": 0
                    },
                    {
                        "server": "streamsb",
                        "url": "https://streamsb.net/embed-lfyw54tmrrqz.html",
                        "priority": 5
                    },
                    {
                        "server": "userscloud",
                        "url": "https://userscloud.com/embed-ve2qvveuma1z.html",
                        "priority": 5
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.ws/e/uh4g7vrqvgtj",
                        "priority": 5
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-bukt5dc16m3i.html",
                        "priority": 5
                    },
                    {
                        "server": "gdrive",
                        "url": "https://drive.google.com/file/d/1wcm7wlXqLjFj-e36CDPVHbneklvBnggU/preview",
                        "priority": 5
                    }
                ],
                "index": 36,
                "episodes": [],
                "createdAt": "2022-01-19T23:54:37.562Z",
                "updatedAt": "2022-01-23T01:18:26.396Z"
            },
            {
                "actors": [],
                "directors": [],
                "escritors": [],
                "otherTitles": [],
                "_id": "61e8a4bcf2eb8ced20633f43",
                "image": "https://image.tmdb.org/t/p/w300/sawj3h8vEWrWdo9LgRb5lMjrEoi.jpg",
                "title": "Casi perfecta",
                "rating": "5.7/10",
                "year": "2012",
                "titleOriginal": "Girl Most Likely",
                "uuid": "casi-perfecta",
                "description": "Imogene (Kristen Wiig) es una exitosa dramaturga de Nueva York que finge su suicidio como estratagema para intentar recuperar a su ex novio... y lo único que consigue es quedarse bajo la custodia de su madre, Zelda (Annette Bening), una adicta al juego..",
                "genres": [
                    {
                        "name": "Comedia",
                        "uuid": "comedia"
                    }
                ],
                "countries": [
                    {
                        "name": "USA",
                        "uuid": "usa"
                    }
                ],
                "release": "18 Jul 2013",
                "embedUrls": [
                    {
                        "server": "fembed",
                        "url": "https://dutrag.com/v/qye5rie0z-4xwkm",
                        "priority": 4
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.to/e/2k58lowsb7eq",
                        "priority": 3
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-6xe1jmpohfrc.html",
                        "priority": 2
                    },
                    {
                        "server": "streamsb",
                        "url": "https://pelistop.co/embed-aka006awd1be.html",
                        "priority": 0
                    },
                    {
                        "server": "vip",
                        "url": "https://jawcloud.co/embed-8w23oqbit0cq.html",
                        "priority": 0
                    },
                    {
                        "server": "mystream",
                        "url": "https://embed.mystream.to/dgpctvfhazbx",
                        "priority": 0
                    },
                    {
                        "server": "streamsb",
                        "url": "https://streamsb.net/embed-vlpa7ninpw47.html",
                        "priority": 5
                    },
                    {
                        "server": "gdrive",
                        "url": "https://drive.google.com/file/d/18Du3ohC_VmiIi7y_qiEaLVpR6tcOViAC/preview",
                        "priority": 5
                    },
                    {
                        "server": "streamtape",
                        "url": "https://streamtape.com/e/wkX39mldYGHlez/",
                        "priority": 5
                    },
                    {
                        "server": "userscloud",
                        "url": "https://userscloud.com/embed-izdmyc3kdsmi.html",
                        "priority": 5
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.ws/e/f5x62d7l71r6",
                        "priority": 5
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-wci31xg48z67.html",
                        "priority": 5
                    }
                ],
                "index": 37,
                "episodes": [],
                "createdAt": "2022-01-19T23:54:36.506Z",
                "updatedAt": "2022-01-23T01:10:30.364Z"
            },
            {
                "actors": [],
                "directors": [],
                "escritors": [],
                "otherTitles": [],
                "_id": "61e8a4bbf2eb8ced20633f40",
                "image": "https://image.tmdb.org/t/p/w300/oSVFID7TiytpSXIfXLB6oaeW1eP.jpg",
                "title": "Jauja",
                "rating": "7/10",
                "year": "2014",
                "titleOriginal": "Jauja",
                "uuid": "jauja",
                "description": "En la antigüedad, se creía que Jauja era una tierra mitológica de abundancia y felicidad. Se emprendieron muchas expediciones para tratar de encontrar el lugar y comprobarlo. Con el tiempo, la leyenda creció desproporcionadamente. Indiscutiblemente, la gente exageraba, como de costumbre. Lo único que se sabe con seguridad es que todos aquellos que intentaron encontrar este paraíso terrenal se perdieron.\n.",
                "genres": [
                    {
                        "name": "Drama",
                        "uuid": "drama"
                    },
                    {
                        "name": "Western",
                        "uuid": "western"
                    }
                ],
                "countries": [
                    {
                        "name": "Argentina",
                        "uuid": "argentina"
                    },
                    {
                        "name": "Denmark",
                        "uuid": "denmark"
                    },
                    {
                        "name": "Franc",
                        "uuid": "franc"
                    }
                ],
                "release": "27 Nov 2014",
                "embedUrls": [
                    {
                        "server": "fembed",
                        "url": "https://dutrag.com/v/88r8ga808nepg0r",
                        "priority": 4
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.to/e/ecutil007wwt",
                        "priority": 3
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-hd9y7017s2na.html",
                        "priority": 2
                    },
                    {
                        "server": "upstream",
                        "url": "https://upstream.to/embed-752llg9dawp6.html",
                        "priority": 1
                    },
                    {
                        "server": "streamsb",
                        "url": "https://pelistop.co/embed-64pif46oys0h.html",
                        "priority": 0
                    },
                    {
                        "server": "mystream",
                        "url": "https://embed.mystream.to/akeex013il7n",
                        "priority": 0
                    },
                    {
                        "server": "streamsb",
                        "url": "https://streamsb.net/embed-nryb6rts72bj.html",
                        "priority": 5
                    },
                    {
                        "server": "streamtape",
                        "url": "https://streamtape.com/e/AJjmBMYKpbc4x9/",
                        "priority": 5
                    },
                    {
                        "server": "userscloud",
                        "url": "https://userscloud.com/embed-k2u4vc1urfky.html",
                        "priority": 5
                    },
                    {
                        "server": "gdrive",
                        "url": "https://drive.google.com/file/d/1ncV0qeu7L_WMpHvRmXj5SYs27N_tzpGW/preview",
                        "priority": 5
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.ws/e/akzitbzf7v5a",
                        "priority": 5
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-fvv1q1n36w6e.html",
                        "priority": 5
                    }
                ],
                "index": 35,
                "episodes": [],
                "createdAt": "2022-01-19T23:54:35.515Z",
                "updatedAt": "2022-01-23T01:00:30.900Z"
            }, {
                "actors": [
                ],
                "directors": [
                ],
                "escritors": [
                ],
                "otherTitles": [
                ],
                "_id": "61e8a4b9f2eb8ced20633f3d",
                "image": "https://image.tmdb.org/t/p/w300/btamUdOUjc7jVG5gF0DdJiNulPK.jpg",
                "title": "Ellos Volvieron",
                "rating": "7.8/10",
                "year": "2015",
                "titleOriginal": "Ellos Volvieron",
                "uuid": "ellos-volvieron",
                "description": "El secuestro de tres niños crea una serie de suspicacias y violentas reacciones en su pequeña comunidad..",
                "genres": [
                    {
                        "name": "Crimen",
                        "uuid": "crimen"
                    },
                    {
                        "name": "Drama",
                        "uuid": "drama"
                    },
                    {
                        "name": "Suspense",
                        "uuid": "suspense"
                    },
                    {
                        "name": "Terror",
                        "uuid": "terror"
                    }
                ],
                "countries": [
                    {
                        "name": "Argentina",
                        "uuid": "argentina"
                    }
                ],
                "release": "01 Sep 2015",
                "embedUrls": [
                    {
                        "server": "fembed",
                        "url": "https://dutrag.com/v/6mo2y0p1dvr",
                        "priority": 4
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.to/e/r946ljk0cdkk",
                        "priority": 3
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-fwhlek90vfkk.html",
                        "priority": 2
                    },
                    {
                        "server": "streamsb",
                        "url": "https://pelistop.co/embed-1a9vf1fjh1e9.html",
                        "priority": 0
                    },
                    {
                        "server": "vip",
                        "url": "https://jawcloud.co/embed-gl4ljf7mpl9c.html",
                        "priority": 0
                    },
                    {
                        "server": "mystream",
                        "url": "https://embed.mystream.to/wx813j6zyc79",
                        "priority": 0
                    },
                    {
                        "server": "streamsb",
                        "url": "https://streamsb.net/embed-4zchrfghz13r.html",
                        "priority": 5
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.ws/e/g1p77uvc3hsr",
                        "priority": 5
                    },
                    {
                        "server": "streamtape",
                        "url": "https://streamtape.com/e/dgkR3gbgR8ckOAM/",
                        "priority": 5
                    },
                    {
                        "server": "userscloud",
                        "url": "https://userscloud.com/embed-2azbz4296mba.html",
                        "priority": 5
                    },
                    {
                        "server": "gdrive",
                        "url": "https://drive.google.com/file/d/1gGW8RUucrkauBbFqxc80qQtPgDJl0AaW/preview",
                        "priority": 5
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-upye38vs4uyx.html",
                        "priority": 5
                    }
                ],
                "index": 34,
                "episodes": [
                ],
                "createdAt": "2022-01-19T23:54:33.546Z",
                "updatedAt": "2022-01-23T00:49:59.785Z"
            },
            {
                "actors": [
                ],
                "directors": [
                ],
                "escritors": [
                ],
                "otherTitles": [
                ],
                "_id": "61e8a4b7f2eb8ced20633f3a",
                "image": "https://image.tmdb.org/t/p/w300/jVS06JdG2Dlo7VbJMzeYOr1ineZ.jpg",
                "title": "Barbie súper princesa",
                "rating": "5.4/10",
                "year": "2015",
                "titleOriginal": "Barbie in Princess Power",
                "uuid": "barbie-super-princesa",
                "description": "Barbie es Kara, una princesa muy actual con una vida muy normal. Un día, tras ser besada por una mariposa mágica, Kara descubre que tiene unos increíbles súper poderes que le permiten transformarse en Súper Destello, su alter ego secreto que combate el crimen y vuela por todo el reino salvando a la gente. Pero pronto su celosa prima atrapa a la mariposa y también se transforma, esta vez en Destello Oscuro, su oponente. Su rivalidad llega a los cielos pero, cuando descubran al verdadero enemigo del reino ¿serán capaces de dejar a un lado sus diferencias y formar un súper equipo? ¡Surca los cielos y descubre que no hay poder más grande que el de la amistad! (FILMAFFINITY).",
                "genres": [
                    {
                        "name": "Animación",
                        "uuid": "animacion"
                    }
                ],
                "countries": [
                    {
                        "name": "USA",
                        "uuid": "usa"
                    }
                ],
                "release": "03 Mar 2015",
                "embedUrls": [
                    {
                        "server": "fembed",
                        "url": "https://dutrag.com/v/6mo204pkd9r",
                        "priority": 4
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.to/e/v2y3nd68l772",
                        "priority": 3
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-i416786pabia.html",
                        "priority": 2
                    },
                    {
                        "server": "streamsb",
                        "url": "https://pelistop.co/embed-cbx8mijhrotd.html",
                        "priority": 0
                    },
                    {
                        "server": "vip",
                        "url": "https://jawcloud.co/embed-stwaf7tfc9x9.html",
                        "priority": 0
                    },
                    {
                        "server": "mystream",
                        "url": "https://embed.mystream.to/pdaalwzagx98",
                        "priority": 0
                    },
                    {
                        "server": "streamsb",
                        "url": "https://streamsb.net/embed-qvw7vsjjip3c.html",
                        "priority": 5
                    },
                    {
                        "server": "userscloud",
                        "url": "https://userscloud.com/embed-oy93d3c60ss7.html",
                        "priority": 5
                    },
                    {
                        "server": "streamtape",
                        "url": "https://streamtape.com/e/BaMZWap1ZJfMJL/",
                        "priority": 5
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.ws/e/2mx94tnbjttc",
                        "priority": 5
                    },
                    {
                        "server": "gdrive",
                        "url": "https://drive.google.com/file/d/1sYCbcd8Om0TWm3aYHyjPj7rkgtA3IsMg/preview",
                        "priority": 5
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-5sz1syuhd6vl.html",
                        "priority": 5
                    }
                ],
                "index": 33,
                "episodes": [
                ],
                "createdAt": "2022-01-19T23:54:31.347Z",
                "updatedAt": "2022-01-23T00:38:50.698Z"
            },
            {
                "actors": [
                ],
                "directors": [
                ],
                "escritors": [
                ],
                "otherTitles": [
                ],
                "_id": "61e8a4b6f2eb8ced20633f38",
                "image": "https://image.tmdb.org/t/p/w300/6Hqn3WfEEdgQ5LW81XQiQUioD3q.jpg",
                "title": "The Equalizer (El protector)",
                "rating": "7.1/10",
                "year": "2014",
                "titleOriginal": "The Equalizer",
                "uuid": "the-equalizer-el-protector-",
                "description": "Robert McCall, un antiguo agente de la CIA que lleva ahora una vida tranquila, abandona su retiro para ayudar a Teri, una joven prostituta que está siendo explotada por la mafia rusa. A pesar de que aseguró no volver a ser violento, contemplar tanta crueldad despertará en Robert un implacable y renovado deseo de justicia....",
                "genres": [
                    {
                        "name": "Acción",
                        "uuid": "accion"
                    },
                    {
                        "name": "Crimen",
                        "uuid": "crimen"
                    },
                    {
                        "name": "Suspense",
                        "uuid": "suspense"
                    }
                ],
                "countries": [
                    {
                        "name": "USA",
                        "uuid": "usa"
                    }
                ],
                "release": "26 Sep 2014",
                "embedUrls": [
                    {
                        "server": "fembed",
                        "url": "https://dutrag.com/v/dwor-rjepog",
                        "priority": 4
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.to/e/",
                        "priority": 3
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-o3kegtwtepas.html",
                        "priority": 2
                    },
                    {
                        "server": "streamsb",
                        "url": "https://pelistop.co/embed-qod0shbvbm37.html",
                        "priority": 0
                    },
                    {
                        "server": "vip",
                        "url": "https://jawcloud.co/embed-fgnqadmb7cnj.html",
                        "priority": 0
                    },
                    {
                        "server": "mystream",
                        "url": "https://embed.mystream.to/tp9t4tiqsl4s",
                        "priority": 0
                    },
                    {
                        "server": "streamsb",
                        "url": "https://streamsb.net/embed-jcoej4x2z0ft.html",
                        "priority": 5
                    },
                    {
                        "server": "streamtape",
                        "url": "https://streamtape.com/e/YB2RJAKYV0cvVwg/",
                        "priority": 5
                    },
                    {
                        "server": "gdrive",
                        "url": "https://drive.google.com/file/d/1x1w-YRRrHsxMdpX-wTiZ-hIQbpjFvLZU/preview",
                        "priority": 5
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.ws/e/2re1qkhv3hof",
                        "priority": 5
                    },
                    {
                        "server": "userscloud",
                        "url": "https://userscloud.com/embed-74xff6hyrc3j.html",
                        "priority": 5
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-e34mna0wphpx.html",
                        "priority": 5
                    }
                ],
                "index": 31,
                "episodes": [
                ],
                "createdAt": "2022-01-19T23:54:30.402Z",
                "updatedAt": "2022-01-23T00:31:49.872Z"
            },

            {
                "actors": [
                ],
                "directors": [
                ],
                "escritors": [
                ],
                "otherTitles": [
                ],
                "_id": "61e8a4a8f2eb8ced20633f27",
                "image": "https://image.tmdb.org/t/p/w300/zlrr7oO8sUSzDgVehP92zjlNQ58.jpg",
                "title": "Lucy",
                "rating": "6.3/10",
                "year": "2014",
                "titleOriginal": "Lucy",
                "uuid": "lucy",
                "description": "Lucy, una joven obligada a ejercer de mula de una nueva y potente droga, adquiere de repente enormes poderes sobrenaturales cuando la bolsa de la droga se rompe y los narcóticos entran en contacto con su cuerpo. Entonces, su cerebro comienza a aumentar la capacidad de uso hasta poder ser utilizado al 100%, convirtiéndose en una máquina letal con habilidades extraordinarias..",
                "genres": [
                    {
                        "name": "Acción",
                        "uuid": "accion"
                    },
                    {
                        "name": "Ciencia Ficción",
                        "uuid": "ciencia-ficcion"
                    }
                ],
                "countries": [
                    {
                        "name": "France",
                        "uuid": "france"
                    },
                    {
                        "name": "Taiwan",
                        "uuid": "taiwan"
                    },
                    {
                        "name": "Germany",
                        "uuid": "germany"
                    }
                ],
                "release": "25 Jul 2014",
                "embedUrls": [
                    {
                        "server": "fembed",
                        "url": "https://dutrag.com/v/6m927lgjdor",
                        "priority": 4
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.to/e/67r3s2c5gzk0",
                        "priority": 3
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-w3zpak3wsc1m.html",
                        "priority": 2
                    },
                    {
                        "server": "streamsb",
                        "url": "https://pelistop.co/embed-0s770cuxqjci.html",
                        "priority": 0
                    },
                    {
                        "server": "vip",
                        "url": "https://jawcloud.co/embed-6lqz7roxvi16.html",
                        "priority": 0
                    },
                    {
                        "server": "mystream",
                        "url": "https://embed.mystream.to/rc828m0aq924",
                        "priority": 0
                    },
                    {
                        "server": "streamsb",
                        "url": "https://streamsb.net/embed-ivlayvwap4jw.html",
                        "priority": 5
                    },
                    {
                        "server": "streamsb",
                        "url": "https://streamsb.net/embed-zz2p16oopsco.html",
                        "priority": 5
                    },
                    {
                        "server": "streamtape",
                        "url": "https://streamtape.com/e/3xrLXVq1Zqfder3/",
                        "priority": 5
                    },
                    {
                        "server": "gdrive",
                        "url": "https://drive.google.com/file/d/1wyRyUF4fnLyDO4yP32GXhX_UEtEAFebS/preview",
                        "priority": 5
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-upkmbn51r8y1.html",
                        "priority": 5
                    },
                    {
                        "server": "userscloud",
                        "url": "https://userscloud.com/embed-ncdtcvh9xh9v.html",
                        "priority": 5
                    }
                ],
                "index": 27,
                "episodes": [
                ],
                "createdAt": "2022-01-19T23:54:16.575Z",
                "updatedAt": "2022-01-22T23:45:11.841Z"
            },

            {
                "actors": [
                ],
                "directors": [
                ],
                "escritors": [
                ],
                "otherTitles": [
                ],
                "_id": "61e8a4aff2eb8ced20633f30",
                "image": "https://image.tmdb.org/t/p/w300/4A9KmccvMqJA8MQzIes0G9Uobh5.jpg",
                "title": "John Wick",
                "rating": "7.1/10",
                "year": "2014",
                "titleOriginal": "John Wick",
                "uuid": "john-wick",
                "description": "En Nueva York, John Wick, un asesino a sueldo retirado, vuelve otra vez a la acción para vengarse de los gángsters que le quitaron todo..",
                "genres": [
                    {
                        "name": "Acción",
                        "uuid": "accion"
                    },
                    {
                        "name": "Suspense",
                        "uuid": "suspense"
                    }
                ],
                "countries": [
                    {
                        "name": "China",
                        "uuid": "china"
                    },
                    {
                        "name": "USA",
                        "uuid": "usa"
                    }
                ],
                "release": "24 Oct 2014",
                "embedUrls": [
                    {
                        "server": "fembed",
                        "url": "https://dutrag.com/v/myw52i5608q3nz-",
                        "priority": 4
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.to/e/",
                        "priority": 3
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-p3a9rbu251xw.html",
                        "priority": 2
                    },
                    {
                        "server": "upstream",
                        "url": "https://upstream.to/embed-aaz9lemjz8yj.html",
                        "priority": 1
                    },
                    {
                        "server": "streamsb",
                        "url": "https://pelistop.co/embed-pqs75e8kz56n.html",
                        "priority": 0
                    },
                    {
                        "server": "mystream",
                        "url": "https://embed.mystream.to/c97jd38n331a",
                        "priority": 0
                    },
                    {
                        "server": "videos",
                        "url": "https://videos.sh/embed-bdlb7rkedckk.html",
                        "priority": 0
                    },
                    {
                        "server": "streamsb",
                        "url": "https://streamsb.net/embed-fhlavnzqo33s.html",
                        "priority": 5
                    },
                    {
                        "server": "userscloud",
                        "url": "https://userscloud.com/embed-etfcfxb3nz5n.html",
                        "priority": 5
                    },
                    {
                        "server": "gdrive",
                        "url": "https://drive.google.com/file/d/1jKzfezd1RTJ9b2xnWSzn8n2Bz5rI6mPv/preview",
                        "priority": 5
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.ws/e/ni4pic4vqlg4",
                        "priority": 5
                    },
                    {
                        "server": "streamtape",
                        "url": "https://streamtape.com/e/r0d17GQMGVSb2mb/",
                        "priority": 5
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-asit10lhgmxz.html",
                        "priority": 5
                    }
                ],
                "index": 29,
                "episodes": [
                ],
                "createdAt": "2022-01-19T23:54:23.422Z",
                "updatedAt": "2022-01-23T00:11:33.757Z"
            },

            {
                "actors": [
                ],
                "directors": [
                ],
                "escritors": [
                ],
                "otherTitles": [
                ],
                "_id": "61e8a4a8f2eb8ced20633f27",
                "image": "https://image.tmdb.org/t/p/w300/zlrr7oO8sUSzDgVehP92zjlNQ58.jpg",
                "title": "Lucy",
                "rating": "6.3/10",
                "year": "2014",
                "titleOriginal": "Lucy",
                "uuid": "lucy",
                "description": "Lucy, una joven obligada a ejercer de mula de una nueva y potente droga, adquiere de repente enormes poderes sobrenaturales cuando la bolsa de la droga se rompe y los narcóticos entran en contacto con su cuerpo. Entonces, su cerebro comienza a aumentar la capacidad de uso hasta poder ser utilizado al 100%, convirtiéndose en una máquina letal con habilidades extraordinarias..",
                "genres": [
                    {
                        "name": "Acción",
                        "uuid": "accion"
                    },
                    {
                        "name": "Ciencia Ficción",
                        "uuid": "ciencia-ficcion"
                    }
                ],
                "countries": [
                    {
                        "name": "France",
                        "uuid": "france"
                    },
                    {
                        "name": "Taiwan",
                        "uuid": "taiwan"
                    },
                    {
                        "name": "Germany",
                        "uuid": "germany"
                    }
                ],
                "release": "25 Jul 2014",
                "embedUrls": [
                    {
                        "server": "fembed",
                        "url": "https://dutrag.com/v/6m927lgjdor",
                        "priority": 4
                    },
                    {
                        "server": "doodstream",
                        "url": "https://dood.to/e/67r3s2c5gzk0",
                        "priority": 3
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-w3zpak3wsc1m.html",
                        "priority": 2
                    },
                    {
                        "server": "streamsb",
                        "url": "https://pelistop.co/embed-0s770cuxqjci.html",
                        "priority": 0
                    },
                    {
                        "server": "vip",
                        "url": "https://jawcloud.co/embed-6lqz7roxvi16.html",
                        "priority": 0
                    },
                    {
                        "server": "mystream",
                        "url": "https://embed.mystream.to/rc828m0aq924",
                        "priority": 0
                    },
                    {
                        "server": "streamsb",
                        "url": "https://streamsb.net/embed-ivlayvwap4jw.html",
                        "priority": 5
                    },
                    {
                        "server": "streamsb",
                        "url": "https://streamsb.net/embed-zz2p16oopsco.html",
                        "priority": 5
                    },
                    {
                        "server": "streamtape",
                        "url": "https://streamtape.com/e/3xrLXVq1Zqfder3/",
                        "priority": 5
                    },
                    {
                        "server": "gdrive",
                        "url": "https://drive.google.com/file/d/1wyRyUF4fnLyDO4yP32GXhX_UEtEAFebS/preview",
                        "priority": 5
                    },
                    {
                        "server": "uqload",
                        "url": "https://uqload.com/embed-upkmbn51r8y1.html",
                        "priority": 5
                    },
                    {
                        "server": "userscloud",
                        "url": "https://userscloud.com/embed-ncdtcvh9xh9v.html",
                        "priority": 5
                    }
                ],
                "index": 27,
                "episodes": [
                ],
                "createdAt": "2022-01-19T23:54:16.575Z",
                "updatedAt": "2022-01-22T23:45:11.841Z"
            },
        ]
    };

    // useEffect (() =>{
    //     const options = {
    //         method: 'GET',
    //         url: 'https://movies-app1.p.rapidapi.com/api/movies',
    //         headers: {
    //           'X-RapidAPI-Key': 'fec9a6607fmsh17b0fbe37e8169dp1af5f9jsn5b5718c8b269',
    //           'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
    //         }
    //       };

    //       axios.request(options).then(function (response) {
    //           console.log(response.data);
    //           setMovieList(response.data);

    //       }).catch(function (error) {
    //           console.error(error);
    //       });
    // }, [1]);
    return (
        <MovieContainer>
            <>
                {movielist.results.map((results, index) => (
                    <div key={index} >
                        <div className='container-section'>
                            <img className='movies-image' src={results.image} alt="Movie- Template" />
                            <p className='movie-name'>{results.titleOriginal}</p>
                            <p className='movies-desc'>Language: English</p>
                            <p className='movies-desc'>Rating: {results.rating}</p>
                            <p className='movies-desc'>Release Date: {results.release}</p>

                        </div>
                    </div>
                ))}
            </>





        </MovieContainer>
    )
}
