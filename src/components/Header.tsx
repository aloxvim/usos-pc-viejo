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
     *      
     */
    return (
        <header className='bg-black flex items-center justify-between p-2'>
            {/**
             *  Foto de perfil
             *      Imagen de perfil: "Early Evening" de Michal Kváč - ArtStation - https://www.artstation.com/kvacm
             *      Altura y anchura de 24
             *      Redondeado
             *      Object-cover: recorta la foto para llenar el círculo sin deformarla
             *      
             */}
            <section>
                <img
                    src={profilePhoto}
                    alt="Foto de perfil"
                    className='h-24 w-24 rounded-full object-cover'
                />
            </section>

            {/**
             *  Sección de enlaces
             *      Posicionada a la derecha
             *      Los enlaces se muestran en la misma linea horizontal con un margen entre ellos
             *      Los enlaces se abren en una pestaña nueva
             *      Cada enlace es un logotipo de la red social a la que apunta
             *      Los enlaces se oscurecen al pasarles el ratón por encima
             */}
            <div className='flex gap-6'>
                <a href="https://www.instagram.com/aloxvim/" target='_blank' rel='noreferrer' className='hover:opacity-80 transition'>
                    <img src={instagramLogo} alt="Enlace a mi perfil de Instagram" />
                </a>
                <a href="https://www.github.com/aloxvim" target='_blank' rel='noreferrer' className='hover:opacity-80 transition'>
                    <img src={githubLogo} alt="Enlace a mi perfil de Github" />
                </a>
                <a href="" target='_blank' rel='noreferrer' className='hover:opacity-80 transition'>
                    <img src={youtubeLogo} alt="Enlace a mi perfil de Youtube" />
                </a>
            </div>

        </header>
    );

}

export default Header;