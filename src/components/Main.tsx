import plexPhoto from '../assets/multimedia/plex.jpg';
import jellyfinPhoto from '../assets/multimedia/jellyfin.jpg';

function Main() {
    return (

        /**
         *  Contenedor principal
         *      Fondo gris claro
         *      Texto gris oscuro suave
         */
        <main className="bg-stone-50 text-stone-700">

            {/**
             *  Columna de lectura
             *      Centrado horizontalmente
             *      Ancho máximo de 48rem
             *      Espacio lateral
             *      Espacio arriba y abajo 
             *      Más separación entre las líneas y el texto
             */}
            <div className='mx-auto max-w-3xl px-4 py-8 leading-relaxed'>
                <article>
                    <section>
                        <p>
                            ¿Tienes un ordenador antiguo en casa, que ya no puede mover los sistemas actuales
                            de forma fluida, y no quieres deshacerte de él porque aún funciona? Pues no te
                            preocupes, aquí vas a ver una serie de usos que puedes darle para tener una
                            "segunda vida".
                        </p>
                    </section>

                    {/**
                     *  Sección del resumen
                     *      space-y-4 seoara verticalmente cada hijo directo en 1rem
                     */}
                    <section className="space-y-4">

                        {/**
                         *  Título al doble de tamaño y separado del bloque anterior
                         */}
                        <h3 className="text-2xl mt-2">Resumen</h3>

                        <p>
                            Aquí va un pequeño resumen de lo que se puede hacer, se detallará más adelante:
                        </p>

                        {/**
                         *  Contenedor de la tabla:
                         *      Diseño responsivo
                         *      Esquinas redondeadas
                         *      Borde fino de color gris claro
                         */}
                        <div className='overflow-x-auto rounded-lg border border-stone-200'>

                            {/**
                             *  Tabla
                             *      Ocupa todo el ancho de la columna
                             *      Los bordes de las celdas se fusionan en uno solo
                             *      El texto de las celdas va centrado
                             *      Padding en los th y td
                             */}
                            <table
                                className="w-full border-collapse
                                [&_th]:px-4 [&_th]:py-3 text-center
                                [&_td]:px-4 [&_td]:py-3 [&_td]:border-t 
                                [&_td]:border-stone-200
                                ">
                                <thead className='bg-stone-100 text-stone-900'>
                                    <tr>
                                        <th>Categoría</th>
                                        <th>Idea</th>
                                        <th>Dificultad</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>🎬 Multimedia</td>
                                        <td>Netflix casero (Plex/Jellyfin)</td>
                                        <td>Fácil</td>
                                    </tr>

                                    <tr>
                                        <td>🎬 Multimedia</td>
                                        <td>Centro de entretenimiento (Kodi)</td>
                                        <td>Fácil-Media</td>
                                    </tr>

                                    <tr>
                                        <td>🖨️ Utilidades</td>
                                        <td>Servidor de impresoras / archivos</td>
                                        <td>Fácil</td>
                                    </tr>

                                    <tr>
                                        <td>🎮 Gaming</td>
                                        <td>Consola retro (Batocera)</td>
                                        <td>Fácil-Media</td>
                                    </tr>

                                    <tr>
                                        <td>🛜 Red</td>
                                        <td>Servidor NAS propio</td>
                                        <td>Media-Difícil</td>
                                    </tr>

                                    <tr>
                                        <td>🤖 IA</td>
                                        <td>
                                            Servidor de modelos de inteligencia artificial en local
                                        </td>
                                        <td>Media-Difícil</td>
                                    </tr>

                                    <tr>
                                        <td>🖨️ Utilidades</td>
                                        <td>Google photos casero</td>
                                        <td>Media-Difícil</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </article>

                {/** Sección detallada */}
                <div>

                    {/**
                     *  Introducción de Multimedia
                     *      Separación vertical de 1rem para cada elemento del bloque
                     *      Margen superior para separarlo de la tabla
                     */}
                    <div className='space-y-4 mt-3'>

                        <h2 className="text-3xl">🎬 Multimedia</h2>

                        <h3>Servidor de streaming</h3>
                        <p>
                            ¿Tienes una colección de DVD en tu casa y te gustaría tener el
                            contenido organizado en una aplicación con una apariencia parecida
                            a Netflix?
                        </p>

                        <p>
                            Aquí vas a ver 2 aplicaciones para convertir tu viejo PC en un netflix casero,
                            hay más opciones por si quieres curiosear.
                        </p>
                    </div>

                    {/**
                     *  Bloque de Plex
                     *      Separación vertical de 1rem para cada elemento
                     *      Margen superior para separarlo del bloque anterior
                     */}
                    <div className='space-y-4 mt-2'>

                        {/** Texto negrita */}
                        <h3 className="font-bold text-2xl">Plex media server</h3>

                        <p>
                            Plex media server es un software de servidor multimedia que convierte
                            tu ordenador en un centro de entretenimiento, escaneando y organizando
                            automáticamente tus archivos personales de video, música y fotos.
                        </p>

                        <p>
                            Se encuentra disponible en Windows, Linux, Docker, Sistemas NAS y Mac OS.
                        </p>

                        <p>
                            Sus requisitos mínimos son: procesador Intel Core i3 o equivalente, y 4 GB de RAM
                            (aunque 2 GB pueden ser suficientes en instalaciones Linux).
                        </p>

                        {/**
                         *  Captura de Plex
                         *      Se adapta al ancho de la columna (sin altura fija)
                         *      Esquinas redondeadas
                         *      Borde fino gris claro
                         */}
                        <img src={plexPhoto} alt="Ejemplo de cómo se ve un servidor" 
                        className='w-full rounded-lg border border-stone-200' />

                        <p>
                            Plex tiene una pega, y es que varias de sus características, incluida
                            la posibilidad de hacer stream fuera de tu casa, están sujetas a una
                            suscripción mensual o un pago único.
                        </p>

                        {/**
                         *  Enlace de descarga
                         *      Color de acento azul
                         *      Subrayado con separación de 4 unidades del texto
                         *      Al pasar el ratón, el azul se oscurece de forma suave
                         */}
                        <a href="https://www.plex.tv/es/media-server-downloads/"
                            target='_blank'
                            rel='noreferrer'
                            className='text-sky-700 underline underline-offset-4
                            hover:text-sky-900 transition'>
                            Enlace de descarga
                        </a>
                    </div>

                    {/**
                     *  Bloque de Jellifyn
                     *      Separación vertical de 1rem para cada elemento
                     */}
                    <div className='space-y-4'>

                        {/**
                         *  Título negrita, tamaño al doble y separación del bloque anterior
                         */}
                        <h3 className="font-bold text-2xl mt-2">Jellyfin</h3>

                        <p>
                            A resumidas cuentas. Jellyfin es lo mismo que plex pero con 3 diferencias clave:
                        </p>

                        {/**
                         *  Lista de diferencias
                         *      Viñetas redondas
                         *      Sangría a la izquierda
                         *      Pequeña separación entre cada elemento
                         */}
                        <ul className='list-disc pl-6 space-y-1'>
                            <li>Es software libre</li>
                            <li>Es código abierto</li>
                            <li>No tiene muros de pago</li>
                        </ul>

                        <p>
                            ¿Significado de todo esto? Que su uso es completamente gratuito y no hay
                            una compañía detrás esperando a meter una suscripción cuando menos te
                            lo esperes.
                        </p>

                        <p>
                            También hay que añadir que admite una mayor personalización con complementos de
                            terceros. Por lo demás son prácticamente iguales.
                        </p>

                        <p>
                            Se encuentra disponible en Windows, Linux, Docker y Mac OS.
                        </p>

                        <p>
                            Sus requisitos son: procesador moderno de doble núcleo a 2 GHz o más,
                            2 GB de RAM son el mínimo funcional, pero es recomendable disponer de 4 GB,
                        </p>

                        {/**
                         *  Captura de Jellyfin: mismo estilo que la de Plex
                         */}
                        <img src={jellyfinPhoto} alt="Ejemplo de cómo se ve" 
                        className='w-full rounded-lg border border-stone-200' />

                        {/**
                         *  Enlace de descarga: mismo estilo que el de plex
                         */}
                        <a href="https://jellyfin.org/downloads/server/"
                            target='_blank'
                            rel='noreferrer'
                            className='text-sky-700 underline underline-offset-4
                            hover:text-sky-900 transition'>
                            Enlace de descarga
                        </a>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default Main;