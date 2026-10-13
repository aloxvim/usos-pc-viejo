import plexPhoto from '../assets/multimedia/plex.jpg';
import jellyfinPhoto from '../assets/multimedia/jellyfin.jpg';
import kodiPhoto from '../assets/multimedia/kodi.png';
import immichPhoto from '../assets/utilidades/immich.webp';
import batoceraPhoto from '../assets/gaming/batocera-emulationstation.jpg';
import retroarchPhoto from '../assets/gaming/retroarch.webp';

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
                                        <td>🟢 Fácil</td>
                                    </tr>

                                    <tr>
                                        <td>🎬 Multimedia</td>
                                        <td>Centro de entretenimiento (Kodi)</td>
                                        <td>🟢 Fácil-Media</td>
                                    </tr>

                                    <tr>
                                        <td>🖨️ Utilidades</td>
                                        <td>Servidor de impresoras / archivos</td>
                                        <td>🟠 Fácil-Media</td>
                                    </tr>

                                    <tr>
                                        <td>🎮 Gaming</td>
                                        <td>Consola retro (Batocera)</td>
                                        <td> 🟠Fácil-Media</td>
                                    </tr>

                                    <tr>
                                        <td>🤖 IA</td>
                                        <td>
                                            Servidor de modelos de inteligencia artificial en local
                                        </td>
                                        <td>🔴 Media-Difícil</td>
                                    </tr>

                                    <tr>
                                        <td>🖨️ Utilidades</td>
                                        <td>Google photos casero</td>
                                        <td>🔴 Media-Difícil</td>
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

                        <h3 className='text-2xl'>Servidor de streaming</h3>
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
                        <h3 className="font-bold text-2xl mt-4">Jellyfin</h3>

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

                    {/** Bloque de Kodi
                     *      Separación vertical para cada elemento
                     */}
                    <div className='space-y-4'>
                        {/**
                         *  Título negrita, tamaño al doble y separación del bloque anterior
                         */}
                        <h3 className="font-bold text-2xl mt-4">Kodi</h3>

                        <p>
                            Kodi podría parecer un reproductor multimedia común.
                            Sin embargo, tiene algo que lo diferencia, la posibilidad de
                            instalar complementos de terceros.
                        </p>

                        <p>
                            Desde cambiar por completo la interfaz hasta incluso jugar con
                            emuladores, el límite está en cuánto quieres configurar.
                        </p>

                        <p className='text-justify'>
                            Hablar en detalle de los complementos haría este blog interminable,
                            por lo que mi recomendación es, que si te decantas por usar Kodi,
                            investigues cuáles son los complementos que te interesan. Hay
                            muchos tutoriales en Internet.
                        </p>

                        <p>
                            Se encuentra disponible en Windows, Linux, Android, Raspberry Pi, LG WEB-OS,
                            Mac OS y IOS.
                        </p>

                        <p>
                            Sus requisitos son: procesador Pentium 4 o superior y
                            al menos 1 GB RAM.
                        </p>

                        {/** Captura de Kodi, mismo estilo que las anteriores */}
                        <figure>
                            <img src={kodiPhoto} alt=""
                                className='w-full rounded-lg border border-stone-200' />
                            <figcaption className='italic'>
                                Captura tomada de su página en&nbsp;
                                <a href="https://flathub.org/es/apps/tv.kodi.Kodi"
                                    target='_blank'
                                    rel='noreferrer'
                                    className='underline hover:text-black'>
                                    flathub.
                                </a>
                            </figcaption>
                        </figure>

                        {/** Enlace de descarga, mismo estilo que los anteriores */}
                        <a href="https://kodi.tv/download/"
                            target='_blank'
                            rel='noreferrer'
                            className='text-sky-700 underline underline-offset-4
                            hover:text-sky-900 transition'>
                            Enlace de descarga
                        </a>
                    </div>

                    {/**
                     *  Bloque de Utilidades
                     */}
                    <div className='space-y-4 mt-5'>
                        <h2 className="text-3xl">🖨️ Utilidades</h2>

                        <h3 className='text-2xl'>Servicios de impresión y archivos</h3>

                        <p className='text-justify'>
                            Si no quieres complicarte en exceso para la compartición de ficheros,
                            puedes usar servicios como samba o programas como Filezilla, donde puedes
                            especificar qué carpetas quieres compartir. También puedes
                            instalar un sistema operativo como Open Media Vault, pero esto último ya
                            requiere un mayor tiempo de configuración.
                        </p>

                        <p className='text-justify'>
                            En cuando al servicio de impresión, conecta la impresora físicamente
                            al servidor y utiliza el sistema CUPS (Common Unix Printing System)
                            para compartirla en la red, permitiendo que otros equipos envíen
                            trabajos de impresión.
                        </p>
                    </div>

                    {/**
                     *  Artículo de Immich
                     *      
                     */}
                    <div className='space-y-4 mt-5'>
                        <h3 className='text-2xl'>Google Photos Casero (Immich)</h3>

                        <p className='text-justify'>
                            Immich es una aplicación de código abierto y autoalojada diseñada
                            para gestionar, almacenar y respaldar fotos y videos, funcionando
                            como una alternativa privada a servicios como Google Photos o iCloud.
                        </p>

                        <p className='text-justify'>
                            Su principal ventaja es que mantiene el control total de
                            los datos en tu propio hardware, ofreciendo funciones
                            avanzadas como reconocimiento facial, búsqueda semántica
                            por contenido y sincronización automática desde móviles.
                        </p>

                        <p>
                            Sus requisitos son: CPU de al menos 2 núcleos, siendo recomendable 4;
                            mínimo 4 GB de RAM, siendo recomendable de 6 en adelante;
                            en cuanto al espacio, un 10-20% adicional para miniaturas y metadatos.
                        </p>

                        <p>
                            Se encuentra disponible mediante Docker.
                        </p>

                        {/** Bloque de texto de advertencia */}
                        <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-yellow-700">
                                        <span className="font-medium">Atención:</span> Immich permite
                                        trabajar con bibliotecas de fotos ya existentes, en su primer
                                        arranque, si tu biblioteca tiene mucho contenido, la CPU estará
                                        trabajando al límite, sé de lo que hablo.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/** Captura de pantalla, mismo estilo que las anteriores */}
                        <figure>
                            <img src={immichPhoto} alt=""
                                className='w-full rounded-lg border border-stone-200' />
                            <figcaption className='italic'>Captura descargada de la propia página de Immich.</figcaption>
                        </figure>

                        {/** Enlace de descarga, mismo estilo que los anteriores */}
                        <a href="https://immich.app/"
                            target='_blank'
                            rel='noreferrer'
                            className='text-sky-700 underline underline-offset-4
                            hover:text-sky-900 transition'>
                            Enlace de descarga
                        </a>
                    </div>

                    {/**
                     *  Bloque de Gaming
                     *      
                     */}
                    <div className='space-y-4 mt-3'>
                        <h2 className='text-3xl'>🎮 Gaming</h2>

                        <h3 className='text-2xl'>Consola retro (Batocera, RetroArch, etc...)</h3>

                        {/** Bloque de texto de advertencia */}
                        <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-yellow-700">
                                        <span className="font-medium">Atención:</span> Este artículo
                                        NO busca promover la piratería. No se proporcionarán enlaces
                                        a juegos ni cualquier otro contenido protegido por derechos de
                                        autor. Los emuladores son legales, las ROMS, depende de cómo
                                        las hayas obtenido.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className='text-justify'>
                            ¿Te acuerdas de las consolas clásicas? Uno de los usos que puedes darle a tu
                            viejo PC es el de convertirlo en un sistema de emulación, desde la NES o la
                            Megadrive hasta, si el PC puede dar la talla, PlayStation 2.
                        </p>

                        <div>
                            Aquí vas a ver 2 opciones:
                            <ul className='list-disc pl-6 space-y-1'>
                                <li>Batocera: Un sistema listo para usar.</li>
                                <li>RetroArch: Un programa que se instala sobre tu sistema actual.</li>
                            </ul>
                        </div>

                        <p>
                            Hay más opciones por si quieres curiosear.
                        </p>
                    </div>

                    {/** Bloque de Batocera
                     *      Separación vertical de elementos
                     *      Margen superior
                     */}
                    <div className='space-y-4 mt-2'>
                        <h3 className='text-2xl font-bold'>Batocera</h3>

                        <p>
                            Batocera es un sistema Linux que solo permite convertir un PC en
                            una consola retro, también permite instalar Kodi.
                        </p>

                        <p className='text-justify'>
                            Su gran ventaja es que puedes instalarlo en un USB, sin necesidad
                            de tocar la configuración de tu PC (aunque también puedes instalarlo en el disco
                            interno de tu PC).
                            Es gratis y de código abierto,
                            contando con más de 200 sistemas ya configurados.
                        </p>

                        <p className='text-justify'>
                            Sus requisitos dependen de las consolas que quieras emular.
                            Las consolas de 8 y 16 bits las mueve casi cualquier PC. Consolas
                            más potentes como Play 2 en adelante necesitarán un procesador y
                            gráfica más potentes.
                        </p>

                        {/** 
                         *  Captura de Batocera
                         *      Mismo estilo que las anteriores
                         */}
                        <figure>
                            <img src={batoceraPhoto} alt=""
                                className='w-full rounded-lg border border-stone-200' />
                            <figcaption className='italic'>
                                Captura obtenida desde&nbsp;
                                <a href="https://raspberrytips.com/batocera-installation-raspberry-pi/"
                                    target='_blank'
                                    rel='noreferrer'
                                    className='text-sky-700 underline underline-offset-4
                                                hover:text-sky-900 transition'>
                                    esta web
                                </a>
                            </figcaption>
                        </figure>

                        {/** Enlace de descarga, mismo estilo que los anteriores */}
                        <a href="https://batocera.org/download"
                            target='_blank'
                            rel='noreferrer'
                            className='text-sky-700 underline underline-offset-4
                            hover:text-sky-900 transition'>
                            Enlace de descarga
                        </a>
                    </div>

                    {/**
                     *  Bloque de RetroArch
                     *  
                     */}
                    <div className='space-y-4'>
                        <h3 className='text-2xl font-bold mt-4'>RetroArch</h3>

                        <p className='text-justify'>
                            RetroArch NO es un emulador en sí, sino un programa que "junta"
                            muchos emuladores, permitiendo la descarga de uno o varios desde 
                            el propio programa. 
                        </p>

                        <p className='text-justify'>
                            La principal diferencia con Batocera, es que RetroArch no es un sistema 
                            aparte, es un programa que se instala en tu sistema como cualquier otro.
                            Es gratuito y de código abierto.
                        </p>

                        <p>
                            Se encuentra disponible en Windows, Linux, Android, Mac OS, etc...
                        </p>

                        <p>
                            Al igual que en Batocera, los requisitos dependen de qué plataformas 
                            pretendas emular.
                        </p>

                        {/**
                         *  Captura de RetroArch, mismo estilo que las anteriores
                         */}
                        <figure>
                            <img src={retroarchPhoto} alt="" 
                            className='w-full rounded-lg border border-stone-200'/>
                            <figcaption className='italic'>
                                Captura obtenida desde&nbsp;
                                <a href="https://www.geeknetic.es/Guia/2681/RetroArch-Cuales-son-los-Mejores-Emuladores-y-Como-se-pueden-instalar.html"
                                target='_blank'
                                    rel='noreferrer'
                                    className='text-sky-700 underline underline-offset-4
                                                hover:text-sky-900 transition'>
                                    esta web.
                                </a>
                            </figcaption>
                        </figure>

                        {/** Enlace de RetroArch, mismo estilo que los anteriores */}
                        <a href="https://www.retroarch.com/?page=platforms"
                            target='_blank'
                            rel='noreferrer'
                            className='text-sky-700 underline underline-offset-4
                            hover:text-sky-900 transition'>
                            Enlace de descarga
                        </a>
                    </div>

                    {/**
                     *  Bloque de la IA (me refiero a la explicación)
                     */}
                    <div className='space-y-4 mt-3'>
                        <h2 className='text-3xl'>Servidor de IA local</h2>

                        <p className='text-justify'>
                            Seamos sinceros, la IA ha llegado para quedarse. Uno de los problemas 
                            que tienen los modelos más conocidos actualmente, es que dependen de 
                            servicios de empresas que pueden cambiar las condiciones de uso en 
                            cualquier momento, y además de que los chats que tienes con ellos, 
                            se usan para entrenar dichos modelos.
                        </p>

                        <p>
                            A día de hoy hay muchas maneras de instalar modelos de IA local, 
                            como recomendación de un método relativamente sencillo, existe un programa
                            que se llama "LM Studio". Es gratuito y dispones de un montón de modelos 
                            para probar.
                        </p>

                        {/** Bloque de texto de advertencia */}
                        <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-yellow-700">
                                        <span className="font-medium">Atención:</span> A diferencia de 
                                        otros apartados, donde los requisitos de hardware estaban 
                                        relativamente fijos, en este caso es algo muy variable.
                                        Tienes modelos como "Phi-4 Mini 3.8B" que con unos 4 GB RAM es suficiente, 
                                        y auténticos devoradores de recursos como "Llama 4 405B" 
                                        (necesita más de 128 GB de RAM y configuración multi-GPU)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p>
                            Cuanto menos pidan los modelos para ejecutarse, menores serán sus 
                            capacidades.
                        </p>

                        <p>
                            Y tú te estarás preguntando: ¿Cuál es la gracia de esto entonces?
                        </p>

                        <p>
                            Pues que no todos los chats necesitan ser un análisis exhaustivo 
                            de una fórmula matemática innecesariamente compleja, o el código para 
                            hacer una decompilación de programas grandes. 
                        </p>

                        <p>
                            Puedes pedirle un resumen corto, que te traduzca algo a otro idioma, 
                            y en algunos casos, son capaces de analizar imágenes.
                        </p>
                        
                        <div>
                            Este caso de uso tiene 2 ventajas principales:
                            <ul className='list-disc pl-6 space-y-1'>
                                <li>No necesitas conexión a internet una vez has descargado el modelo</li>
                                <li>
                                    Tus chats son privados (ideal si manejas información sensible como finanzas)
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className='mt-6'/>

                    {/** Bloque de agradecimiento */}
                    <div className='space-y-4 mt-6'>
                        <p className='text-justify'>
                            Si has llegado hasta aquí quiero darte las gracias por leer esto.
                            Soy consciente de que hay muchos blogs como este, pero este proyecto 
                            era para practicar.
                        </p>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default Main;