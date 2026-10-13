

function Footer() {
    return (
        /**
         *  Pie de página
         *      Color de fondo oscuro
         *      Display flex
         *      Separación de elementos a los extremos
         *      Texto de color blanco
         */
        <footer className='bg-black flex flex-wrap items-center justify-between gap-x-3 gap-y-2 p-2 text-white'>

            {/**
             *  Enlace al perfil de Github
             *      Aunque se use el logo de los derechos de autor
             *          este proyecto es software libre y código abierto
             *          como ya he dicho en el readme, esto es para practicar React.
             *          Diseño responsive
             */}
            <div className="shrink-0 whitespace-nowrap text-xs sm:text-sm">
                <a href="https://www.github.com/aloxvim"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline">© aloxvim</a>
            </div>

            {/**
             *  Sección de enlaces
             *      Display flex
             *      Elementos colocados horizontalmente en linea recta
             *      Los enlaces se subrayan al pasar el ratón por encima
             *      Diseño responsive
             */}
            <nav aria-label="Créditos"
                className="flex flex-1 flex-wrap items-center justify-end gap-x-2 gap-y-1 
                            text-xs sm:gap-x-3 sm:text-sm">
                <span className='font-semibold'>Créditos:</span>
                <a className='hover:underline'
                    href="https://www.flaticon.es/iconos-gratis/imagen-de-perfil" target="_blank">Icono usuario</a>
                <a className='hover:underline'
                    href="https://www.artstation.com/kvacm" target="_blank">Foto de perfil</a>
                <a className='hover:underline'
                    href="https://www.flaticon.es/iconos-gratis/logotipo-de-instagram" target="_blank">Instagram</a>
                <a className='hover:underline'
                    href="https://www.flaticon.es/iconos-gratis/github" target="_blank">Github</a>
                <a className='hover:underline'
                    href="https://www.flaticon.es/iconos-gratis/youtube" target="_blank">Youtube</a>
                <a className='hover:underline'
                    href="https://www.flaticon.es/iconos-gratis/computadora" target="_blank">PC Favicon</a>
            </nav>
        </footer>
    );
}

export default Footer;