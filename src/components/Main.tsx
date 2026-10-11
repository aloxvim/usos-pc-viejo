import plexPhoto from '../assets/multimedia/plex.jpg';
import jellyfinPhoto from '../assets/multimedia/jellyfin.jpg';

function Main() {
    return (

        <main className="mx-auto max-w-3x1 px-4 py-8 text-lg leading-relaxed">

            <article>
                <section>
                    <p>
                        ¿Tienes un ordenador antiguo en casa, que ya no puede mover los sistemas actuales
                        de forma fluida, y no quieres deshacerte de él porque aún funciona? Pues no te
                        preocupes, aquí vas a ver una serie de usos que puedes darle para tener una
                        "segunda vida".
                    </p>
                </section>

                <section className="">
                    <h3 className="text-2xl">Resumen</h3>

                    <p>
                        Aquí va un pequeño resumen de lo que se puede hacer, se detallará más adelante:
                    </p>


                    <div className='overflow-x-auto'>
                        <table
                            className="border border-gray-300 border-separate 
                                       border-spacing-x-4 border-spacing-y-2
                                       rounded-lg">
                            <thead>
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
                <div>
                    {/** Explicación multimedia */}
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

                <div>
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

                    <img src={plexPhoto} alt="Ejemplo de cómo se ve un servidor" className='h-100' />

                    <p>
                        Plex tiene una pega, y es que varias de sus características, icluida
                        la posibilidad de hacer stream fuera de tu casa, están sujetas a una
                        suscripción mensual o un pago único.
                    </p>

                    <a href="https://www.plex.tv/es/media-server-downloads/"
                        target='_blank'
                        rel='noreferrer'
                        className='underline'>Enlace de descarga</a>
                </div>

                <div>
                    <h3 className="font-bold text-2xl">Jellyfin</h3>

                    <p>
                        A resumidas cuentas. Jellyfin es lo mismo que plex pero con 3 diferencias clave:
                    </p>

                    <ol>
                        <li>Es software libre</li>
                        <li>Es código abierto</li>
                        <li>No tiene muros de pago</li>
                    </ol>

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

                    <img src={jellyfinPhoto} alt="Ejemplo de cómo se ve" className='h-100' />

                    <a href="https://jellyfin.org/downloads/server/"
                        target='_blank'
                        rel='noreferrer'
                        className='underline'>
                        Enlace de descarga
                    </a>
                </div>
            </div>

        </main>

    );
}

export default Main;