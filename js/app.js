//Textos o Titulos
let titulo_ganar = document.querySelector('#Titulo_Ganar')
let titulo_perder = document.querySelector('#Titulo_Perder')

titulo_ganar.setAttribute('class', 'Ocultar')
titulo_perder.setAttribute('class', 'Ocultar')

//Numeros
let numero_consola = document.querySelector('.Numero_Consola')
let numero_usuario = document.querySelector('.Numero_Usuario')
let num_Usuario = document.querySelector('.Eleccion_Numero')
let num_Consola
let numero

//Botones
let btn_empezar = document.querySelector('#Boton_Empezar')
let btn_reintentar = document.querySelector('#Boton_Reintentar')
let reintentar = false
btn_reintentar.setAttribute('class', 'Ocultar')
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//CODIGO
do {
   function numeroRandom() {
      num_Consola = Math.floor(Math.random() * (10) + 1);
   }

   function numeroUsuario() {
      numero = num_Usuario.value;
      numero_usuario.innerHTML = numero
   }

   btn_empezar.addEventListener('click', () => {
      if (num_Usuario.value == "N") {
         setTimeout(1000)
         alert('Debes elegir un Numero !')

      } else {
         setTimeout(() => {
            numeroUsuario()
         }, 1000);
         setTimeout(() => {
            numeroRandom()
            numero_consola.innerHTML = num_Consola
         }, 2500);

         setTimeout(() => {
            if (numero == num_Consola) {
               titulo_ganar.removeAttribute('class', 'Ocultar')
   
            }else{
               titulo_perder.removeAttribute('class', 'Ocultar')
            }
         }, 3000);
      
         setTimeout(() => {
            btn_reintentar.removeAttribute('class', 'Ocultar')
            btn_empezar.setAttribute('class', 'Ocultar')
         }, 3500);
      }
   });

   btn_reintentar.addEventListener('click', () => {
      reintentar == false
      numero_consola.innerHTML = ""
      numero_usuario.innerHTML = ""

      btn_reintentar.setAttribute('class', 'Ocultar')
      btn_empezar.removeAttribute('class', 'Ocultar')
      titulo_ganar.setAttribute('class', 'Ocultar')
      titulo_perder.setAttribute('class', 'Ocultar')
   });


} while (reintentar == true);
















