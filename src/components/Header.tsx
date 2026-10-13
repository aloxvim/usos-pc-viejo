import profilePhoto from '../assets/profile.jpeg'; // Importar la foto de perfil
import instagramLogo from '../assets/logotipo-de-instagram_32px.png'; // Importar el logotipo de Instagram
import githubLogo from '../assets/github-logotipo_32px.png'; // Importar el logotipo de Github
import youtubeLogo from '../assets/youtube-logotipo_32px.png'; // Importar el logotipo de Youtube

function Header() {

    /**
     * Cabecera
     *      Fondo oscuro
     *      Display flex
     *      Separación de elementos hacia los extremos
     *      Alineación vertical al centro
     *      Padding de 2 en los 4 lados
     *      Recolocación del título en pantallas móviles
     */
    return (
        <header className='bg-black flex flex-wrap items-center justify-between gap-3 p-3 sm:p-4'>
            {/**
             *  Foto de perfil
             *      Imagen de perfil: "Early Evening" de Michal Kváč - ArtStation - https://www.artstation.com/kvacm
             *      Altura y anchura de 24
             *      Redondeado
             *      Object-cover: recorta la foto para llenar el círculo sin deformarla
             *      Tamaño distinto para la foto según el tamaño de pantalla
             */}
            <section>
                <img
                    src={profilePhoto}
                    alt="Foto de perfil"
                    className='h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full object-cover object-center'
                />
            </section>

            {/**
             *  Título de la web
             *      Colocación en según que fila dependiendo del tamaño de pantalla
             */}
            <div className="order-3 w-full text-center sm:order-none sm:w-auto sm:flex-1 sm:px-3">
                <h1 className="text-white text-lg sm:text-xl lg:text-3xl font-isometra italic leading-tight">
                    Usos para ordenadores antiguos
                </h1>
            </div>

            {/**
             *  Sección de enlaces
             *      Posicionada a la derecha
             *      Los enlaces se muestran en la misma linea horizontal con un margen entre ellos
             *      Los enlaces se abren en una pestaña nueva
             *      Cada enlace es un logotipo de la red social a la que apunta
             *      Los enlaces se oscurecen al pasarles el ratón por encima
             *      Adaptación según el tamaño de pantalla
             */}
            <nav aria-label="Redes sociales"
                className="flex shrink-0 items-center gap-3 sm:gap-4 lg:gap-6">
                <a href="https://www.instagram.com/aloxvim/" target='_blank' rel='noreferrer' className='hover:opacity-80 transition'>
                    <img src={instagramLogo} alt="Enlace a mi perfil de Instagram" />
                </a>
                <a href="https://www.github.com/aloxvim" target='_blank' rel='noreferrer' className='hover:opacity-80 transition'>
                    <img src={githubLogo} alt="Enlace a mi perfil de Github" />
                </a>
                <a href="" target='_blank' rel='noreferrer' className='hover:opacity-80 transition'>
                    <img src={youtubeLogo} alt="Enlace a mi perfil de Youtube" />
                </a>
            </nav>

        </header>
    );

}

export default Header;