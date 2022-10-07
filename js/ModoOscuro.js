//ELEMENTOS
const body = document.querySelector('body')
const header = document.querySelector('header')
const footer = document.querySelector('footer')

//HEADER
const icono_sol = document.querySelector('#Icono_Sol')
const icono_luna = document.querySelector('#Icono_Luna')
const icono_youtube = document.getElementById('Icono_Youtube')
const icono_github = document.querySelector('#Icono_GitHub')
const Boton_Header = document.querySelector('.Boton_Header')

//CONTENEDORES
const contenedor_principal = document.querySelector('.Contenedor_Principal')
const contenedor_numero_usuario = document.querySelector('.Contenedor_Numero_Usuario')
const contenedor_numero_consola = document.querySelector('.Contenedor_Numero_Consola')


//CONTENIDO
const btn = document.querySelector('.Boton_Header')
const opcion_numero = document.querySelector('.Eleccion_Numero')
icono_sol.classList.toggle('Ocultar')


//-------------------------------------------------------------------------------------------------------------------------------------------



//CAMBIOS
btn.addEventListener('click',()=>{
    body.classList.toggle('Modo_Oscuro')
    icono_luna.classList.toggle('Ocultar')
    icono_sol.classList.toggle('Ocultar')
    header.classList.toggle('Header_Oscuro')
    footer.classList.toggle('Footer_Oscuro')
    opcion_numero.classList.toggle('Eleccion_Numero_Oscuro')

    if(body.classList == 'Modo_Oscuro'){
        contenedor_principal.setAttribute('id','Contenedor_Principal_Oscuro')
        contenedor_numero_usuario.setAttribute('id', 'Contenedor_Numero_Usuario_Oscuro')
        contenedor_numero_consola.setAttribute('id', 'Contenedor_Numero_Consola_Oscuro')
        Boton_Header.setAttribute('id', 'Boton_Header_Oscuro')
        icono_youtube.setAttribute('id', 'Icono_Youtube_Oscuro')
        icono_github.setAttribute('id', 'Icono_GitHub_Oscuro')

    }else{
        contenedor_principal.removeAttribute('id', 'Contenedor_Principal_Oscuro')
        contenedor_numero_usuario.removeAttribute('id', 'Contenedor_Numero_Usuario_Oscuro')
        contenedor_numero_consola.removeAttribute('id', 'Contenedor_Numero_Consola_Oscuro')
        Boton_Header.removeAttribute('id', 'Boton_Header_Oscuro')
        icono_youtube.removeAttribute('id', 'Icono_Youtube_Oscuro')
        icono_github.removeAttribute('id', 'Icono_GitHub_Oscuro')
        icono_youtube.setAttribute('id', 'Icono_Youtube')
        icono_github.setAttribute('id', 'Icono_GitHub')

    }




})